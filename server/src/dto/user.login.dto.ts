import { IsEmail, isString,IsNotEmpty, IsString, MinLength} from "class-validator";


export class LoginDto {
    
    @IsEmail({},{message : "INvalid Email"})
    @IsNotEmpty({message : "email is required"})
    email : string;
    @IsString()
    @MinLength(4,{message : "Length should be 4"})
    password : string

}