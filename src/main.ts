import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 8082
      }
    }
  );


  await app.listen()
  console.log(`WRITE SERVICE RUNNING ON PORT 8082. STARTED AT ${new Date()}`)
  
}
bootstrap();
