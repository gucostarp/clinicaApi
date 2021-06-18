const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class tables1624039542071 {
    name = 'tables1624039542071'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "attendance_status_enum" AS ENUM('AGENDADO', 'REALIZADO', 'CANCELADO')`);
        await queryRunner.query(`CREATE TABLE "attendance" ("id" SERIAL NOT NULL, "scheduling_date" date NOT NULL, "attendance_date" date NOT NULL, "hour" TIME NOT NULL, "amount" character varying(255) NOT NULL, "status" "attendance_status_enum" NOT NULL, "specialistId" integer, "clientId" integer, CONSTRAINT "PK_ee0ffe42c1f1a01e72b725c0cb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "username" character varying(20) NOT NULL, "password" character varying(255) NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "client_blood_type_enum" AS ENUM('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-')`);
        await queryRunner.query(`CREATE TABLE "client" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "cpf" character varying(14) NOT NULL, "phone" character varying(15), "cellphone" character varying(15) NOT NULL, "email" character varying(150) NOT NULL, "blood_type" "client_blood_type_enum", "addressId" integer NOT NULL, CONSTRAINT "UQ_9921dca81551c93e5a459ef03ce" UNIQUE ("cpf"), CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email"), CONSTRAINT "REL_6e6c7c79fbf5ab39520cd1723e" UNIQUE ("addressId"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "zip" character varying(255) NOT NULL, "street" character varying(255) NOT NULL, "neighborhood" character varying(100) NOT NULL, "city" character varying(255), "state" character varying(100) NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "specialist" ("id" SERIAL NOT NULL, "registry" character varying(100) NOT NULL, "name" character varying(255) NOT NULL, "phone" character varying(15), "cellphone" character varying(15) NOT NULL, "email" character varying(150) NOT NULL, "addressId" integer NOT NULL, "occupationId" integer NOT NULL, CONSTRAINT "UQ_eb5d3bfc41deb6867a328c6bddc" UNIQUE ("registry"), CONSTRAINT "UQ_df8a900a6852c0c3dc7c3a2498d" UNIQUE ("email"), CONSTRAINT "REL_772feb82534d81f3d3aaf08594" UNIQUE ("addressId"), CONSTRAINT "PK_461a4a90df7daf980d8b79bc3ce" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "occupation" ("id" SERIAL NOT NULL, "name" character varying(150) NOT NULL, CONSTRAINT "PK_07cfcefef555693d96dce8805c5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "patient_record" ("id" SERIAL NOT NULL, "open_date" TIMESTAMP NOT NULL, "clientId" integer, CONSTRAINT "REL_a5341a0bab1189e068753f0e40" UNIQUE ("clientId"), CONSTRAINT "PK_1f69f849b8f560b43999d1f0cbd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "patient_record_history" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "hour" TIME NOT NULL, "description" character varying(255) NOT NULL, "patientRecordId" integer, "specialistId" integer, CONSTRAINT "PK_35b6288c21fec50e5b4faba6b6b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "attendance" ADD CONSTRAINT "FK_1e20583fef6c70d9fcf118dc6d0" FOREIGN KEY ("specialistId") REFERENCES "specialist"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "attendance" ADD CONSTRAINT "FK_7df51ca68d842297d387aeb48ba" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "FK_6e6c7c79fbf5ab39520cd1723e2" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specialist" ADD CONSTRAINT "FK_772feb82534d81f3d3aaf085949" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specialist" ADD CONSTRAINT "FK_957179a04ba29e0ebb1f26b937f" FOREIGN KEY ("occupationId") REFERENCES "occupation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "patient_record" ADD CONSTRAINT "FK_a5341a0bab1189e068753f0e401" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "patient_record_history" ADD CONSTRAINT "FK_7e4a60d274aba2f65fc409f53dd" FOREIGN KEY ("patientRecordId") REFERENCES "patient_record"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "patient_record_history" ADD CONSTRAINT "FK_4d1fb6bd1d00de9fe72d6b5512b" FOREIGN KEY ("specialistId") REFERENCES "specialist"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }


    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "patient_record_history" DROP CONSTRAINT "FK_4d1fb6bd1d00de9fe72d6b5512b"`);
        await queryRunner.query(`ALTER TABLE "patient_record_history" DROP CONSTRAINT "FK_7e4a60d274aba2f65fc409f53dd"`);
        await queryRunner.query(`ALTER TABLE "patient_record" DROP CONSTRAINT "FK_a5341a0bab1189e068753f0e401"`);
        await queryRunner.query(`ALTER TABLE "specialist" DROP CONSTRAINT "FK_957179a04ba29e0ebb1f26b937f"`);
        await queryRunner.query(`ALTER TABLE "specialist" DROP CONSTRAINT "FK_772feb82534d81f3d3aaf085949"`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "FK_6e6c7c79fbf5ab39520cd1723e2"`);
        await queryRunner.query(`ALTER TABLE "attendance" DROP CONSTRAINT "FK_7df51ca68d842297d387aeb48ba"`);
        await queryRunner.query(`ALTER TABLE "attendance" DROP CONSTRAINT "FK_1e20583fef6c70d9fcf118dc6d0"`);
        await queryRunner.query(`DROP TABLE "patient_record_history"`);
        await queryRunner.query(`DROP TABLE "patient_record"`);
        await queryRunner.query(`DROP TABLE "occupation"`);
        await queryRunner.query(`DROP TABLE "specialist"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TYPE "client_blood_type_enum"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "attendance"`);
        await queryRunner.query(`DROP TYPE "attendance_status_enum"`);
    }
}