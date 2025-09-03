import { CatSpecies } from './cat-species';

export interface Animal {
  animalId: number,
  animalName: string,
  locationId: number,
  age: number,
  gender: string,
  description: string,
  availabilityStatus: string,
  speciesId: number,
  speciesName: string,
  speciesAttributes: CatSpecies
}

