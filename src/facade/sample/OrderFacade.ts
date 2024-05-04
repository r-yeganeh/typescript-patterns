import { InventoryManager } from './subsystem/InventoryManager';
import { PaymentProcessor } from './subsystem/PaymentProcessor';
import { ShippingManager } from './subsystem/ShippingManager';

// Facade
export class OrderFacade {
  private inventoryManager = new InventoryManager();
  private paymentProcessor = new PaymentProcessor();
  private shippingManager = new ShippingManager();

  placeOrder(itemId: string, accountId: string, amount: number): boolean {
    if (!this.inventoryManager.checkStock(itemId)) {
      console.log('Failed to place order: Item is out of stock.');
      return false;
    }
    if (!this.paymentProcessor.processCreditPayment(accountId, amount)) {
      console.log('Failed to place order: Payment was declined.');
      return false;
    }
    this.shippingManager.scheduleDelivery(itemId, accountId);
    console.log('Order placed successfully.');
    return true;
  }
}
