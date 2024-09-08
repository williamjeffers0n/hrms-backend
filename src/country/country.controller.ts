import { Body, Controller, Get, Post } from '@nestjs/common';
import { CountryService } from './country.service';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Country } from './models/country.model';
import { CreateCountryDto } from './dto/country.dto';

@ApiTags('Country')
@ApiBearerAuth()
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @ApiOperation({ summary: 'Get all countrys' })
  @Get()
  getCountry() {
    return this.countryService.findAll();
  }

  @ApiOperation({ summary: 'Create country' })
  @ApiBody({ description: 'User data', type: Country })
  @Post()
  createCountry(@Body() data: CreateCountryDto) {
    return this.countryService.createUser(data);
  }
}
