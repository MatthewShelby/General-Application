import { Component, Input, OnInit } from '@angular/core';
import { Serduct, SerductImage, ImageType } from 'src/app/==== Lateral ====/DTO';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

import { MatCard } from '@angular/material/card';
import { GlobalConsts } from 'src/app/==== Lateral ====/Globals';


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

    //public model: Serduct,
  ) {

    console.log('Card Start');
    //console.log('Card Data: ' + JSON.stringify(this.serduct));

  }

  ngOnInit(): void {
    //console.log('Card Data: ' + JSON.stringify(this.serduct));

    let address1: string | undefined = this.serduct.images.find(x => x.imageType == ImageType.smaillThumbnail)?.address;
    let address2: string | undefined = this.serduct.images.find(x => x.imageType == ImageType.card)?.address;
    this.thumbnail = address1 ? address1 : this.thumbnail;
    this.cardImage = address2 ? address2 : this.cardImage;
  }
  imgError(){
    this.thumbnail = "https://s20.picofile.com/file/8444360884/no_image_available.jpg";

  }


}
