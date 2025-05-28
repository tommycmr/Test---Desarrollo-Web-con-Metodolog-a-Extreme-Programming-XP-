-- CreateTable
CREATE TABLE `Avenger` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `alias` VARCHAR(191) NOT NULL,
    `habilidades` VARCHAR(191) NOT NULL,
    `actor` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
