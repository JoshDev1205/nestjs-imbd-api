import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  async getAllMovies() {
    return this.searchService.allMovies();
  }

  @Get('/movie')
  async getMovieByTitle(@Query('q') title) {
    return this.searchService.movieByTitle(title);
  }

  @Get('/tv')
  async getSeriesByTitle(@Query('q') title) {
    return this.searchService.seriesByTitle(title);
  }

  @Get('/person')
  async getPersonByName(@Query('q') title) {
    return this.searchService.personByName(title);
  }

  @Get('/episode')
  async getEpisodeByTitle(@Query('q') title) {
    return this.searchService.episodeByTitle(title);
  }

  @Get('/review')
  async getReviewByComment(@Query('q') title) {
    return this.searchService.reviewByComment(title);
  }

  @Get('/award')
  async getAwardByName(@Query('q') title) {
    return this.searchService.awardByName(title);
  }
}
