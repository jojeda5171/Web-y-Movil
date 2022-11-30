export class Tracing {
  _id?: string;
  tipe: string;
  client: string;
  agencia: string;

  constructor(tipe: string, client: string, agencia: string) {
    this.tipe = tipe;
    this.client = client;
    this.agencia = agencia;
  }
}
