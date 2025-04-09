import { IsNotEmpty, IsString } from "class-validator";

export class DeleteTaskDto {
    @IsString()
    @IsNotEmpty()
    id : number;

}