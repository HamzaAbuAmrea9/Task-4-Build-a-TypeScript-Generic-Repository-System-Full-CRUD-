import { Booking } from '../models/booking.model';
import { BaseRepository } from './base.repository';
import { staticBookings } from '../data/seed.data';

export class BookingRepository extends BaseRepository<Booking> {
  constructor() {
    super(staticBookings);
  }
}