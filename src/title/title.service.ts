import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TitleService {
  constructor(private prisma: PrismaService) {}

  async byMovie(id: string) {
    const data = await this.prisma.movie.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });

    return {
      statusCode: 200,
      data,
    };
  }

  async byEpisode(id: string) {
    const data = await this.prisma.episode.findMany({
      where: {
        movieId: parseInt(id, 10),
      },
    });

    return {
      statusCode: 200,
      data,
    };
  }

  async byCast(id: string) {
    const data = await this.prisma.person.findMany({
      where: {
        movies: {
          some: {
            id: parseInt(id, 10),
          },
        },
      },
    });

    return { statusCode: 200, data };
  }

  async byReview(id: string) {
    const data = await this.prisma.review.findMany({
      where: {
        movieId: parseInt(id, 10),
      },
    });

    return { statusCode: 200, data };
  }

  async byAward(id: string) {
    const data = await this.prisma.award.findMany({
      where: {
        movieId: parseInt(id, 10),
      },
    });

    return { statusCode: 200, data };
  }
}
