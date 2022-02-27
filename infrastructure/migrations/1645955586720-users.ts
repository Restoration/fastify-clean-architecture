import {MigrationInterface, QueryRunner} from "typeorm";

export class users1645955586720 implements MigrationInterface {
    name = 'users1645955586720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` CHANGE `id` `id` bigint NOT NULL");
        await queryRunner.query("ALTER TABLE `users` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `users` ADD `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `name`");
        await queryRunner.query("ALTER TABLE `users` ADD `name` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `email` `email` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `password` `password` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `users` ADD `created_at` datetime(0) NOT NULL DEFAULT NOW()");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `users` ADD `updated_at` datetime(0) NOT NULL DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP(6)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `users` ADD `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `users` ADD `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `users` CHANGE `password` `password` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `email` `email` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `name`");
        await queryRunner.query("ALTER TABLE `users` ADD `name` varchar(60) NULL");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `users` ADD `id` bigint NOT NULL AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `users` ADD PRIMARY KEY (`id`)");
        await queryRunner.query("ALTER TABLE `users` CHANGE `id` `id` bigint NOT NULL AUTO_INCREMENT");
    }

}
