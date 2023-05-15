import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { Categorie } from '../models/categorie';
import { Produit } from '../models/produit';
import { Commande } from '../models/commande';
import { LigneCommande } from '../models/ligne-commande';

const STORE_BASE_URL = 'http://localhost:3001';

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

  getAllCommandeForClient(id:number):Observable<Commande>{
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
}
