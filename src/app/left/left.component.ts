import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  private clients=[];
  private category=[];

  ngOnInit() {

 
    this.httpClient.get('http://localhost:3000/clients').subscribe((res:any[])=>{
        
        this.clients=res;
        //console.log(this.clients[0]);
        this.category[0]=this.clients[0];
        var k=0;
        
      // console.log(this.category[0].biller_category);


        for (let i = 0; i < this.clients.length; i++) {

          var flag=0;

          for (let j = 0; j < this.category.length; j++) {
            
            if (this.category[j].biller_category==this.clients[i].biller_category) {
              flag=1;
            }
            
          }
          
          if (flag==0) {

            this.category[k++]=this.clients[i];
            
          }
          
        }
    
      });  
    
      console.log(this.category);
  
  }
}
