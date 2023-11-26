import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{

  public country?: Country;

  constructor(
    private activedRouter: ActivatedRoute,
    private router:Router,
    private CountriesService: CountriesService,
  ){}

  ngOnInit(): void {
    
    //por dedefecto ya viene el observable
    this.activedRouter.params
      .pipe(
        //esta permite obteer el observable de otro para ejecutarlo aki
        switchMap(({ id }) => this.CountriesService.searchCountryByAlphaCode(id)),
      )
      .subscribe( country => {
        if (!country ) return this.router.navigateByUrl('');
        return this.country = country;
      })
  }

}
