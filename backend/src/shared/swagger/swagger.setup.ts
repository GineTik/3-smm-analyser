import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { INestApplication } from "@nestjs/common";
import { writeFileSync } from "fs";

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle("API")
    .setDescription("API description")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  writeFileSync("./swagger-spec.json", JSON.stringify(document));
  SwaggerModule.setup("api", app, document);
}
