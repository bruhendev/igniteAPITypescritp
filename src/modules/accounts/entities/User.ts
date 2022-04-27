import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;
    
    @Column()
    driver_license: string;
    
    @Column()
    isAdmin: boolean;

    @CreateDateColumn()
    created_at: Date;
}