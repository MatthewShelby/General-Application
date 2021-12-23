import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, filter, scheduled, throwError, timeout, TimeoutError } from 'rxjs';
import { Company, CompanyImage, CompanyImageType, ContactInfo, ContactInfoType, fetchCompany, Serduct } from 'src/app/==== Lateral ====/DTO';
import { GlobalConsts } from 'src/app/==== Lateral ====/Globals';
import { CompanyService } from '../../__________Company/Service/company.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { importType } from '@angular/compiler/src/output/output_ast';
import { SerductService } from '../../__________Serduct/-----Service/serduct.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css'],
  animations: [
    trigger('animationOption1', [
      state('start', style({
        backgroundColor: 'gray',
        width: '100%',
        height: '1px'
      })),
      state('end', style({
        backgroundColor: 'lightgray',
        width: '100%',
        height: '600px'
        
      })),
      transition('start => end', animate(1500)),
      transition('end => start', animate('800ms 0.5s ease-out'))
    ]),
    trigger('animationOption2', [
      transition(':enter', [
        style({ backgroundColor: 'yellow' }),
        animate(300)
      ]),
      transition(':leave', [
        animate(300, style({ backgroundColor: 'yellow' }))
      ]),
      state('*', style({ backgroundColor: 'green' })),
    ])
  ]
})
export class UserPanelComponent implements OnInit {
  public CompanyProfileImage?= GlobalConsts.imageNotFoundAddress;
  public CompanyProfileImageAltText?= 'Company Profile Image';

  public CompanyLogoImage?= GlobalConsts.imageNotFoundAddress;
  public CompanyLogoImageAltText = GlobalConsts.imageNotFoundAddress;

  public hasCompany = false;
  loading = true;

  public company = new Company('', null, '', []);
  public serducts !: Serduct[];
  public serductsCount = 0;
  constructor(
    private companyService: CompanyService,
    private sanitizer: DomSanitizer,
    private _serduct: SerductService,
  ) {
    // this._serduct.setMySerduct();
  }

  isMenuOpen = false;
  showSerCards = false;
  clickedDivState = 'start';

  changeDivState() {
    this.clickedDivState = 'end';
    setTimeout(() => {
      //this.clickedDivState = 'start';
      this.showSerCards = true;

    }, 1500);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }



  ngOnInit(): void {
    setTimeout(() => {
      this.serducts = this._serduct.getMySerducts();
    }, 1000)


    setTimeout(() => {
      this.serductsCount = this.serducts.length;
      this.isMenuOpen = true;
      this.changeDivState()
    }, 3000)








    this.CompanyProfileImage = GlobalConsts.imageNotFoundAddress;
    this.CompanyLogoImage = GlobalConsts.imageNotFoundAddress;
    setTimeout(() => {
      if (!this.hasCompany) {
        this.loading = false

      }
    }, 7000)
    this.companyService.getMyCompanyCall().pipe(timeout(6000),
    ).subscribe(res => {
      console.info(res)
      if (res.status == 'Succeed.') {
        this.hasCompany = true;
        this.company = res.data



        //     Set ProFIle Image Addres
        try {
          this.CompanyProfileImage = res.data.images?.filter(i => i.companyImageType ==
            CompanyImageType.profile)[0].address;
          this.CompanyProfileImage = this.CompanyProfileImage ? this.CompanyProfileImage
            : GlobalConsts.imageNotFoundAddress;

          this.CompanyProfileImageAltText = res.data.images?.filter(i => i.companyImageType ==
            CompanyImageType.profile)[0].altText ? res.data.images?.filter(i => i.companyImageType ==
              CompanyImageType.profile)[0].altText : this.CompanyProfileImageAltText

        } catch (error) {
          console.log('company profile parse error: ' + error);
        }


        //     Set Logo Image Addres
        try {
          this.CompanyLogoImage = res.data.images?.filter(i => i.companyImageType ==
            CompanyImageType.logo)[0].address;
          this.CompanyLogoImage = this.CompanyLogoImage ? this.CompanyLogoImage
            : GlobalConsts.imageNotFoundAddress;


          this.CompanyProfileImageAltText = res.data.images?.filter(i => i.companyImageType ==
            CompanyImageType.logo)[0].altText ? res.data.images?.filter(i => i.companyImageType ==
              CompanyImageType.logo)[0].altText : this.CompanyProfileImageAltText

        } catch (error) {
          console.log('company logo parse error: ' + error);
        }

        console.log('img address: ' + this.CompanyLogoImage)
      }
      this.loading = false
    })
  }

  sanitizeImageUrl(imageUrl?: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl ? imageUrl : GlobalConsts.imageNotFoundAddress);
  }
  GetStringType(index: ContactInfo): string {
    return ContactInfoType[index.type].toString()
  }
}
