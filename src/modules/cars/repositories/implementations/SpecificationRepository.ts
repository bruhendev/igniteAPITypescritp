import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database/data-source";
import { Specification } from "../../entities/Specification";
import { ICreateSpecificationRepositoryDTO, ISpecificationRepository } from "../ISpecificationRepository";


class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = AppDataSource.getRepository(Specification)
    }

    async create({ description, name }: ICreateSpecificationRepositoryDTO) {
        const specification = this.repository.create({
            name,
            description
        })

        await this.repository.save(specification);
    }

    async list() {
        const specifications = this.repository.find();
        return specifications;
    }

    async findByName(name: string) {
        const specification = await this.repository.findOne({ where: { name } });
        return specification
    }

}

export { SpecificationRepository }