DROP DATABASE IF EXISTS springhunters_db;
CREATE DATABASE springhunters_db;
USE springhunters_db;
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  username VARCHAR(255) NOT NULL UNIQUE KEY,
  password VARCHAR(255) NOT NULL,
  permissions varchar(30),
  customer_level varchar(30),
  zipcode INT(5),
  email VARCHAR(30) NOT NULL UNIQUE
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
  image_url TEXT,
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
  comment_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (spring_id) REFERENCES springs(id) ON DELETE SET NULL
);
CREATE TABLE comments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  spring_id INT,
  comment TEXT,
  rating_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (spring_id) REFERENCES springs(id) ON DELETE SET NULL
);
CREATE TABLE new_spring (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  zipcode INT(5),
  pets BOOLEAN,
  statepark BOOLEAN,
  camping BOOLEAN,
);
