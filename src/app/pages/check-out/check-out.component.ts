import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Stripe } from '@stripe/stripe-js';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { Commande } from 'src/app/models/commande';
import { LigneCommande } from 'src/app/models/ligne-commande';
import { CoingateServiceService } from 'src/app/services/coingate-service.service';
import { StoreService } from 'src/app/services/store.service';
import { StripeService } from 'src/app/services/stripe.service';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {


  shippingForm!: FormGroup;
  paymentForm!: FormGroup;
  isSubmitted = false;
  showSuccess!: boolean;
  showCancel!: boolean;
  showError!: boolean;

  constructor(private fb: FormBuilder,private link:StoreService,private http: HttpClient,private cb:CoingateServiceService,private ac:ActivatedRoute,private stripe:StripeService) { }
  paymentHandler:any = null
  total!:number
   m=Math.floor(Math.random() * 6)

  //Valide Commande
   newCommande(k:string){
    console.log(this.total)
    let c:Commande=new Commande(this.m,this.shippingForm.get('fullName')?.value,this.shippingForm.get('address')?.value+" "+this.shippingForm.get('city')?.value,this.shippingForm.get('postalCode')?.value,"",k,this.total!,true,1,"Still in Progress")
    this.link.addCommande(c).subscribe((data:any)=>{

    })
    const items = JSON.parse(localStorage.getItem('cart')!);
    for(let i=0; i<items.length; i++){
      let lc:LigneCommande=new LigneCommande(this.m,items[i].id);
      this.link.addLigneCommande(lc).subscribe(()=>{
        console.log('ligne Done')
      })
    }
  }


  ngOnInit(): void {
    // Initialize shipping form
    this.shippingForm = this.fb.group({
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required]
    });


    this.invokeStriped()
    // Initialize payment form
    this.paymentForm = this.fb.group({
      cardNumber: ['', Validators.required],
      cardHolderName: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', Validators.required]
    });
    this.total=this.ac.snapshot.params['total'];
      //this.initConfig()
  }
  submitForm(){}

  // mode de payement Stripe
  makePayement(){
    const paymentHandler=(<any>window).StripeCheckout.configure({
      key:'pk_test_51N0OE0Ct4L5yrRWDXvE0YmfNJ7tOKlVlJh9Dr1qp2u7y1matby85ixCF8hyti1nC02im1kj9mvNVCUeaJn29Nnfh00rT5Q9s25',
      locale:'auto',
      token:function(stripeToken:any){
        console.log(stripeToken)

        payementStripe(stripeToken)

      }
    })
    const payementStripe=(stripeToken:any) =>{
      this.stripe.makePayement(stripeToken).subscribe((data:any)=>{
        console.log(data)
      })
    }
    paymentHandler.open({
      name:"MIPS",
      description:"Card Credentials",
      amount:this.total*100

    })

  }
  invokeStriped(){
    if(!window.document.getElementById('stripe-script')){
      const script=window.document.createElement('script');
      script.id='stripe-script';
      script.type='text/javascript';
      script.src='https://checkout.stripe.com/checkout.js';
      script.onload=()=>{
        this.paymentHandler=(<any>window).StripeCheckout.configure({
          key:'pk_test_51N0OE0Ct4L5yrRWDXvE0YmfNJ7tOKlVlJh9Dr1qp2u7y1matby85ixCF8hyti1nC02im1kj9mvNVCUeaJn29Nnfh00rT5Q9s25',
          locale:'auto',
          token:function(stripeToken:any){
            console.log(stripeToken)
          },
        });
      };
      window.document.body.appendChild(script)
    }
  }
  url!:string

  //mode de payement Crypto CoinBase
  payCrypto(){
    let amount=this.total;
    let currency='USD'
    let m={}
    this.cb.checkout(amount, currency).subscribe(
     (response: any) => {
      this.url=response.charge.hosted_url
      window.location.href = this.url
      console.log(this.url)
     }

    )

  }


}

