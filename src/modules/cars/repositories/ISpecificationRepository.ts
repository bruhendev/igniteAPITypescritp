import { Specification } from "../entities/Specification";

interface ICreateSpecificationRepositoryDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ description, name }: ICreateSpecificationRepositoryDTO): Promise<Specification>;
    list();
    findByName(name: string);
    findByIds(ids: string[]): Promise<Specification[]>;
}

export { ISpecificationRepository, ICreateSpecificationRepositoryDTO }