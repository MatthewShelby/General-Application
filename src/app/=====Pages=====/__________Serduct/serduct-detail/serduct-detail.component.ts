import { Component, Input, OnInit } from '@angular/core';
import { Serduct, ImageType, Company } from 'src/app/==== Lateral ====/DTO';
import { GlobalConsts } from 'src/app/==== Lateral ====/Globals';
import { SerductService } from '../-----Service/serduct.service';

@Component({
  selector: 'app-serduct-detail',
  inputs: ['serduct'],
  templateUrl: './serduct-detail.component.html',
  styleUrls: ['./serduct-detail.component.css']
})
export class SerductDetailComponent implements OnInit {
  public thumbnail: string = GlobalConsts.imageNotFoundAddress;
  public mainCatalogImage: string = GlobalConsts.imageNotFoundAddress;
  public CompanyProfileImage: string = GlobalConsts.imageNotFoundAddress;
  public serduct!: Serduct;
  public company!: Company;
  constructor(
    private service: SerductService
  ) { }

  ngOnInit(): void {
    try {
      this.serduct = this.service.getActiveSerduct();
      this.company = this.service.getCompany(this.serduct.owner);
      console.log('from detail - img src: ' + this.company.profileImage?.address)
      let address1: string | undefined = this.serduct.images.find(x => x.imageType == ImageType.smaillThumbnail)?.address;
      let address2: string | undefined = this.serduct.images.find(x => x.imageType == ImageType.catalog)?.address;
      let address3: string | undefined = this.company.profileImage?.address;
      this.thumbnail = address1 ? address1 : this.thumbnail;
      this.mainCatalogImage = address2 ? address2 : this.mainCatalogImage;
      this.CompanyProfileImage = address3 ? address3 : this.CompanyProfileImage;
    } catch (error) {

      console.log('mainCatalogImage  : ' + this.mainCatalogImage);
    }


  }
  imgError() {
    this.thumbnail = "https://s20.picofile.com/file/8444360884/no_image_available.jpg";

  }

}
