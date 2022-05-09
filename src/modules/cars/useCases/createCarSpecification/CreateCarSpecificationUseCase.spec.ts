import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory"
import { SpecificationRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationRepositoryInMemory"
import { AppError } from "@shared/errors/AppError"
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase"


let carsRepositoryInMemory: CarsRepositoryInMemory
let createCarSpecificationUseCase: CreateCarSpecificationUseCase
let specificationRepositoryInMemory: SpecificationRepositoryInMemory

describe("Create Car Specification", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory()

        specificationRepositoryInMemory = new SpecificationRepositoryInMemory()

        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
            carsRepositoryInMemory,
            specificationRepositoryInMemory
        )
    })

    it("should not be able to add a new specification a now-existent car", () => {
        expect(async () => {
            const car_id = "1234";
            const specifications_id = ["4654564"]
            await createCarSpecificationUseCase.execute({ car_id, specifications_id })
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should be able to add a new specification to the car", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Name Car",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: 1
        });

        const specification = await specificationRepositoryInMemory.create({
            description: "teste",
            name: "teste"
        })

        const specifications_id = [specification.id+""]

        const specificationCars = await createCarSpecificationUseCase.execute({ car_id: car.id + "", specifications_id })

        expect(specificationCars).toHaveProperty("specifications");
        expect(specificationCars.specifications.length).toBe(1);
    })

})