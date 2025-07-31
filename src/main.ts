import { UserRepository } from './repositories/user.repository';
import { CourseRepository } from './repositories/course.repository';
import { BookingRepository } from './repositories/booking.repository';

const logSection = (title: string) => {
  console.log(`\n================== ${title.toUpperCase()} ==================`);
};

const logResult = (operation: string, result: any) => {
  console.log(`\n--- ${operation} ---`);
  console.log(result);
};

const testRepositories = async () => {
  logSection('Initializing Repositories');
  const userRepo = new UserRepository();
  const courseRepo = new CourseRepository();
  const bookingRepo = new BookingRepository();
  console.log('Repositories initialized with static data.');

 
  logSection('Testing User Repository');
  
  logResult('Get All Users', await userRepo.getAll());
  logResult('Get User with ID 2', await userRepo.getById(2));
  logResult('Create New User', await userRepo.create({ name: 'David Lee', email: 'david@example.com' }));
  logResult('Update User with ID 1', await userRepo.update(1, { name: 'Alice Williams' }));
  logResult('Delete User with ID 3', { success: await userRepo.delete(3) });
  logResult('Get All Users After Changes', await userRepo.getAll());
  logResult('Find User by Email (Custom Method)', await userRepo.findByEmail('bob@example.com'));

  
  logSection('Testing Course Repository');

  logResult('Get All Courses', await courseRepo.getAll());
  logResult('Find Courses by Subject "Programming"', await courseRepo.findBy({ subject: 'Programming' }));


  logSection('Testing Booking Repository');
  
  logResult('Get All Bookings', await bookingRepo.getAll());
  logResult('Find Bookings for User ID 1', await bookingRepo.findBy({ userId: 1 }));
};


testRepositories().catch(console.error);