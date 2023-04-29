import { Cat } from '../types/Models.type';

export type CreateCatDto = Omit<Cat, 'id'>;
