import { IRepository } from '../interfaces/repository.interface';


const simulateDelay = <T>(data: T): Promise<T> => {
  return new Promise(resolve => setTimeout(() => resolve(data), 50));
};

export abstract class BaseRepository<T extends { id: number }> implements IRepository<T> {
  
  protected items: T[];

  constructor(initialData: T[]) {
   
    this.items = JSON.parse(JSON.stringify(initialData));
  }

  async getAll(): Promise<T[]> {
    return simulateDelay([...this.items]);
  }

  async getById(id: number): Promise<T | null> {
    const item = this.items.find(item => item.id === id) || null;
    return simulateDelay(item);
  }

  async create(item: Omit<T, 'id'>): Promise<T> {
    const maxId = this.items.reduce((max, i) => (i.id > max ? i.id : max), 0);
    const newItem = { id: maxId + 1, ...item } as T;
    this.items.push(newItem);
    return simulateDelay(newItem);
  }

  async update(id: number, itemUpdate: Partial<Omit<T, 'id'>>): Promise<T | null> {
    const itemIndex = this.items.findIndex(i => i.id === id);
    if (itemIndex === -1) {
      return simulateDelay(null);
    }
    const originalItem = this.items[itemIndex];
    const updatedItem = { ...originalItem, ...itemUpdate };
    this.items[itemIndex] = updatedItem;
    return simulateDelay(updatedItem);
  }

  async delete(id: number): Promise<boolean> {
    const itemIndex = this.items.findIndex(i => i.id === id);
    if (itemIndex === -1) {
      return simulateDelay(false);
    }
    this.items.splice(itemIndex, 1);
    return simulateDelay(true);
  }

  async findBy(filter: Partial<T>): Promise<T[]> {
    const filterKeys = Object.keys(filter) as (keyof T)[];
    const filteredItems = this.items.filter(item => {
      return filterKeys.every(key => item[key] === filter[key]);
    });
    return simulateDelay(filteredItems);
  }
}