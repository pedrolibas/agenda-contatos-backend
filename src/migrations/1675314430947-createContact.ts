import { MigrationInterface, QueryRunner } from "typeorm";

export class createContact1675314430947 implements MigrationInterface {
    name = 'createContact1675314430947'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contact" ("id" uuid NOT NULL, "name" character varying(255) NOT NULL, "email" character varying(60) NOT NULL, "telephone" character varying(12) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "contact"`);
    }

}
