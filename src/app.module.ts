import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { DistrictModule } from './district/district.module';
import { RegionModule } from './region/region.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { CustomerCardModule } from './customer_card/customer_card.module';
import { VenueModule } from './venue/venue.module';
import { TypesModule } from './types/types.module';
import { VenueTypesModule } from './venue_types/venue_types.module';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { SeatModule } from './seat/seat.module';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { LangModule } from './lang/lang.module';
import { EventModule } from './event/event.module';
import { EventTypeModule } from './event_type/event_type.module';
import { HumanCategoryModule } from './human_category/human_category.module';
import { TicketModule } from './ticket/ticket.module';
import { TicketStatusModule } from './ticket_status/ticket_status.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    AdminModule,
    AuthModule,
    DistrictModule,
    RegionModule,
    CustomerModule,
    CustomerAddressModule,
    CustomerCardModule,
    VenueModule,
    TypesModule,
    VenueTypesModule,
    VenuePhotoModule,
    SeatModule,
    SeatTypeModule,
    LangModule,
    EventModule,
    EventTypeModule,
    HumanCategoryModule,
    TicketModule,
    TicketStatusModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
