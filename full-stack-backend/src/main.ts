import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS to allow requests from our Next.js frontend
  app.enableCors({
    origin: 'http://localhost:3000', // The URL of your frontend
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    credentials: true,
  });
  await app.listen(4000); // Running backend on port 4000
}
await bootstrap();
