import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1704941246189 implements MigrationInterface {
  name = 'Migration1704941246189';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tx_receipt" ("transactionHash" character varying NOT NULL, "transactionIndex" integer NOT NULL, "from" character varying, "to" character varying NOT NULL, "contractAddress" character varying, "type" integer NOT NULL, "root" character varying, "gasUsed" character varying NOT NULL, "effectiveGasPrice" character varying NOT NULL, "logsBloom" character varying NOT NULL, "confirmations" integer NOT NULL, "cumulativeGasUsed" character varying NOT NULL, "byzantium" boolean NOT NULL, "status" integer NOT NULL, "blockHash" character varying, CONSTRAINT "PK_6f6db9d1b7d39dd324c9063fd31" PRIMARY KEY ("transactionHash"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "block" ("hash" character varying NOT NULL, "number" integer NOT NULL, "parentHash" character varying NOT NULL, "timestamp" TIMESTAMP NOT NULL, "nonce" character varying NOT NULL, "difficulty" integer NOT NULL, "gasLimit" character varying NOT NULL, "gasUsed" character varying NOT NULL, "miner" character varying NOT NULL, "extraData" character varying NOT NULL, "baseFeePerGas" character varying NOT NULL, CONSTRAINT "PK_f8fba63d7965bfee9f304c487aa" PRIMARY KEY ("hash"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "block_log" ("id" SERIAL NOT NULL, "removed" boolean NOT NULL DEFAULT false, "address" character varying NOT NULL, "data" character varying NOT NULL, "topics" text array NOT NULL, "logIndex" integer NOT NULL, "blockHash" character varying, "transactionTransactionHash" character varying, CONSTRAINT "PK_8c10d27f23830b9cdaaeda57b8d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "tx_receipt" ADD CONSTRAINT "FK_2fb89eee5963a84d3c695dfcb62" FOREIGN KEY ("blockHash") REFERENCES "block"("hash") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "block_log" ADD CONSTRAINT "FK_db439ae045fadd2de0f37c88fc5" FOREIGN KEY ("blockHash") REFERENCES "block"("hash") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "block_log" ADD CONSTRAINT "FK_7505ab80bcd7e8969554b01fad9" FOREIGN KEY ("transactionTransactionHash") REFERENCES "tx_receipt"("transactionHash") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "block_log" DROP CONSTRAINT "FK_7505ab80bcd7e8969554b01fad9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "block_log" DROP CONSTRAINT "FK_db439ae045fadd2de0f37c88fc5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tx_receipt" DROP CONSTRAINT "FK_2fb89eee5963a84d3c695dfcb62"`,
    );
    await queryRunner.query(`DROP TABLE "block_log"`);
    await queryRunner.query(`DROP TABLE "block"`);
    await queryRunner.query(`DROP TABLE "tx_receipt"`);
  }
}
