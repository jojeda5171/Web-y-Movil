export class Channel {
  _id?: string;
  name: string;
  tipe: string;

  constructor(name: string, tipe: string) {
    this.name = name;
    this.tipe = tipe;
  }
}
