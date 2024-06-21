import { Component, NgModule } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CountryResponse } from './CountryResponse';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  licForm: FormGroup;
  name: any;
  age: any;
  countries: string[] = [];
  isLicenceForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
    this.licForm = this.fb.group({
      gender: ['male'] //default value
    });
    this.isLicenceForm = this.fb.group({
      isLicence: ['yes'],//default value
      country: ['']
    })
  }
  ngOnInit() {
    this.getCountryList();
    console.log("Country List:",this.countries);

  }


  getCountryList(){
      console.log('calling http');
    this.http.get<CountryResponse>('https://run.mocky.io/v3/cf4b2506-2b59-4114-b59f-f60a9d14aac0')
      .subscribe(data => {
          console.log(data);
          this.countries = data.countries;
      });
      return this.countries;
  }

  regLicence() {
    console.log("register or updated licence");
  }
  cancelForm() {
    this.router.navigate(['/homepage']);
    console.log("cancelled licence");
  }
}
