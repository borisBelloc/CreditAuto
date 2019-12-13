export class AdresseClient {
  address: string;
  zipCode: number;
  city: string;

  constructor(address: string, zipCode: number, city: string) {
    this.address = address;
    this.zipCode = zipCode;
    this.city = city;
  }
}
