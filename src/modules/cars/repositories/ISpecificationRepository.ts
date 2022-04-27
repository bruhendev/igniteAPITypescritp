import { Specification } from "../entities/Specification";

interface ICreateSpecificationRepositoryDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ description, name }: ICreateSpecificationRepositoryDTO): void;
    list();
    findByName(name: string);
}

export { ISpecificationRepository, ICreateSpecificationRepositoryDTO }