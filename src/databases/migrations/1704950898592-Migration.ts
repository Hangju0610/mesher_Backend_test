import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1704950898592 implements MigrationInterface {
    name = 'Migration1704950898592'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tx_receipt" DROP COLUMN "confirmations"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tx_receipt" ADD "confirmations" integer NOT NULL`);
    }

}
