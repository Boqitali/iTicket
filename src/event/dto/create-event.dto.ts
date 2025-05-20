export class CreateEventDto {
  name: string;
  photo: string;
  start_date: Date;
  start_time: Date;
  finish_date: Date;
  finish_time: Date;
  info: string;
  eventTypeId: number;
  humanCategoryId: number;
  venueId: number;
  langId: number;
  release_date: Date;
}
