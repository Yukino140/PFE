export class Commande {
  constructor(

    public nom:String,
    public shippingAddress:String,
    public codePostal:number,
    public dateCommande:String,
    public moyenPaiement:String,
    public totalCommande:number,
    public paiementValide:Boolean,
    public StatusCommande:String,
    public idClient:number,
    public id?:number,

  ){

  }
}
