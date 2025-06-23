import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionHandler } from './common/ExceptionHandler/AllExceptionHandler';
import { ValidationPipe } from './common/validation/PipeValidation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionHandler());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
