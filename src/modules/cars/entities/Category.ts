import { v4 as uuidv4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("categories")
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
    
    @CreateDateColumn()
    created_at: Date;

}