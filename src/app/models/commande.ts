export class Commande {
  constructor(
    public id:number,
    public nom:String,
    public shippingAddress:String,
    public codePostal:number,
    public dateCommande:String,
    public moyenPaiement:String,
    public totaleComamnde:number,
    public paiementValide:Boolean,
    public idClient:number,
    public StatusCommande:String
  ){

  }
}
