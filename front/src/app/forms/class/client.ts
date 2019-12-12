export class Client {
  name: string;
  firstName: string;
  gender: string;
  address: string;
  city: string;
  postalCode: number;
  email: string;
  birthday: string;

  constructor(
    name: string,
    firstName: string,
    gender: string,
    address: string,
    city: string,
    postalCode: number,
    email: string,
    birthday: string
  ) {
    this.name = name;
    this.firstName = firstName;
    this.gender = gender;
    this.address = address;
    this.city = city;
    this.postalCode = postalCode;
    this.email = email;
    this.birthday = birthday;
  }
}
