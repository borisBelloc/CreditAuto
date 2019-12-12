export class AdresseClient {
  address: string;
  zipCode: string;
  city: number;

  constructor(address: string, zipCode: string, city: number) {
    this.address = address;
    this.zipCode = zipCode;
    this.city = city;
  }
}
