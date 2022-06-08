import {Component, OnInit} from '@angular/core';
import {InfoCompanyService} from './services/InfoCompanyService';
import {Company} from './models/Company';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InfoCompanyService]
})
export class AppComponent implements OnInit {
  title = 'http-client';
  company: Company;

  constructor(private infoCompanyService: InfoCompanyService) {
  }

  getInfoCompany() {
    this.infoCompanyService.getInfoCompany()
      .subscribe(company => this.company = company);
  }

  ngOnInit(): void {
    this.getInfoCompany();
  }
}
