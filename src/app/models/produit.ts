export class Produit {

  constructor(
    public  refprod:string,
    public nomProd:string,
    public idCateg:number,
    public image:string,
    public description:string,
    public prixAncient:number,
    public prix:number,
    public id?:number

    ){}



}
