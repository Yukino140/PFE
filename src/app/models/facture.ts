export class Facture {
  constructor(
    public idCommande:number,
    public prixHT:number,
    public tva:number,
    public prixTTC:number,
    public datecreation?:Date,
    public id?:number
  ){

  }
}
