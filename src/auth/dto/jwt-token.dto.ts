import { ApiProperty } from "@nestjs/swagger";

export class JWTTokenDto {
    @ApiProperty({example: 'isdfsEFEDAfdweFWEW', description: 'JWT token'})
    readonly token: string;
}