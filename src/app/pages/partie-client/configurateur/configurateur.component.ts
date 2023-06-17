import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Categorie } from 'src/app/models/categorie';
import { Produit } from 'src/app/models/produit';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-configurateur',
  templateUrl: './configurateur.component.html',
  styleUrls: ['./configurateur.component.scss']
})
export class ConfigurateurComponent {
  constructor(private dialog:MatDialog,private store:StoreService){}
  @ViewChild('processeur') processeur!: TemplateRef<any>;
  @ViewChild('refroidisseur') refroidisseur!: TemplateRef<any>;
  @ViewChild('cartemere') cartemere!: TemplateRef<any>;
  @ViewChild('memoirevive') memoirevive!: TemplateRef<any>;
  @ViewChild('graphique') graphique!: TemplateRef<any>;
  @ViewChild('disquedur') disquedur!: TemplateRef<any>;
  @ViewChild('ssd') ssd!: TemplateRef<any>;
  @ViewChild('boitier') boitier!: TemplateRef<any>;
  @ViewChild('alimentation') alimentation!: TemplateRef<any>;
  @ViewChild('wifi') wifi!: TemplateRef<any>;
  @ViewChild('patethermique') patethermique!: TemplateRef<any>;



  composant:String[]=[
    "PROCESSEUR","REFROIDISSEUR ET AIO","CARTE MERE","MEMOIRE VIVE","CARTE GRAPHIQUE","DISQUE DUR","SSD","BOITIER","ALIMENTATION","WIFI PCI EX - CASE FANS","PATE THERMIQUE"
  ]
  k:any
  openDeleteProcesseurDialog(){
    this.dialog.open(this.processeur)

  }
  Openrefroidisseur(){
    this.dialog.open(this.refroidisseur)

  }
  opencartemere(){
    this.dialog.open(this.cartemere)

  }
  openmemoirevive(){
    this.dialog.open(this.memoirevive)

  }
  opengraphique(){
    this.dialog.open(this.graphique)

  }
  opendisquedur(){
    this.dialog.open(this.disquedur)

  }
  openssd(){
    this.dialog.open(this.ssd)

  }
  openboitier(){
    this.dialog.open(this.boitier)

  }
  openalimentation(){
    this.dialog.open(this.alimentation)

  }
  openwifi(){
    this.dialog.open(this.wifi)

  }
  openpatethermique(){
    this.dialog.open(this.patethermique)

  }
  close(){
    this.dialog.closeAll()
  }
  m:any
  choisirProduit(p:Produit){
    this.m=p
  }
  Produit:any=[]

  ngOnInit(){
    this.getProduct()
  }
  getProduct(){
    this.store.AdmingetAllProducts().subscribe(res=>{
      this.Produit=res
      this.Produit.forEach((pr: { idCateg: any; categorie: Categorie; }) => {
        let fk=pr.idCateg
        this.store.getCategorieById(fk).subscribe(res=>{
          pr.categorie=res
          console.log(this.Produit)
        })
      });
    })
  }


  @ViewChild('procAjoute', { static: true }) elementAjoute!: ElementRef;
  @ViewChild('processeurAjouter', { static: true }) ea!: ElementRef;
  @ViewChild('refroiAjouter', { static: true }) refroiAjouter!: ElementRef;
  @ViewChild('refroisisseurAjouter', { static: true }) refroisisseurAjouter!: ElementRef;
  @ViewChild('carteMAjouter', { static: true }) carteMAjouter!: ElementRef;
  @ViewChild('carteMereAjouter', { static: true }) carteMereAjouter!: ElementRef;
  @ViewChild('memoireVAjouter', { static: true }) memoireVAjouter!: ElementRef;
  @ViewChild('memoireViveAjouter', { static: true }) memoireViveAjouter!: ElementRef;
  @ViewChild('carteGAjouter', { static: true }) carteGAjouter!: ElementRef;
  @ViewChild('carteGraphiqueAjouter', { static: true }) carteGraphiqueAjouter!: ElementRef;
  @ViewChild('disqueDAjouter', { static: true }) disqueDAjouter!: ElementRef;
  @ViewChild('disqueDurAjouter', { static: true }) disqueDurAjouter!: ElementRef;
  @ViewChild('sAjouter', { static: true }) sAjouter!: ElementRef;
  @ViewChild('ssdAjouter', { static: true }) ssdAjouter!: ElementRef;
  @ViewChild('boiteAjouter', { static: true }) boiteAjouter!: ElementRef;
  @ViewChild('boiterAjouter', { static: true }) boiterAjouter!: ElementRef;
  @ViewChild('alimenAjouter', { static: true }) alimenAjouter!: ElementRef;
  @ViewChild('alimentationAjouter', { static: true }) alimentationAjouter!: ElementRef;
  @ViewChild('wiAjouter', { static: true }) wiAjouter!: ElementRef;
  @ViewChild('wifiAjouter', { static: true }) wifiAjouter!: ElementRef;
  @ViewChild('pateAjouter', { static: true }) pateAjouter!: ElementRef;
  @ViewChild('pateTAjouter', { static: true }) pateTAjouter!: ElementRef;













