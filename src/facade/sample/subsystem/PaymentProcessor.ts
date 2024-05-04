export class PaymentProcessor {
  processCreditPayment(accountId: string, amount: number): boolean {
    console.log(
      `Processing a credit payment of $${amount} for account ${accountId}`,
    );
    return true; // Simplified payment logic
  }
}
