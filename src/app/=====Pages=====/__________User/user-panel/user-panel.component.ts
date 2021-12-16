import { Component, OnInit } from '@angular/core';
import { catchError, scheduled, throwError, timeout, TimeoutError } from 'rxjs';
import { Company, ContactInfo, ContactInfoType, fetchCompany } from 'src/app/==== Lateral ====/DTO';
import { GlobalConsts } from 'src/app/==== Lateral ====/Globals';
import { CompanyService } from '../../__________Company/Service/company.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  public CompanyProfileImage?= GlobalConsts.imageNotFoundAddress;
  public CompanyLogoImage = GlobalConsts.imageNotFoundAddress;
  public hasCompany = false;
  loading = true;

  public company = new Company('', null, '', []);

  constructor(
    private companyService: CompanyService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.CompanyProfileImage = GlobalConsts.imageNotFoundAddress;
    this.CompanyLogoImage = GlobalConsts.imageNotFoundAddress;
    setTimeout(() => {

    }, 4000)
    this.companyService.getMyCompanyCall().pipe(timeout(6000),
    ).subscribe(res => {
      console.info(res)
      if (res.status == 'Succeed.') {
        this.hasCompany = true;
        this.company = res.data
        this.CompanyProfileImage = res.data.profileImage?.address
        console.log('img address: ' + this.CompanyProfileImage)
      }
      this.loading = false
    }    )
  }

  sanitizeImageUrl(imageUrl?: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl?imageUrl:'');
}
  GetStringType(index: ContactInfo): string {
    return ContactInfoType[index.type].toString()
  }
}
