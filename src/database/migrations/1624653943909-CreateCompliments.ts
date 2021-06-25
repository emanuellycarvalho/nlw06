import {MigrationInterface, QueryRunner, Table, Column, PrimaryColumn, TableForeignKey} from "typeorm";

export class CreateCompliments1624653943909 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_sender",
                        type: "uuid" 
                    },
                    {
                        name: "user_receiver",
                        type: "uuid"
                    },
                    {
                        name: "tag_id",
                        type: "uuid"
                    },
                    {
                        name: "mesasge",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamps",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamps",
                        default: "now()"
                    }
                ],
                foreignKeys:[
                    {
                        name: "fk_user_sender",
                        referencedTableName: "users", // tabela nativa
                        referencedColumnNames: ["id"], //na tabela nativa
                        columnNames: ["user_sender"], // na tabela atual
                        onDelete: "cascade",
                        onUpdate: "cascade",
                    },
                    {
                        name: "fk_user_receiver",
                        referencedTableName: "users", // tabela nativa
                        referencedColumnNames: ["id"], //na tabela nativa
                        columnNames: ["user_receiver"], // na tabela atual
                        onDelete: "cascade",
                        onUpdate: "cascade",
                    },
                    {
                        name: "fk_tags",
                        referencedTableName: "tags", // tabela nativa
                        referencedColumnNames: ["id"], //na tabela nativa
                        columnNames: ["tag_id"], // na tabela atual
                        onDelete: "SET NULL",
                        onUpdate: "cascade",
                    }
                ]
            })
        )

        // outra maneira de fazer pra que a fk nao se apague junto com a tabela

        // await queryRunner.createForeignKey(
        //     "compliments", 
        //     new TableForeignKey({
        //         name: "fk_user_sender",
        //         referencedTableName: "users", 
        //         referencedColumnNames: ["id"], 
        //         columnNames: ["user_sender"],
        //         onDelete: "cascade",
        //         onUpdate: "cascade",
        //     })
        // )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("compliments");
    }

}
