import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { Categorie } from '../models/categorie';
import { Produit } from '../models/produit';
import { Commande } from '../models/commande';
import { LigneCommande } from '../models/ligne-commande';
import { Facture } from '../models/facture';
import { Client } from '../models/client';
import { Credentials } from '../models/credentials';
import { Retour } from '../models/retour';
import { Formation } from '../models/formation';
import { Inscription } from '../models/inscription';

const STORE_BASE_URL = 'http://localhost:3001';
const chatbotAPI ='http://127.0.0.1:5000/'

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(limit = '12',
    sort = 'desc',
    id:number): Observable<Produit> {
      const url = `${STORE_BASE_URL}/produit/getProduitByCateg/${id}`;
      return this.httpClient.get<Produit>(url)
  }
  AdmingetAllProducts():Observable<Produit>{
    const url = `${STORE_BASE_URL}/produit/getProduits`;
    return this.httpClient.get<Produit>(url)
  }
  getProduct(id:number): Observable<Product>{
    return this.httpClient.get<Product>(
      `${STORE_BASE_URL}/products/?id=${id}`
    );
  }
  addProduit(pr:Produit){
    return this.httpClient.post(STORE_BASE_URL+'/produit/add', pr);
  }

  deleteProduct(id:number){
    return this.httpClient.delete(STORE_BASE_URL+'/produit/'+id)
  }
  getProduitById(id:number):Observable<Produit>{
    return this.httpClient.get<Produit>(STORE_BASE_URL+'/produit/'+id)
  }
  editProduit(id:number, pr:Produit){
    return this.httpClient.put(STORE_BASE_URL+'/produit/'+id,pr)
  }



  getAllCategories(): Observable<Categorie> {
    return this.httpClient.get<Categorie>(
      `${STORE_BASE_URL}/categorie/getCategorie`
    );
  }
  getCategorieById(id: number):Observable<Categorie>{
    return this.httpClient.get<Categorie>(STORE_BASE_URL+'/categorie/'+id)
  }

  getAllCommandeForClient(id:any):Observable<Commande>{
    return this.httpClient.get<Commande>(STORE_BASE_URL+'/commande/getAllOneClient/'+id)
  }
  getAllCommande():Observable<Commande>{
    return this.httpClient.get<Commande>(STORE_BASE_URL+'/commande/getAll')
  }
  addCommande(cm:Commande){
    return this.httpClient.post(STORE_BASE_URL+'/commande/nouveauCommande',cm)
  }
  addLigneCommande(lcm:LigneCommande){
    return this.httpClient.post(STORE_BASE_URL+'/ligneCommande/newLigne',lcm)
  }
  getLigneCommandeByid(id:number):Observable<LigneCommande>{
    return this.httpClient.get<LigneCommande>(STORE_BASE_URL+'/ligneCommande/getAllLigneCommandebyId/'+id)
  }

  getFactures():Observable<Facture>{
    return this.httpClient.get<Facture>(STORE_BASE_URL+'/facture/getAll')

  }
  getOneFacture(id:number):Observable<Facture>
  {
    return this.httpClient.get<Facture>(STORE_BASE_URL+'/facture/getOne/'+id)
  }

  getOneCommande(id:number):Observable<Commande>{
    return this.httpClient.get<Commande>(STORE_BASE_URL+'/commande/getOne/'+id)
  }


  chat(message: Message) : Observable<any> {
    return this.httpClient.post(chatbotAPI+"chat", message)
  }

  getSousCategorie(id:number):Observable<Categorie>{
    return this.httpClient.get<Categorie>(STORE_BASE_URL+'/categorie/getSousCateg/'+id)
  }

  signUp(c:Client):Observable<Client>
  {
    return this.httpClient.post<Client>(STORE_BASE_URL+'/client/register',c)
  }
  login(c:Credentials):Observable<Credentials>
  {
    return this.httpClient.post<Credentials>(STORE_BASE_URL+'/Client/login',c)
  }
  getClients():Observable<Client>
  {
    return this.httpClient.get<Client>(STORE_BASE_URL+'/Client/getAllClient')
  }
  modifyAccount(id:number,c:Client):Observable<Client>
  {
    return this.httpClient.put<Client>(STORE_BASE_URL+'/Client/modifyAccount/'+id,c)
  }
  deleteAccount(id:number)
  {
    return this.httpClient.delete(STORE_BASE_URL+'/Client/deleteAccount/'+id)
  }

  snedmail(mail:any){
    return this.httpClient.post(STORE_BASE_URL+'/mail/sendmail',mail)
  }
  getOneClient(id:number){
    return this.httpClient.get(STORE_BASE_URL+'/Client/getOne/'+id)
  }
  getAllMagasin():Observable<any> {
    return this.httpClient.get<any>(STORE_BASE_URL+'/magasin/getAll')
  }
  demandeRetour(r:Retour):Observable<Retour> {
    return this.httpClient.post<Retour>(STORE_BASE_URL+'/retour/demandeRetour',r)
  }
  getAllRetourses():Observable<Retour> {
    return this.httpClient.get<Retour>(STORE_BASE_URL+'/retour/getAlldemande')
  }
  updateRetour(id:number,r:Retour){
    return this.httpClient.put(STORE_BASE_URL+'/retour/updateRetour/'+id,r)
  }
  getRetourByCommande(id:number){
    return this.httpClient.get(STORE_BASE_URL+'/retour/getByCommande/'+id)
  }
  getOneRetour(id:number){

    return this.httpClient.get(STORE_BASE_URL+'/retour/getOne/'+id)
  }
  nouveauFacture(f:Facture){
    return this.httpClient.post(STORE_BASE_URL+'/facture/newFacture',f)
  }
  getAllFormation(){
    return this.httpClient.get(STORE_BASE_URL+'/event/getAllEvent')
  }
  newEvent(f:Formation){
    return this.httpClient.post(STORE_BASE_URL+'/event/newEvent',f)
  }
  getAllIncri(){
    return this.httpClient.get(STORE_BASE_URL+'/inscriEvent/getAllInscri')
  }
  getOneInscri(id:number){
    return this.httpClient.get(STORE_BASE_URL+'/inscriEvent/getOne/'+id)
  }
  newInscriEvent(f:Inscription){
    return this.httpClient.post(STORE_BASE_URL+'/inscriEvent/inscri',f)
  }
  getOneEvent(id:number){
    return this.httpClient.get(STORE_BASE_URL+'/event/getOneEvent/'+id)
  }
  getAllinscriByEvent(id:number){
    return this.httpClient.get(STORE_BASE_URL+'/inscriEvent/getByEvent/'+id)
  }
}


export class Message {

  message! : string

  issuer! : string

  constructor(){}

}
