import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {

  public countries : Country [] = [];
  public initialValue : string = '';

  constructor( private countriesService : CountryService ){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry( pais: string ):void {
    this.countriesService.searchCountry( pais )
    .subscribe( countries => {
      this.countries = countries
    });
  }
}
