import { Component, OnInit } from '@angular/core';
import { catchError, scheduled, throwError, timeout, TimeoutError } from 'rxjs';
import { Company, ContactInfo, ContactInfoType, fetchCompany } from 'src/app/==== Lateral ====/DTO';
import { GlobalConsts } from 'src/app/==== Lateral ====/Globals';
import { CompanyService } from '../../__________Company/Service/company.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  public CompanyProfileImage = GlobalConsts.imageNotFoundAddress;
  public CompanyLogoImage = GlobalConsts.imageNotFoundAddress;
  public hasCompany = false;
  loading = true;

  public company = new Company('', null, '', []);

  constructor(
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.CompanyProfileImage = GlobalConsts.imageNotFoundAddress;
    this.CompanyLogoImage = GlobalConsts.imageNotFoundAddress;
    setTimeout(()=>{

    },4000)
    this.companyService.getMyCompanyCall().pipe(timeout(4000),
    ).subscribe(res => {
      if (res.status == 'Succeed.') {
        this.hasCompany = true;
        this.company = res.data
      }
      this.loading = false
    }
    )

  }

  
  GetStringType(index: ContactInfo): string {
    return ContactInfoType[index.type].toString()
  }
}
