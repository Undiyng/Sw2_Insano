import { ApiProperty, PickType } from '@nestjs/swagger';
import { CreateUserDTO } from './user.dto';

export class CreateUserSwaggerDTO extends PickType(CreateUserDTO, [
  'name',
  'email',
  'password',
  'fotoPerfil',
  'description',
  'typo',
] as const) {}