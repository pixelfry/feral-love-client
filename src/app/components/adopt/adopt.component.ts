import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdoptService } from '../../services/adopt.service';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-adopt',
  imports: [ RouterLink ],
  templateUrl: './adopt.component.html',
  styleUrl: './adopt.component.css'
})
export class AdoptComponent {


  private adoptService: AdoptService = inject(AdoptService);
  private adoptablePets: Pet[] = [];

  consoleLogPets() {
    console.log(this.adoptablePets);
  }

  ngOnInit(){
    this.adoptService.getAdoptablePets().subscribe((pets) => {
      this.adoptablePets = pets;
    });
  }
}
