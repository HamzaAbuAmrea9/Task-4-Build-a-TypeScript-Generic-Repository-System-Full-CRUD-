import { Course } from '../models/course.model';
import { BaseRepository } from './base.repository';
import { staticCourses } from '../data/seed.data';

export class CourseRepository extends BaseRepository<Course> {
  constructor() {
    super(staticCourses);
  }
}