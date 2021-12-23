import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Serduct, ImageType } from 'src/app/==== Lateral ====/DTO';
import { GlobalConsts } from 'src/app/==== Lateral ====/Globals';
import { SerductService } from '../-----Service/serduct.service';


@Component({
  selector: 'app-serduct-card',
  inputs: ['serduct'],
  templateUrl: './serduct-card.component.html',
  styleUrls: ['./serduct-card.component.css']
})
export class SerductCardComponent implements OnInit {

  public thumbnail: string = GlobalConsts.imageNotFoundAddress;
  public cardImage: string = GlobalConsts.imageNotFoundAddress;
  @Input() serduct!: Serduct;
  constructor(
    private servise: SerductService,
    private _router: Router
  ) { }

  transfer() {
    // this.servise.setActiveSerduct(this.serduct);
    this._router.navigate(['detail']);
  }

  ngOnInit(): void {
    //console.log('Card Data: ' + JSON.stringify(this.serduct));

    let address1: string | undefined = this.serduct.images.find(x => x.imageType == ImageType.smaillThumbnail)?.address;
    let address2: string | undefined = this.serduct.images.find(x => x.imageType == ImageType.card)?.address;
    this.thumbnail = address1 ? address1 : this.thumbnail;
    this.cardImage = address2 ? address2 : this.cardImage;
  }
  imgError() {
    this.thumbnail = "https://s20.picofile.com/file/8444360884/no_image_available.jpg";

  }

  goToEdit() {
    this._router.navigate(['edit-serduct/' + this.serduct.id]) ;
  }
}
