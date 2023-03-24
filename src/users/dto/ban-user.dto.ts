import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto{

    @ApiProperty({example: '5', description: 'User ID'})
    readonly userId: number;
    
    @ApiProperty({example: 'PROSTO TAK', description: 'Reason for ban'})
    readonly banReason: string;
}