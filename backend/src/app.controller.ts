import { BadRequestException, Body, Controller, NotAcceptableException, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ItineraryData } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  async generateItinerary(@Body() body: { itineraryData: ItineraryData[] }): Promise<string> {
    if (!body?.itineraryData?.length) {
      throw new BadRequestException()
    }
    return await this.appService.generateItinerary(body.itineraryData);
  }
}
