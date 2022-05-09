import { Specification } from "@modules/cars/entities/Specification";
import { ICreateSpecificationRepositoryDTO, ISpecificationRepository } from "../ISpecificationRepository";


class SpecificationRepositoryInMemory implements ISpecificationRepository {

    specifications: Specification[] = [];

    async create({ description, name }: ICreateSpecificationRepositoryDTO) {
        const specification = new Specification();

        Object.assign(specification, { description, name });

        specification.id = Math.floor(Math.random() * 1000 + 1)

        this.specifications.push(specification);

        return specification
    }

    async list() {
        return this.specifications
    }

    async findByName(name: string) {
        return this.specifications.find(spec => spec.name === name) 
    }

    async findByIds(ids: string[]): Promise<Specification[]> {
        const allSpecifications = this.specifications.filter(specifications => ids.includes(specifications.id+""))
        return allSpecifications;
        
    }

}

export { SpecificationRepositoryInMemory }