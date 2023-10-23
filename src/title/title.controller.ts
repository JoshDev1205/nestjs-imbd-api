import { Controller, Get, Param } from '@nestjs/common';
import { TitleService } from './title.service';

@Controller('title/:id')
export class TitleController {
  constructor(private readonly titleService: TitleService) {}

  @Get('')
  async getByMovie(@Param('id') id) {
    return this.titleService.byMovie(id);
  }

  @Get('/episodes')
  async getByepisode(@Param('id') id) {
    return this.titleService.byEpisode(id);
  }

  @Get('/cast')
  async getByCast(@Param('id') id) {
    return this.titleService.byCast(id);
  }

  @Get('/reviews')
  async getByReview(@Param('id') id) {
    return this.titleService.byReview(id);
  }

  @Get('/awards')
  async getByAward(@Param('id') id) {
    return this.titleService.byAward(id);
  }
}
