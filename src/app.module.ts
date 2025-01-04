import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModel, UsersSchema } from './model';
import { UserController } from './controller/users.controller';
import { UsersService } from './service/users.service';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://gandu69:5qQkwVjxpOmBaDSe@nodex9sf.zfmlfvo.mongodb.net/main"),
    MongooseModule.forFeature([
      { name: UsersModel.name, schema: UsersSchema }
    ])
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UsersService],
})
export class AppModule {};
