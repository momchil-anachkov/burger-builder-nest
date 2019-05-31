import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { AuthenticationModule } from './authentication/authentication.module';

/**
 * Root module for the application. Imports all feature modules
 *
 * @export
 * @class AppModule
 */
@Module({
  imports: [
    OrdersModule,
    IngredientsModule,
    AuthenticationModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule { }
