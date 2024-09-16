import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClubModule } from './club/club.module';
import { SocioModule } from './socio/socio.module';
import { ClubSocioModule } from './club-socio/club-socio.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ClubModule,
    SocioModule,
    ClubSocioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
