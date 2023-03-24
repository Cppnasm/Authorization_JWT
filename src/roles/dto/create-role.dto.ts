import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoleDto {
    @ApiProperty({example: 'USER', description: 'Create role with name'})
    @IsString({message: "Must be a string!"})
    readonly value: string;

    @ApiProperty({example: 'Default rights', description: 'Some words about rights and access'})
    @IsString({message: "Must be a string!"})
    readonly description: string;
}