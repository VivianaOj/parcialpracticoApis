import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ClubModule } from './club/club.module';
import { ClubEntity } from './club/club.entity';
import { SocioEntity } from './socio/socio.entity';
import { SocioModule } from './socio/socios.module';

function databaseConfigFromEnv(): TypeOrmModuleOptions {
  const url = new URL(process.env.DATABASE_URL);
  const scheme = url.protocol.slice(0, -1);

  if (scheme === 'sqlite') {
    return {
      type: 'sqlite',
      database: url.pathname || url.host,
    };
  }

  if (scheme === 'postgres') {
    return {
      type: 'postgres',
      url: process.env.DATABASE_URL,
    };
  }

  throw new Error('Invalid database URL');
}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...databaseConfigFromEnv(),
      entities: [ClubEntity, SocioEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true,
    }),
    ClubModule,
    SocioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
