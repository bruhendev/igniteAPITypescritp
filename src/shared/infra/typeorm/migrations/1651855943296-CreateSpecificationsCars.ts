import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateSpecificationsCars1651855943296 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "specifications_cars",
                columns: [
                    {
                        name: "car_id",
                        type: "int",
                        isNullable: true
                    },
                    {
                        name: "specification_id",
                        type: "int",
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKCarSpecification",
                        referencedTableName: "cars",
                        referencedColumnNames: ["id"],
                        columnNames: ["car_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKSpecificationCar",
                        referencedTableName: "specifications",
                        referencedColumnNames: ["id"],
                        columnNames: ["specification_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        );

        // await queryRunner.createForeignKey(
        //     "specifications_cars",
        //     new TableForeignKey({
        //         name: "FKCarSpecification",
        //         referencedTableName: "cars",
        //         referencedColumnNames: ["id"],
        //         columnNames: ["car_id"],
        //         onDelete: "SET NULL",
        //         onUpdate: "SET NULL"
        //     })
        // )

        // await queryRunner.createForeignKey(
        //     "specifications_cars",
        //     new TableForeignKey({
        //         name: "FKSpecificationCar",
        //         referencedTableName: "specifications",
        //         referencedColumnNames: ["id"],
        //         columnNames: ["specification_id"],
        //         onDelete: "SET NULL",
        //         onUpdate: "SET NULL",
        //     })
        // )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("specifications_cars", "FKCarSpecification");
        await queryRunner.dropForeignKey("specifications_cars", "FKSpecificationCar");
        await queryRunner.dropTable("specifications_cars");
    }

}
