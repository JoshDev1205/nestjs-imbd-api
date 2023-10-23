import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SearchService {
  constructor(private prisma: PrismaService) {}

  async allMovies() {
    const data = await this.prisma.movie.findMany();

    return {
      statusCode: 200,
      data,
    };
  }

  async movieByTitle(id: string) {
    const data = await this.prisma.movie.findMany({
      where: {
        title: {
          contains: id,
        },
      },
    });

    return {
      statusCode: 200,
      data,
    };
  }

  async seriesByTitle(id: string) {
    const data = await this.prisma.movie.findMany({
      where: {
        title: {
          contains: id,
        },
        type: 'series',
      },
    });

    return { statusCode: 200, data };
  }

  async personByName(id: string) {
    const data = await this.prisma.person.findMany({
      where: {
        name: {
          contains: id,
        },
      },
    });

    return { statusCode: 200, data };
  }

  async episodeByTitle(id: string) {
    const data = await this.prisma.episode.findMany({
      where: {
        title: {
          contains: id,
        },
      },
    });

    return { statusCode: 200, data };
  }

  async reviewByComment(id: string) {
    const data = await this.prisma.review.findMany({
      where: {
        comment: {
          contains: id,
        },
      },
    });
    return { statusCode: 200, data };
  }

  async awardByName(id: string) {
    const data = await this.prisma.award.findMany({
      where: {
        name: {
          contains: id,
        },
      },
    });

    return { statusCode: 200, data };
  }
}
