import { Component } from '@angular/core';
import { Animal } from '../../models/animal';
import { MonthsToYearsPipe } from '../../directives/age-pipe';

@Component({
  selector: 'app-landing',
  imports: [MonthsToYearsPipe],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
