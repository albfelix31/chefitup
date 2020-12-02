DROP DATABASE IF EXISTS ChefItUp;

CREATE DATABASE ChefItUp;

USE ChefItUp;

CREATE TABLE User(
    userId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    type  VARCHAR(255) NOT NULL,
    registrationDate DATETIME NOT NULL
);

CREATE TABLE CustomerProfile(
    profileId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    payment VARCHAR(255) NOT NULL,
    balance VARCHAR(255) NOT NULL,
    subscribe BOOLEAN DEFAULT 0,
    approve VARCHAR(255) NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(userId)
);

CREATE TABLE EmployeeProfile(
    profileId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    employeeId VARCHAR(255) NOT NULL,
    joiningDate VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    salary VARCHAR(255) NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(userId)
);

CREATE TABLE Menu(
    dishId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dishName VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    ingredients VARCHAR(255) NOT NULL,
    keywords VARCHAR(255) NOT NULL,
    profileId INT NOT NULL,
    FOREIGN KEY (profileId) REFERENCES EmployeeProfile(profileId)
);

Create Table Rating(
    ratingId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    rating VARCHAR(255) NOT NULL,
    dishId INT NOT NULL,
    FOREIGN KEY (dishId) REFERENCES Menu(dishId)
);
