import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto{

    @ApiProperty({example: 'USER', description: 'Add role with name'})
    @IsString({message: "Must be a string!"})
    readonly value: string;

    @ApiProperty({example: '5', description: 'User ID'})
    @IsNumber({},{message: "Must be a number!"})
    readonly userId: number;
}