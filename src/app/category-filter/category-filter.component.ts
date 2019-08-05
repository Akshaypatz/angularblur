import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {

  public show:boolean = false;
  

    
  constructor(private router:Router, private httpClient: HttpClient) {
   }

   private cat:string;
   private clients=[];
   private filteredClients=[];
   private biller=[];
   private authenticators=[];


    
  // get_biller(){

  //   var inputValue = document.getElementById('list')
  //   //const inputElement: HTMLInputElement = document.getElementById('list') as HTMLInputElement
  // //  const inputValue: string = InputElement.value

  //   console.log(inputValue);
  //   var biller_name = inputValue;


  //    console.log(biller_name);
  //  // console.log(document.getElementById('list'));
  //   //var biller_name = document.getElementById('list');
  //   this.biller=this.clients.filter(function(cat){
  //     return cat.biller_name == biller_name;

  //   });
  //   document.getElementById('test').innerHTML = this.biller[0].biller_legal_name;
  // }

  get_biller(){
    var baku = (document.getElementById('list') as HTMLInputElement);
     console.log(baku);
     baku.select();
    var biller_name = document.getElementById('list') as HTMLInputElement;
     biller_name.select();
    this.biller=this.clients.filter(function(cat){
      return cat.biller_name == biller_name;

    });
    document.getElementById('test').innerHTML = this.biller[0].biller_legal_name;
  }

  ngOnInit() {
    this.cat=this.router.url.substr(1).replace("%20"," ");
    console.log('router: ' + this.cat)
    this.httpClient.get('http://localhost:3000/clients').subscribe((res:any[])=>{
        
        this.clients=res;
        var category_url = this.cat;
        this.filteredClients=this.clients.filter(function(cat){
          return cat.biller_category == category_url;

        });
       
      })


     
    }

    toggle(name) {
     
      this.get_biller();
      console.log(this.biller[0].authenticators)
      this.authenticators=this.biller[0].authenticators;
      this.show = true;
    }

    formCall(){
      //console.log(l1.input.value);
    }
}
