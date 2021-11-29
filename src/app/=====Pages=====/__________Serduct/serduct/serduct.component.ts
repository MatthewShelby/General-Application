import { Component, OnInit, ViewChild, } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { map, switchMap } from 'rxjs';
import { Serduct } from 'src/app/==== Lateral ====/DTO';
import { SerductService } from '../-----Service/serduct.service';
// import Bootstrap from 'bootstrap/dist/js/Bootstrap/';
import { Carousel } from "bootstrap";


         
@Component({
  selector: 'app-serduct',
  templateUrl: './serduct.component.html',
  styleUrls: ['./serduct.component.css']
})
export class SerductComponent implements OnInit {
  public serducts: Serduct[] = [];
  title = 'ang12-paging';
  columnsToDisplay = ['id'];
  totalRecords = 0;


  constructor(
    public serductservice: SerductService,
  ) { }



  ngOnInit(): void {
    this.serducts = this.serductservice.GetSerducts();
  }



}
