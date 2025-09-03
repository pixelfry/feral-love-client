import { CatSpecies } from './cat-species';

export interface Animal {
  animalId: number,
  animalName: string,
  age: number,
  gender: string,
  description: string,
  availabilityStatus: string,
  speciesName: string,
  speciesAttributes: CatSpecies,
  locationName: string,
  locationState: string
}

