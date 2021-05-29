import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from 'nestjs-redis';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import ormconfig from './ormconfig';
import redisconfig from './redisconfig';
import { SubmissionsModule } from './submissions/submissions.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormconfig),
    AuthModule,
    UsersModule,
    SubmissionsModule,
    BullModule.forRoot({
      redis: redisconfig,
    }),
    RedisModule.register(redisconfig),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
