import { AppError } from "@shared/errors/AppError";

interface IRequest {
    user_id: number;
    car_id: number;
    expected_return_date
}

class CreateRentalUseCase {

    constructor(
        private retalsRepository: IRentalsRepository
    ){}

    async execute({user_id, car_id, expected_return_date}: IRequest): Promise<void> {
        const carUnavailable = await this.retalsRepository.findOpenRentalByCar(car_id);

        if (carUnavailable) {
            throw new AppError("Car is unavailable");
        }

        const rentalOpenToUser = await this.retalsRepository.findOpenRentalByUser(user_id);

        if (rentalOpenToUser) {
            throw new AppError("there´s a rental in progress fo user!");
        }
    }
}

export { CreateRentalUseCase }