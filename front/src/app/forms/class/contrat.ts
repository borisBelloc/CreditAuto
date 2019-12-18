import { Client } from './client';

export class Contrat {
  numContract: number;
  client: Client;
  vehicleCategory: number;
  isActive: boolean;
  dateContract: string;
  dateStartPayement: string;
  loanDuration: number;
  purchaseAmount: number;
  loanRate: number;
}
