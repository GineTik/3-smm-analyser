import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { setupSwagger } from "./shared/swagger/swagger.setup";
import { ValidationPipe } from "@nestjs/common";
import * as session from "express-session";
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  // Configure session middleware for OAuth
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "your-secret-key", // Use a strong secret in production
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: process.env.NODE_ENV === "production", // Use secure cookies in production
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
      },
    }),
  );

  app.enableCors({
    origin: (
      origin: string | undefined,
      callback: (err: Error | null, allow?: boolean) => void,
    ) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      const allowedOrigins = [
        "http://localhost:3000",
        "http://localhost:3001",
        process.env.FRONTEND_URL,
      ].filter(Boolean);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    headers: ["*"],
    methods: ["*"],
    allowedHeaders: ["*"],
  });

  setupSwagger(app);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3001);
}

bootstrap();
