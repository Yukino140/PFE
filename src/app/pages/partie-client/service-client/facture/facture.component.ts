import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Commande } from 'src/app/models/commande';
import { LigneCommande } from 'src/app/models/ligne-commande';
import { Produit } from 'src/app/models/produit';
import { StoreService } from 'src/app/services/store.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Facture } from 'src/app/models/facture';
var htmlToPdfmake = require("html-to-pdfmake");
import * as XLSX from 'xlsx'




(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {
  @ViewChild('showFacture') showFacture!: TemplateRef<any>;


  constructor(private store:StoreService,private dialog:MatDialog) { }

    Facture:any=[]
    LigneCommande:any=[]
    idClient:number=+localStorage.getItem('id')!

    getFacture(){

      this.store.getFactureByClients(this.idClient).subscribe(res=>{
        this.Facture=res;

        this.Facture.forEach((facture: { idCommande: any; cmd: Commande; })=>{
          let foreignKey = facture.idCommande
          this.store.getOneCommande(foreignKey).subscribe((data)=>{
            facture.cmd = data;
            console.log(this.Facture)
          })
        })
        this.Facture.forEach((facture: { idCommande: any; lcm: LigneCommande; })=>{
          let foreignKey = facture.idCommande
          this.store.getLigneCommandeByid(foreignKey).subscribe((data)=>{
            facture.lcm = data;
            this.LigneCommande=data
            console.log()
            this.LigneCommande.forEach((ligne: { idprod: any; prd: Produit; })=>{
                  let foreignKey = ligne.idprod
                  this.store.getProduitById(foreignKey).subscribe((data)=>{
                    ligne.prd = data;
                    console.log(this.Facture)
                  })
                })
          })
        })

      })
    }
    @ViewChild('pdfTable') pdfTable!: ElementRef;


  ngOnInit(): void {
    this.getFacture()
  }
  factureselect:any=[]
  show(id:number){
    this.factureselect
    this.dialog.open(this.showFacture);
    this.store.getOneFacture(id).subscribe(res=>{
      this.factureselect=res
      console.log(this.factureselect)
    })
  }
  total(n:number,n1:number){
    return n*n1
  }
  @ViewChild('pdfTable' ,{static:false})el!:ElementRef
  generatePDF() {
    const doc = new jsPDF('p','pt','a4');


   doc.html(this.el.nativeElement,{
    callback(doc) {

        doc.save('facture.pdf')
    },
   })



  }
  close(){
    this.dialog.closeAll()
  }


  extractExcel():void{
    /* pass here the table id */
    let element = document.getElementById('table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb,"Liste des Factures.xlsx");
  }
}
