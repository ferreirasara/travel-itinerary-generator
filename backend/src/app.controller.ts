import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ItineraryData } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  async generateItinerary(@Body() body: { itineraryData: ItineraryData[] }): Promise<string> {
    return await this.appService.generateItinerary(body.itineraryData);
  }
}
