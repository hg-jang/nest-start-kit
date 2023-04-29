import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {

  /**
   * Add new cat
   */
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  /**
   * Returns all cats
   */
  @Get()
  findAll() {
    return 'This action returns all cats';
  }

  /**
   * Returns cat by id
   */
  @Get(':id')
  findOneById(
    @Param('id') id: string
  ) {
    return `This action returns a #${id} cat`
  }

}
