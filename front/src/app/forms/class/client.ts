export class Client {
  lastName: string;
  firstName: string;
  gender: string;
  address: object;
  email: string;
  birthdate: string;

  constructor(
    lastName: string,
    firstName: string,
    gender: string,
    address: object,
    email: string,
    birthdate: string
  ) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.gender = gender;
    this.address = address;
    this.email = email;
    this.birthdate = birthdate;
  }
}
