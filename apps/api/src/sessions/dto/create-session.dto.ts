import { ApiProperty } from "@nestjs/swagger"

export class CreateSessionDto {
  @ApiProperty()
  email: string

  @ApiProperty()
  password: string
}
