import { User } from '../models/user.model';
import { BaseRepository } from './base.repository';
import { staticUsers } from '../data/seed.data';

export class UserRepository extends BaseRepository<User> {
  constructor() {
    
    super(staticUsers);
  }

  
  async findByEmail(email: string): Promise<User | null> {
    const users = await this.findBy({ email });
    return users.length > 0 ? users[0] : null;
  }
}