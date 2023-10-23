import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { SearchModule } from './search/search.module';
import { TitleModule } from './title/title.module';

@Module({
  imports: [PrismaModule, SearchModule, TitleModule],
})
export class AppModule {}
