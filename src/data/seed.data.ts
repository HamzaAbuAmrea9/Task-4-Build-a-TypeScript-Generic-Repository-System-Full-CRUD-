import { User } from '../models/user.model';
import { Course } from '../models/course.model';
import { Booking } from '../models/booking.model';

export const staticUsers: User[] = [
  { id: 1, name: 'Hamza Awad', email: 'hamza@gmail.com' },
  { id: 2, name: 'Mohamed Ali', email: 'mohamed@gmail.com' },
  { id: 3, name: 'ahmed', email: 'ahmed@gmail.com' },
];

export const staticCourses: Course[] = [
  { id: 101, title: 'TypeScript Fundamentals', subject: 'Programming' },
  { id: 102, title: 'Advanced Node.js', subject: 'Programming' },
  { id: 103, title: 'Introduction to SQL', subject: 'Databases' },
];

export const staticBookings: Booking[] = [
  { id: 1001, userId: 1, courseId: 101, bookingDate: new Date('2024-11-15') },
  { id: 1002, userId: 1, courseId: 103, bookingDate: new Date('2024-11-20') },
  { id: 1003, userId: 2, courseId: 101, bookingDate: new Date('2025-04-02') },
];