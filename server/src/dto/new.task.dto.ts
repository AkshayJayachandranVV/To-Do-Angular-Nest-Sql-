import { IsNotEmpty, IsString } from "class-validator";

export class NewTaskDto {
    
    @IsString()
    @IsNotEmpty()
    task : string;

}