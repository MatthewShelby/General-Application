import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { map, noop, switchMap } from 'rxjs';
import { Serduct } from 'src/app/==== Lateral ====/DTO';
import { SerductService } from '../-----Service/serduct.service';
// import Bootstrap from 'bootstrap/dist/js/Bootstrap/';git
import { Carousel } from "bootstrap";



@Component({
  selector: 'app-serduct',
  templateUrl: './serduct.component.html',
  styleUrls: ['./serduct.component.css']
})
export class SerductComponent implements AfterViewInit {

  @ViewChild("carouselExampleSlidesOnly")
  carouselElement!: ElementRef<HTMLElement>;

  carouselRef!: Carousel;
  carouselCount: number = 0;
  activeCcarousel: number = 0;
  previousActive: boolean = false;
  nextActive: boolean = true;
  constructor(
    private serductservice: SerductService,
  ) { }

  public serducts: Serduct[] = []; ngAfterViewInit() {
    this.carouselRef = new Carousel(this.carouselElement.nativeElement,
      {
        wrap: false,
        pause: true,
        touch: true,
        keyboard: true

      }
      //    {
      //   slide: false,
      //   interval: 
      // }
    );
  }


  check() {
    if (this.activeCcarousel == 0) {
      this.previousActive = false
    } else {
      this.previousActive = true
    }
    if (this.activeCcarousel == this.carouselCount) {
      this.nextActive = false
    } else {
      this.nextActive = true
    }
  }

  nextSlide() {
    this.carouselRef.next();
    this.activeCcarousel++;
    this.nextActive = false;
    setTimeout(() => {
      this.check();
    }, 500);
  }
  onKeydown(){
    this.nextSlide();
  }
  previousSlide() {
    this.previousActive = false;
    this.carouselRef.prev();
    this.activeCcarousel--;
    setTimeout(() => {
      this.check();
    }, 500);
  }


  ngOnInit(): void {
    this.serducts = this.serductservice.GetSerducts();
    this.carouselCount = 5; this.serducts.length - 1;
  }



}
