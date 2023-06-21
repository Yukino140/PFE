import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './pages/home/components/product/product.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { PartieClientComponent } from './Pages/partie-client/partie-client.component';
import { PartieAdminComponent } from './pages/partie-admin/partie-admin.component';
import { ProductsComponent } from './pages/partie-admin/products/products.component';
import { DashboardComponent } from './pages/partie-admin/dashboard/dashboard.component';
import { OrdersComponent } from './pages/partie-admin/orders/orders.component';
import { CustomersComponent } from './pages/partie-admin/customers/customers.component';
import { AnalyticsComponent } from './pages/partie-admin/analytics/analytics.component';
import { LoginComponent } from './pages/home/login/login.component';
import { ServiceClientComponent } from './pages/partie-client/service-client/service-client.component';
import { AccountComponent } from './pages/partie-client/service-client/account/account.component';
import { FactureComponent } from './pages/partie-client/service-client/facture/facture.component';
import { CommandesComponent } from './pages/partie-client/service-client/commandes/commandes.component';
import { TrackOrderComponent } from './pages/partie-client/service-client/track-order/track-order.component';
import { ConfigurateurComponent } from './pages/partie-client/configurateur/configurateur.component';
import { DemandeRetourComponent } from './pages/partie-admin/demande-retour/demande-retour.component';
import { ListeAdminsComponent } from './pages/partie-admin/liste-admins/liste-admins.component';
import { InscriEventComponent } from './pages/inscri-event/inscri-event.component';
import { FormationsComponent } from './pages/partie-admin/formations/formations.component';
import { NewsletterComponent } from './pages/partie-admin/newsletter/newsletter.component';
import { MagazinComponent } from './pages/partie-admin/magazin/magazin.component';
import { ListeReclamationComponent } from './pages/partie-admin/liste-reclamation/liste-reclamation.component';
import { LivreurComponent } from './pages/partie-admin/livreur/livreur.component';
import { ListeConfigurateurComponent } from './pages/partie-admin/liste-configurateur/liste-configurateur.component';


const routes: Routes = [
{
  path:"Admin",component:PartieAdminComponent,
  children: [
    {path:"product",component:ProductsComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"orders",component:OrdersComponent},
    {path:"customers",component:CustomersComponent},
    {path:"analytics",component:AnalyticsComponent},
    {path:'retour',component:DemandeRetourComponent},
    {path:'listeAdmin',component:ListeAdminsComponent},
    {path:'formation',component:FormationsComponent},
    {path:'newsletter',component:NewsletterComponent},
    {path:'magazin',component:MagazinComponent},
    {path:'reclamation',component:ListeReclamationComponent},
    {path:'livreur',component:LivreurComponent},
    {path:'listeConfigurateur',component:ListeConfigurateurComponent},
  ]
},

  {path:"client",
component:PartieClientComponent,
children:[
  {
    path: 'home/:id',
    component: HomeComponent,
  },
  {
    path:'inscriEvent',
    component:InscriEventComponent
  },
  {
    path:'configurateur',
    component: ConfigurateurComponent
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'produit/:id',
    component: ProductComponent,
  },
  {
    path:'checkout/:total',
    component: CheckOutComponent,

  },{
    path:'login', component: LoginComponent
  },{
    path:'services',component:ServiceClientComponent,

  },
  {path:'account',component:AccountComponent},
      {path:'facture',component:FactureComponent},
      {path:'commandes',component:CommandesComponent},
      {
        path:'trackOrder',component:TrackOrderComponent
      }
]
},


  { path: '', redirectTo: 'client/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
