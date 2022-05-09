import { CarImage } from "@modules/cars/entities/CarImage";
import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppDataSource } from "@shared/infra/typeorm/data-source";
import { Repository } from "typeorm";


class CarsImagesRepository implements ICarsImagesRepository {

    private repository: Repository<CarImage>;

    constructor() {
        this.repository = AppDataSource.getRepository(CarImage);
    }

    async create(car_id: number, image_name: string): Promise<CarImage> {
        const  carImage = this.repository.create({
            car_id,
            image_name
        })

        return await this.repository.save(carImage);
    }

}

export { CarsImagesRepository }