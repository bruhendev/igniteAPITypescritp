import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "../IRentalsRepository";


class RentalsRepositoryInMemory implements IRentalsRepository {
    rentals: Rental[] = [];

    findOpenRentalByCar(car_id: number): Promise<Rental> {
        throw new Error("Method not implemented.");
    }
    findOpenRentalByUser(user_id: number): Promise<Rental> {
        throw new Error("Method not implemented.");
    }
    

}

export { RentalsRepositoryInMemory }