export class Simulation {
  amountPurchase: number;
  amountLoan: number;
  category: number;
  durationLoan: number;
  totalCost: number;
  monthlyCost: number;
  repaymentSchedule: object;

  constructor(amountPurchase, amountLoan, category, durationLoan) {
    this.amountPurchase = amountPurchase;
    this.amountLoan = amountLoan;
    this.category = category;
    this.durationLoan = durationLoan;
  }
}
