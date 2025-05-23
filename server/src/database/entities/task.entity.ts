import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id : number;


    @Column()
    email : string;


    @Column()
    task : string

}