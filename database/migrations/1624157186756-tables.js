const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class tables1624157186756 {
    name = 'tables1624157186756'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "number" character varying`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "number" integer`);
    }
}
