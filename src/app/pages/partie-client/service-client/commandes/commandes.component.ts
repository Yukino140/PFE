import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Commande } from 'src/app/models/commande';
import { LigneCommande } from 'src/app/models/ligne-commande';
import { Produit } from 'src/app/models/produit';
import { Retour } from 'src/app/models/retour';
import { StoreService } from 'src/app/services/store.service';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {

  constructor(private link:StoreService,private dialog:MatDialog) { }

    Commande:any=[]
  idClient:number=+localStorage.getItem('id')!
  getAllCommande(id:any){
    this.link.getAllCommandeForClient(id).subscribe((response) =>{
      this.Commande=response
      console.log(this.Commande)

    })
  }
  fileName='ExcelSheet.xlsx'
  ngOnInit(): void {
    this.getAllCommande(this.idClient)
  }
  extractExcel():void{
    /* pass here the table id */
    let element = document.getElementById('table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
  LigneCommande:any=[]
  info(id:number){
    this.link.getLigneCommandeByid(id).subscribe((data)=>{



      this.LigneCommande = data;
      this.LigneCommande.forEach((commande: { idprod: any; prod: Produit; })=>{
        let foreignKey = commande.idprod
        this.link.getProduitById(foreignKey).subscribe((data)=>{
          commande.prod = data;
        })
      })


      console.log(this.LigneCommande)

    })
  }
  @ViewChild('infoCommande') infoCommande!: TemplateRef<any>;
  @ViewChild('retourCommande') retourCommande!: TemplateRef<any>;
  @ViewChild('success') success!: TemplateRef<any>;
  @ViewChild('listeretour') listeretour!: TemplateRef<any>;



  openInfo(id:number){
    this.dialog.open(this.infoCommande);
    this.info(id)
  }
  total(a:number,b:number){
    return a*b

  }
  k:FormGroup=new FormGroup({
    desc:new FormControl(''),
    quan:new FormControl('')
  })

  retour(id:number){
    console.log(id)
    this.link.getOneCommande(id).subscribe(res=>{
      let c:any=res
      console.log(c)
      let r:Retour=new Retour(c[0].id,this.k.get('desc')?.value,this.k.get('quan')?.value)
      console.log(r)
      this.link.demandeRetour(r).subscribe(()=>{
        this.dialog.closeAll()
        this.dialog.open(this.success)
      })
    })

  }
 c:any=[]
  demandeRetour(id:number){
    this.link.getOneCommande(id).subscribe(res=>{
      this.c=res

    })
    this.dialog.closeAll();
    this.dialog.open(this.retourCommande)
  }

Retour:any=[]
liste(id:number){
  this.dialog.closeAll();
  this.dialog.open(this.listeretour)
  this.link.getRetourByCommande(id).subscribe((data)=>{



    this.Retour = data;
    console.log(this.Retour);
    this.Retour.forEach((r: {
      prd: Produit; idcommande: any; commande: LigneCommande;
})=>{
      let foreignKey = r.idcommande
      this.link.getLigneCommandeByid(foreignKey).subscribe((data)=>{
        r.commande = data;
        let lg:any=data
        lg.forEach((ligne: { idprod: any; prd: Produit; })=>{
        let fk=lg[0].idprod
        this.link.getProduitById(fk).subscribe((data)=>{
          r.prd = data;
        })
        })
      })
    })


    console.log(this.Retour)


})
}
Acceptation(k:boolean){
  if(k==true){
    return " Demande Accepté"
  }else if(k==false){
    return "Demande Refusé"
  }else{
    return "Demande en train d'etudier"
  }
}
}
