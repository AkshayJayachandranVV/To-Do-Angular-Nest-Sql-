import { IsNotEmpty, IsString } from "class-validator";

export class UpdateTaskDto {
    @IsString()
    @IsNotEmpty()
    id : number;

    @IsString()
    @IsNotEmpty()
    task : string;
}