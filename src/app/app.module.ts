import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { ProductsHeaderComponent } from './pages/home/components/products-header/products-header.component';
import { ProductBoxComponent } from './pages/home/components/product-box/product-box.component';
import { FiltersComponent } from './pages/home/components/filters/filters.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartService } from './services/cart.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreService } from './services/store.service';
import { Header2Component } from './header2/header2.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { PartieClientComponent } from './Pages/partie-client/partie-client.component';
import { PartieAdminComponent } from './pages/partie-admin/partie-admin.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common'
import { ProductsComponent } from './pages/partie-admin/products/products.component';
import { NgxPayPalModule } from 'ngx-paypal';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { ProductComponent } from './pages/home/components/product/product.component';
import { LoginComponent } from './pages/home/login/login.component';
import { ServiceClientComponent } from './pages/partie-client/service-client/service-client.component';
import { AccountComponent } from './pages/partie-client/service-client/account/account.component';
import { FactureComponent } from './pages/partie-client/service-client/facture/facture.component';
import { CommandesComponent } from './pages/partie-client/service-client/commandes/commandes.component';
import { TrackOrderComponent } from './pages/partie-client/service-client/track-order/track-order.component';
import { OrdersComponent } from './pages/partie-admin/orders/orders.component';
import { AnalyticsComponent } from './pages/partie-admin/analytics/analytics.component';
import { DashboardComponent } from './pages/partie-admin/dashboard/dashboard.component';
import { TopWidgetComponent } from './pages/partie-admin/dashboard/top-widget/top-widget.component';
import { SalesByMonthComponent } from './pages/partie-admin/dashboard/sales-by-month/sales-by-month.component';
import { SalesByCategorieComponent } from './pages/partie-admin/dashboard/sales-by-categorie/sales-by-categorie.component';
import { LastFewTransactionsComponent } from './pages/partie-admin/dashboard/last-few-transactions/last-few-transactions.component';
import { TopThreeProductsComponent } from './pages/partie-admin/dashboard/top-three-products/top-three-products.component';
import { ChartModule } from 'angular-highcharts';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ChatboxComponent } from './chatbot/chatbox/chatbox.component';
import { ConfigurateurComponent } from './pages/partie-client/configurateur/configurateur.component';
import { CustomersComponent } from './pages/partie-admin/customers/customers.component';
import { DemandeRetourComponent } from './pages/partie-admin/demande-retour/demande-retour.component';
import { ListeAdminsComponent } from './pages/partie-admin/liste-admins/liste-admins.component';
import { FormsModule } from '@angular/forms';
import { InscriEventComponent } from './pages/inscri-event/inscri-event.component';
import { FormationsComponent } from './pages/partie-admin/formations/formations.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsHeaderComponent,
    ProductBoxComponent,
    FiltersComponent,
    HeaderComponent,
    CartComponent,
    Header2Component,
    MainComponent,
    FooterComponent,
    CheckOutComponent,
    PartieClientComponent,
    PartieAdminComponent,
    ProductsComponent,
    ProductComponent,
    LoginComponent,
    ServiceClientComponent,
    AccountComponent,
    FactureComponent,
    CommandesComponent,
    TrackOrderComponent,
    OrdersComponent,
    AnalyticsComponent,
    DashboardComponent,
    TopWidgetComponent,
    SalesByMonthComponent,
    SalesByCategorieComponent,
    LastFewTransactionsComponent,
    TopThreeProductsComponent,
    ChatbotComponent,
    ChatboxComponent,
    ConfigurateurComponent,
    CustomersComponent,
    DemandeRetourComponent,
    ListeAdminsComponent,
    InscriEventComponent,
    FormationsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatTreeModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatCardModule,
    MatFormFieldModule,
    CommonModule,
    MatTableModule,
    NgxPayPalModule,
    MatDialogModule,
    MatCardModule,
    ChartModule,
    FormsModule
  ],
  providers: [CartService, StoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
