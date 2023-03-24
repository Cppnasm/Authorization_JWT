import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({example: 'My first post', description: 'Post title'})
    readonly title: string;

    @ApiProperty({example: 'It\'s my first post guys', description: 'Post content'})
    readonly content: string;

    @ApiProperty({example: '5', description: 'User id'})
    readonly userId: number;
}

