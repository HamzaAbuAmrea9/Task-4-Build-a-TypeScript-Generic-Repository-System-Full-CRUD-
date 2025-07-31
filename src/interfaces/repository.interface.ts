/**
 * A generic repository interface defining standard CRUD operations.
 * All methods are asynchronous and return Promises to simulate a real-world backend.
 * @template T The type of the entity this repository manages.
 */
export interface IRepository<T> {
  
  getAll(): Promise<T[]>;

 
  getById(id: number): Promise<T | null>;

  
  create(item: Omit<T, 'id'>): Promise<T>;

  
  update(id: number, item: Partial<Omit<T, 'id'>>): Promise<T | null>;

  
  delete(id: number): Promise<boolean>;

  
  findBy(filter: Partial<T>): Promise<T[]>;
}