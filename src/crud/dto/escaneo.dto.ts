import { ApiProperty } from '@nestjs/swagger';

export class CreateEscaneoDTO {
  @ApiProperty({ description: 'Scan photo URL' })
  foto: string;

  @ApiProperty({ description: 'Latitude of the scan location' })
  latitud: string;

  @ApiProperty({ description: 'Longitude of the scan location' })
  longitud: string;

  @ApiProperty({ description: 'Camera angle during the scan' })
  anguloCamara: string;

  @ApiProperty({ description: 'Date of the scan' })
  fecha: Date;

  @ApiProperty({ description: 'User ID who performed the scan' })
  idUser: string;

  @ApiProperty({ description: 'Nearby restaurants' })
  restaurantesCercanos: string[];
}