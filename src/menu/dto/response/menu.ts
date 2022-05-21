import { ApiProperty } from '@nestjs/swagger';

export class MenuResponse {
  @ApiProperty({
    description: `Id's primary key identification`,
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: `Menu's item name`,
    name: 'Mega bacon supreme',
  })
  name: string;

  @ApiProperty({
    description: `Menu's price`,
    example: 15.99,
  })
  price: number;

  @ApiProperty({
    description: `Menu's description`,
    example: 'Artesanal hamburger with bacon and cheddar',
  })
  description: string;
}
