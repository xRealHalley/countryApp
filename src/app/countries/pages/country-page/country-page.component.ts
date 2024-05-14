import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';


@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html'
})
export class CountryPageComponent implements OnInit {

  public country ?: Country;


  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountryService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id ) )
      )
      .subscribe( ( country ) => {
        if ( !country ) return this.router.navigateByUrl('');

        return this.country = country;

      });
  }

}
