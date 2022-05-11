import { Rental } from "../infra/typeorm/entities/Rental";


interface IRentalsRepository {
    findOpenRentalByCar(car_id: number): Promise<Rental>;
    findOpenRentalByUser(user_id: number): Promise<Rental>;
}

export { IRentalsRepository }