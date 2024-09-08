import { Injectable } from '@nestjs/common';
import { Country } from './models/country.model';

@Injectable()
export class CountryRepository {
  constructor(private readonly countryModel: typeof Country) {}

  async create(country): Promise<Country>{
    return this.countryModel.create(country);
  }
}
