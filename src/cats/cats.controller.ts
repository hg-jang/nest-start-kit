import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './cats.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {

  constructor(
    private catsService: CatsService,
  ) {}

  /**
   * Add new cat
   */
  @Post()
  async create(
    @Body() createCatDto: CreateCatDto
  ) {
    const id = this.catsService.getNewId()
    const newCat = {
      ...createCatDto,
      id,
    }

    this.catsService.create(newCat)
  }

  /**
   * Returns all cats
   */
  @Get('all')
  async findAll() {
    return this.catsService.findAll();
  }

  /**
   * Returns cat by id
   */
  @Get(':id')
  findOneById(
    @Param('id') id: string
  ) {
    return this.catsService.findOneById(parseInt(id))
  }

}
