import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rec: Array<any>;
  totalrecs: String;
  page: Number=1;

  constructor(public crud:CrudService) {
    
    //console.log(this.crud);
    this.rec = new Array<any>();
   }

  ngOnInit() {

    //this.getdata();
  }

  getdata(){
    
    this.crud.selectdata().subscribe(
      (res)=>{
        console.log(res);
        this.rec = res.results;
        this.totalrecs = res.results.length;
      }

    )
  }

}
