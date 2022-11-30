export class Mechanic {
  _id?: string;
  name: string;
  lastname: string;
  phone: string;

  constructor(name: string, lastname: string, phone: string) {
    this.name = name;
    this.lastname = lastname;
    this.phone = phone;
  }
}
