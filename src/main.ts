import { NestFactory } from "@nestjs/core";
import { DocumentBuilder } from "@nestjs/swagger";
import { SwaggerModule } from "@nestjs/swagger/dist";
import { AppModule } from "./app.module";
import { ValidationPipe } from "./pipes/validation.pipe";

async function bootstrap(){
    const PORT = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule);

    //Swagger
    const config = new DocumentBuilder()
        .setTitle('Swagger')
        .setDescription('REST API Documentation')
        .setVersion('1.0.0')
        .addTag('prj-for-docker')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
bootstrap();