  verif:Boolean = true;
  verifr:Boolean = true
  verifM:Boolean = true
  verifMV:Boolean=true
  verifCG:Boolean = true
  verifDD:Boolean = true
  verifSS:Boolean = true
  verifb:Boolean = true
  verifAL:Boolean = true
  verifW:Boolean = true
  verifPT:Boolean = true



  ajouterProcesseur(s:string) {
    // Accéder à la référence
    const element = this.elementAjoute.nativeElement;
    const elem = this.ea.nativeElement;
    // Effectuer les manipulations nécessaires
    // par exemple, ajouter un élément après le clic
    // en utilisant les méthodes du DOM ou de bibliothèques externes

    // Exemple d'ajout d'un élément après le clic
    const nouvelElement = document.createElement('div');
    nouvelElement.textContent = s;
    const elemnetfinal = document.createElement('div');
    elemnetfinal.textContent = s;
    element.appendChild(nouvelElement);
    elem.appendChild(elemnetfinal);
    this.verif=false
    this.close()

  }
  ajouterRefroidisseur(s:string) {
    // Accéder à la référence
    const element = this.refroiAjouter.nativeElement;
    const elem = this.refroisisseurAjouter.nativeElement;
    // Effectuer les manipulations nécessaires
    // par exemple, ajouter un élément après le clic
    // en utilisant les méthodes du DOM ou de bibliothèques externes

    // Exemple d'ajout d'un élément après le clic
    const nouvelElement = document.createElement('div');
    nouvelElement.textContent = s;
    const elemnetfinal = document.createElement('div');
    elemnetfinal.textContent = s;
    element.appendChild(nouvelElement);
    elem.appendChild(elemnetfinal);
    this.verifr=false
    this.close()

  }

  ajouterCarteMere(s:string) {
    // Accéder à la référence
    const element = this.carteMAjouter.nativeElement;
    const elem = this.carteMereAjouter.nativeElement;
    // Effectuer les manipulations nécessaires
    // par exemple, ajouter un élément après le clic
    // en utilisant les méthodes du DOM ou de bibliothèques externes

    // Exemple d'ajout d'un élément après le clic
    const nouvelElement = document.createElement('div');
    nouvelElement.textContent = s;
    const elemnetfinal = document.createElement('div');
    elemnetfinal.textContent = s;
    element.appendChild(nouvelElement);
    elem.appendChild(elemnetfinal);
    this.verifM=false
    this.close()

  }

  ajouterMemoireVive(s:string) {
    // Accéder à la référence
    const element = this.memoireVAjouter.nativeElement;
    const elem = this.memoireViveAjouter.nativeElement;
    // Effectuer les manipulations nécessaires
    // par exemple, ajouter un élément après le clic
    // en utilisant les méthodes du DOM ou de bibliothèques externes

    // Exemple d'ajout d'un élément après le clic
    const nouvelElement = document.createElement('div');
    nouvelElement.textContent = s;
    const elemnetfinal = document.createElement('div');
    elemnetfinal.textContent = s;
    element.appendChild(nouvelElement);
    elem.appendChild(elemnetfinal);
    this.verifMV=false
    this.close()

  }

  ajouterCarteGraphique(s:string) {
    // Accéder à la référence
    const element = this.carteGAjouter.nativeElement;
    const elem = this.carteGraphiqueAjouter.nativeElement;
    // Effectuer les manipulations nécessaires
    // par exemple, ajouter un élément après le clic
    // en utilisant les méthodes du DOM ou de bibliothèques externes

    // Exemple d'ajout d'un élément après le clic
    const nouvelElement = document.createElement('div');
    nouvelElement.textContent = s;
    const elemnetfinal = document.createElement('div');
    elemnetfinal.textContent = s;
    element.appendChild(nouvelElement);
    elem.appendChild(elemnetfinal);
    this.verifCG=false
    this.close()

  }

