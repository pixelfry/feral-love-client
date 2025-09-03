import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdoptService } from '../../services/adopt.service';
import { Animal } from '../../models/animal';

@Component({
  selector: 'app-adopt',
  imports: [ RouterLink ],
  templateUrl: './adopt.component.html',
  styleUrl: './adopt.component.css'
})
export class AdoptComponent {


  private adoptService: AdoptService = inject(AdoptService);
  public adoptableAnimals: Animal[] = [];

  consoleLog(){
    console.log(this.adoptableAnimals);
  }

  ngOnInit(){
    this.adoptService.getAdoptableAnimals().subscribe((animals) => {
      this.adoptableAnimals = animals;
    });
  }
}
