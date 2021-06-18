const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class tables1624038716892 {
    name = 'tables1624038716892'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "phone" character varying(15)`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "cellphone" character varying(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "specialist" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "specialist" ADD "phone" character varying(15)`);
        await queryRunner.query(`ALTER TABLE "specialist" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "specialist" ADD "cellphone" character varying(15) NOT NULL`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "specialist" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "specialist" ADD "cellphone" character varying(14) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "specialist" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "specialist" ADD "phone" character varying(14)`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "cellphone" character varying(14) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "phone" character varying(14)`);
    }
}
