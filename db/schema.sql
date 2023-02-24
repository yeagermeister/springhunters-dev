DROP DATABASE IF EXISTS springhunters_db;
CREATE DATABASE springhunters_db;
USE springhunters_db;
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  username VARCHAR(255) NOT NULL UNIQUE KEY,
  pass_word VARCHAR(255) NOT NULL,
--   Can be used to set moderator, administrator permissions, etc.
  permissions varchar(30),
--   Future development for paying customers
  customer_level varchar(30)
  zipcode INT(5)
);
-- passwords and usernames will get hashed to md5 when we write them to the database
-- EXAMPLES
-- mysql> INSERT INTO UserNameAndPasswordDemo(UserId, UserPassword) VALUES ('John@gg.com', MD5('john123'));
-- Query OK, 1 row affected (0.17 sec)
-- mysql> INSERT INTO UserNameAndPasswordDemo(UserId, UserPassword) VALUES (MD5('Carol@gg.com'), MD5('123Carol'));
-- Query OK, 1 row affected (0.14 sec)
CREATE TABLE springs (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  image_URL TEXT,
  zipcode INT(5),
  fees VARCHAR(20),
  pets BOOLEAN,
  statepark BOOLEAN,
  camping BOOLEAN,
  scuba BOOLEAN,
  lat DECIMAL (7,4),
  lng DECIMAL (7,4)
);

CREATE TABLE ratings (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  spring_id INT,
  rating INT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (spring_id) REFERENCES springs(id) ON DELETE SET NULL
);
CREATE TABLE comments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  spring_id INT,
  comment TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (spring_id) REFERENCES springs(id) ON DELETE SET NULL
);
CREATE TABLE new_spring (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  image_URL TEXT,
  zipcode INT(5),
  fees VARCHAR(20),
  pets BOOLEAN,
  statepark BOOLEAN,
  camping BOOLEAN,
  gatordanger BOOLEAN,
  scuba BOOLEAN,
  lat DECIMAL,
  lng DECIMAL
);
