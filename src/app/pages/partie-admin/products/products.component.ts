import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StoreService } from 'src/app/services/store.service';
import { BrowserModule } from '@angular/platform-browser'
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from "@angular/platform-browser";
import { MatDialog } from '@angular/material/dialog';
import { Produit } from 'src/app/models/produit';





@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Produit:any=[]
  Categorie:any=[]

  constructor(private link:StoreService,private sanitizer:DomSanitizer,private dialog:MatDialog) { }
  reffilter!:String ;
  statusfilter!:String;
  Categoriefilter!:String;

gatAllCategorie(){
  this.link.getAllCategories().subscribe(categories =>{
    this.Categorie=categories
  })
}


  ngOnInit(): void {
    this.link.AdmingetAllProducts().subscribe(products =>{
      this.Produit=products
      console.log(this.Produit)
    })
   this.gatAllCategorie()
  }

  transform(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

     }
     @ViewChild('productDialog') productDialog!: TemplateRef<any>;
     @ViewChild('deleteproduct') deleteproduct!: TemplateRef<any>;
     @ViewChild('editproductDialog') editproduct!: TemplateRef<any>;


     openAddProductDialog() {
      this.dialog.open(this.productDialog);
    }
    productName!:string
    produit:FormGroup=new FormGroup({
        refer:new FormControl(''),
        nom:new FormControl(''),
        categ:new FormControl(''),
        img:new FormControl(''),
        desc:new FormControl(''),
        prixancient:new FormControl(''),
        prix:new FormControl(''),


    }

    );
    get refer(){
      return this.produit.get('refer')?.value
    }
    get nom(){
      return this.produit.get('nom')?.value
    }
    get categ(){
      return this.produit.get('categ')?.value
    }
    get img(){
      return this.produit.get('img')?.value
    }
    get desc(){
      return this.produit.get('desc')?.value
    }
    get prixancient(){
      return this.produit.get('prixancient')?.value
    }
    get prix(){
      return this.produit.get('prix')?.value
    }
    addProduct(){

      let pr:Produit=new Produit(this.refer,this.nom,this.categ,this.img,this.desc,this.prixancient,this.prix)

      this.link.addProduit(pr).subscribe(
        () => {
          this.dialog.closeAll()
          window.location.reload()
        }
      )
    }
    openDeleteProductDialog(){
      this.dialog.open(this.deleteproduct);

    }
    closeDialog(){
      this.dialog.closeAll()
    }
    deleteProduit(id:number){
      this.link.deleteProduct(id).subscribe(
        ()=>{
          this.dialog.closeAll()
          window.location.reload()
        }
      )
    }
    ProdFilter:FormGroup=new FormGroup({
      ref:new FormControl(''),
      status: new FormControl(''),
      categorie:new FormControl('')
    })
    get ref(){
      return this.ProdFilter.get('ref')?.value
    }
    get status(){
      return this.ProdFilter.get('status')?.value
    }
    get categorie(){
      return this.ProdFilter.get('categorie')?.value
    }

    filterRef(val:string){
      let k =this.Produit.filter((v: { refprod: string; })=>{
            v.refprod==val


          })

    }

    refrech(){
      let randomstring!: string
      let characters="ABCDEFGHIJKLMNOPQRSTUVWYZ123456789abcdefghijklmnopqrstuvwyz-!_0"
      for(let i=0;i<=7;i++){
        randomstring += characters.charAt(Math.floor(Math.random() * characters.length))
      }
      this.produit.get('refer')?.setValue(randomstring)    }
      p!:any


      openEditProductDialog(id:number){

        this.link.getProduitById(id).subscribe((response)=>{
          this.p=response
          console.log(this.p)
          this.produit.get('refer')?.setValue(this.p.refprod)
          this.produit.get('nom')?.setValue(this.p.nomProd)
          this.produit.get('categ')?.setValue(this.p.idCateg)
          this.produit.get('img')?.setValue(this.p.image)
          this.produit.get('desc')?.setValue(this.p.description)
          this.produit.get('prixancient')?.setValue(this.p.prixAncient)
          this.produit.get('prix')?.setValue(this.p.prix)
        })

        this.dialog.open(this.editproduct);

      }


      editProduct(id:number){
        this.link.editProduit(id,this.p).subscribe(()=>{
          this.dialog.closeAll()
          window.location.reload()
        })
      }

}
