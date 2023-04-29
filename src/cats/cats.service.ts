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
    if(this.cats.length === 0) { return 1 }
    else {
      const ids =  this.cats.map((c) => c.id)
  
      return Math.max(...ids) + 1;
    }
  }
  
}
