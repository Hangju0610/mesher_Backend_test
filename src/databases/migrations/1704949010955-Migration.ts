import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1704949010955 implements MigrationInterface {
    name = 'Migration1704949010955'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "block" DROP COLUMN "baseFeePerGas"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "block" ADD "baseFeePerGas" character varying NOT NULL`);
    }

}
