import { Injectable } from '@nestjs/common';
import { Country } from './models/country.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country)
    private readonly countryModel: typeof Country,
  ) {}

  async createUser(data: any): Promise<Country> {
    const country = await this.countryModel.create(data);
    return country;
  }

  async findAll(): Promise<Country[]> {
    return this.countryModel.findAll();
  }
}
