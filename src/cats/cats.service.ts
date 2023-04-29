import { Injectable } from '@nestjs/common';
import { Cat } from 'src/types/Models.type';

@Injectable()
export class CatsService {

  private readonly cats: Cat[] = []

  create(cat: Cat) {
    this.cats.push(cat)
  }

  findAll() {
    return this.cats
  }

  findOneById(id: number) {
    return this.cats.find((c) => c.id === id)
  }

  getNewId() {
    const maxId =  Math.max(...this.cats.map((c) => c.id)) || 0

    return maxId + 1;
  }
  
}
