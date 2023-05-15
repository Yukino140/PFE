import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {

  constructor(private link:StoreService) { }

    Commande:any=[]
  idClient=1
  getAllCommande(id:number){
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

}
