import { CarImage } from "../entities/CarImage";


interface ICarsImagesRepository {

    create(car_id: number, image_name: string): Promise<CarImage>;
}

export { ICarsImagesRepository }