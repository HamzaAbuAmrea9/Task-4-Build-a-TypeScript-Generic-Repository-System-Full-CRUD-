export interface Booking {
  id: number;
  userId: number; // Foreign key to User
  courseId: number; // Foreign key to Course
  bookingDate: Date;
}