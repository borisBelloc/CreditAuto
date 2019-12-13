export class Simulation {
  amountPurchase: number;
  amountLoan: number;
  category: number;
  durationLoan: number;
  loanCost: number;

  constructor(amountPurchase, amountLoan, category, durationLoan) {
    this.amountPurchase = amountPurchase;
    this.amountLoan = amountLoan;
    this.category = category;
    this.durationLoan = durationLoan;
  }
}
