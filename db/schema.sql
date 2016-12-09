CREATE DATABASE gitgreat;

USE gitgreat;

DROP TABLE IF EXISTS `events`;
    
CREATE TABLE `events` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(60) NULL DEFAULT NULL,
  `where` VARCHAR(60) NULL DEFAULT NULL,
  `when` VARCHAR(60) NULL DEFAULT NULL,
  `createdAt` VARCHAR(60) NULL DEFAULT NULL,
  `updatedAt` VARCHAR(60) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'itemlists'
-- 
-- ---

DROP TABLE IF EXISTS `itemlists`;
    
CREATE TABLE `itemlists` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `item` VARCHAR(60) NULL DEFAULT NULL,
  `owner` VARCHAR(60) NULL DEFAULT NULL,
  `cost` VARCHAR(60) NULL DEFAULT NULL,
  `event` INTEGER NULL DEFAULT NULL,
  `createdAt` VARCHAR(60) NULL DEFAULT NULL,
  `updatedAt` VARCHAR(60) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `itemlists` ADD FOREIGN KEY (event) REFERENCES `events` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `events` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `itemlists` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `events` (`id`,`name`,`where`,`when`,`createdAt`,`updatedAt`) VALUES
-- ('','','','','','');
-- INSERT INTO `itemlists` (`id`,`item`,`owner`,`cost`,`event`,`createdAt`,`updatedAt`) VALUES
-- ('','','','','','','');