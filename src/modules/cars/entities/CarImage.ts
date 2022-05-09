import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cars_image")
class CarImage {
 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    car_id: number;

    @Column()
    image_name: string;

    @CreateDateColumn()
    created_at: Date;
}

export {
    CarImage
}