  ajouterDisqueDur(s:string) {
    // Accéder à la référence
    const element = this.disqueDAjouter.nativeElement;
    const elem = this.disqueDurAjouter.nativeElement;
    // Effectuer les manipulations nécessaires
    // par exemple, ajouter un élément après le clic
    // en utilisant les méthodes du DOM ou de bibliothèques externes

    // Exemple d'ajout d'un élément après le clic
    const nouvelElement = document.createElement('div');
    nouvelElement.textContent = s;
    const elemnetfinal = document.createElement('div');
    elemnetfinal.textContent = s;
    element.appendChild(nouvelElement);
    elem.appendChild(elemnetfinal);
    this.verifDD=false
    this.close()

  }

  ajouterSSD(s:string) {
    // Accéder à la référence
    const element = this.sAjouter.nativeElement;
    const elem = this.ssdAjouter.nativeElement;
    // Effectuer les manipulations nécessaires
    // par exemple, ajouter un élément après le clic
    // en utilisant les méthodes du DOM ou de bibliothèques externes

    // Exemple d'ajout d'un élément après le clic
    const nouvelElement = document.createElement('div');
    nouvelElement.textContent = s;
    const elemnetfinal = document.createElement('div');
    elemnetfinal.textContent = s;
    element.appendChild(nouvelElement);
    elem.appendChild(elemnetfinal);
    this.verifSS=false
    this.close()

  }

  ajouterBoitier(s:string) {
    // Accéder à la référence
    const element = this.boiteAjouter.nativeElement;
    const elem = this.boiterAjouter.nativeElement;
    // Effectuer les manipulations nécessaires
    // par exemple, ajouter un élément après le clic
    // en utilisant les méthodes du DOM ou de bibliothèques externes

    // Exemple d'ajout d'un élément après le clic
    const nouvelElement = document.createElement('div');
    nouvelElement.textContent = s;
    const elemnetfinal = document.createElement('div');
    elemnetfinal.textContent = s;
    element.appendChild(nouvelElement);
    elem.appendChild(elemnetfinal);
    this.verifb=false
    this.close()

  }

  ajouterAlimentation(s:string) {
    // Accéder à la référence
    const element = this.alimenAjouter.nativeElement;
    const elem = this.alimentationAjouter.nativeElement;
    // Effectuer les manipulations nécessaires
    // par exemple, ajouter un élément après le clic
    // en utilisant les méthodes du DOM ou de bibliothèques externes

    // Exemple d'ajout d'un élément après le clic
    const nouvelElement = document.createElement('div');
    nouvelElement.textContent = s;
    const elemnetfinal = document.createElement('div');
    elemnetfinal.textContent = s;
    element.appendChild(nouvelElement);
    elem.appendChild(elemnetfinal);
    this.verifAL=false
    this.close()

  }

  ajouterWifi(s:string) {
    // Accéder à la référence
    const element = this.wiAjouter.nativeElement;
    const elem = this.wifiAjouter.nativeElement;
    // Effectuer les manipulations nécessaires
    // par exemple, ajouter un élément après le clic
    // en utilisant les méthodes du DOM ou de bibliothèques externes

    // Exemple d'ajout d'un élément après le clic
    const nouvelElement = document.createElement('div');
    nouvelElement.textContent = s;
    const elemnetfinal = document.createElement('div');
    elemnetfinal.textContent = s;
    element.appendChild(nouvelElement);
    elem.appendChild(elemnetfinal);
    this.verifW=false
    this.close()

  }

  ajouterPateThermique(s:string) {
    // Accéder à la référence
    const element = this.pateAjouter.nativeElement;
    const elem = this.pateTAjouter.nativeElement;
    // Effectuer les manipulations nécessaires
    // par exemple, ajouter un élément après le clic
    // en utilisant les méthodes du DOM ou de bibliothèques externes

    // Exemple d'ajout d'un élément après le clic
    const nouvelElement = document.createElement('div');
    nouvelElement.textContent = s;
    const elemnetfinal = document.createElement('div');
    elemnetfinal.textContent = s;
    element.appendChild(nouvelElement);
    elem.appendChild(elemnetfinal);
    this.verifPT=false
    this.close()

  }
}
