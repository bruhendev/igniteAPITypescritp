import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase"

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Car", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
    })

    it("should be able to list all available cars", async () => {

        const car = await carsRepositoryInMemory.create({
            "name": "Carro 1",
            "description": "Carro com espaço",
            "daily_rate": 150.00,
            "license_plate": "DEF-8971",
            "fine_amount": 110,
            "brand": "Audi",
            "category_id": 2
        })

        const cars = await listAvailableCarsUseCase.execute({});
        
        expect(cars).toEqual([car]);
    })

    it("should be able to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            "name": "Carro 2",
            "description": "Carro com espaço",
            "daily_rate": 150.00,
            "license_plate": "DEF-8971",
            "fine_amount": 110,
            "brand": "Ford",
            "category_id": 2
        })

        const cars = await listAvailableCarsUseCase.execute({brand: "Ford"});

        console.log(cars)
        
        expect(cars).toEqual([car]);
    })

    it("should be able to list all available cars by category_id", async () => {
        const car = await carsRepositoryInMemory.create({
            "name": "Carro 3",
            "description": "Carro com espaço",
            "daily_rate": 150.00,
            "license_plate": "DEF-8971",
            "fine_amount": 110,
            "brand": "Ford",
            "category_id": 2
        })

        const cars = await listAvailableCarsUseCase.execute({category_id: 2});

        console.log(cars)
        
        expect(cars).toEqual([car]);
    })

    it("should be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            "name": "Carro 4",
            "description": "Carro com espaço",
            "daily_rate": 150.00,
            "license_plate": "DEF-8971",
            "fine_amount": 110,
            "brand": "Ford",
            "category_id": 2
        })

        const cars = await listAvailableCarsUseCase.execute({name: "Carro 4"});

        console.log(cars)
        
        expect(cars).toEqual([car]);
    })


})