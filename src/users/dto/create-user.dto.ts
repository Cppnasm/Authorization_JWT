import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'user@mail.com', description: 'User email'})
    @IsString({message: 'Must be a string'})
    @IsEmail({},{message: 'Email address is not correct'})
    readonly email: string;

    @ApiProperty({example: 'qwerty', description: 'User password'})
    @IsString({message: 'Must be a string'})
    @Length(4,16,{message: 'Must be more than 3 and less than 17'})
    readonly password: string;
}