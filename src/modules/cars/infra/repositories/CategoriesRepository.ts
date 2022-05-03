import { Category } from "@modules/cars/entities/Category";
import { AppDataSource } from "../../../../shared/http/database/data-source";
import { ICategoriesRepository, ICreateCategoryDTO } from "@modules/cars/repositories/ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {

    private repository

    constructor() {
        this.repository = AppDataSource.getRepository(Category)
    }

    async create({ name, description }: ICreateCategoryDTO) {
        const category = this.repository.create({
            name,
            description
        })

        await this.repository.save(category)
    }

    async list() {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name: string) {
        const category = await this.repository.findOne({
            where: {
                name
            }
        })
        return category;
    }
}

export { CategoriesRepository }