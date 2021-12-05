import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Company, ContactInfo, ContactInfoType } from 'src/app/==== Lateral ====/DTO';
import { CompanyService } from '../../__________Company/Service/company.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  public hasCompany = false;
  loading = true;

  public company = new Company('', null, '', []);

  constructor(
    private companyService: CompanyService
  ) {
    //this.company = this.companyService.getMyCompany();
  }

  ngOnInit(): void {

    let tempCompany = this.companyService.getMyCompany();
    setTimeout(() => {

      if (tempCompany.owner != null) {
        this.hasCompany = true;
        this.company = tempCompany;
      }
      console.log('end loa');
      this.loading = false;

    }, 4000)
  }
  GetStringType(index: ContactInfo): string {
    return ContactInfoType[index.type].toString()
  }
}
