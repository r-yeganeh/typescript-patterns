export class ShippingManager {
  scheduleDelivery(itemId: string, accountId: string): void {
    console.log(
      `Scheduling delivery for item ${itemId} to account ${accountId}`,
    );
  }
}
