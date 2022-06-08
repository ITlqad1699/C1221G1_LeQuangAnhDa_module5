export class Company {
  conpanyId: number;
  name: string;
  country: string;

  constructor(conpanyId: number, name: string, country: string) {
    this.conpanyId = conpanyId;
    this.name = name;
    this.country = country;
  }
}
