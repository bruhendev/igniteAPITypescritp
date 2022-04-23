import { Specification } from "../model/Specification";

interface ICreateSpecificationRepositoryDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ description, name }: ICreateSpecificationRepositoryDTO): void;
    findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecificationRepositoryDTO }