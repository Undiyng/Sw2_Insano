import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty({ description: 'User name' })
  name: string;

  @ApiProperty({ description: 'User email' })
  email: string;

  @ApiProperty({ description: 'User password' })
  password: string;

  @ApiProperty({ description: 'User profile picture URL' })
  fotoPerfil: string;

  @ApiProperty({ description: 'User description' })
  description: string;

  @ApiProperty({ description: 'User favorite items' })
  favorites: string[];

  @ApiProperty({ description: 'User history' })
  historial: string[];

  @ApiProperty({ description: 'User type' })
  typo: string;
}