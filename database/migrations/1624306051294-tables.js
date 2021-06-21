const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class tables1624306051294 {
    name = 'tables1624306051294'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "attendance" ALTER COLUMN "attendance_date" DROP NOT NULL`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "attendance" ALTER COLUMN "attendance_date" SET NOT NULL`);
    }
}
