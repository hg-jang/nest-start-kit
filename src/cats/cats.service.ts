import { Injectable } from '@nestjs/common';
import { Cat } from 'src/types/Cat.type';

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
  
}
