DROP DATABASE IF EXISTS ChefItUp;

CREATE DATABASE ChefItUp;

USE ChefItUp;

CREATE TABLE User(
    userId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    type  VARCHAR(255) NOT NULL,
    registrationDate VARCHAR(255)NOT NULL
);

CREATE TABLE CustomerProfile(
    profileId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    payment VARCHAR(255) NOT NULL,
    balance VARCHAR(255) NOT NULL,
    subscribe BOOLEAN DEFAULT 0,
    approve VARCHAR(255) NOT NULL,
    vip VARCHAR(255) NOT NULL,
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
    price VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    image LONGBLOB,
    profileId INT NOT NULL,
    FOREIGN KEY (profileId) REFERENCES EmployeeProfile(profileId)
);

Create Table Rating(
    ratingId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    rating VARCHAR(255) NOT NULL,
    dishId INT NOT NULL,
    userID INT NOT NULL,
    FOREIGN KEY (userID) REFERENCES User(userID),
    FOREIGN KEY (dishId) REFERENCES Menu(dishId)
);

Create Table Cart(
    cartId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    price VARCHAR(255) NOT NULL,
    quantity VARCHAR(255) NOT NULL,
    dishId INT NOT NULL,
    chefName VARCHAR(255) NOT NULL,
    dishName VARCHAR(255) NOT NULL,
    userID INT NOT NULL,
    FOREIGN KEY (userID) REFERENCES User(userID),
    FOREIGN KEY (dishId) REFERENCES Menu(dishId)
);

Create Table Reservation(
    reservationId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(255) NOT NULL,
    date VARCHAR(255) NOT NULL,
    time INT NOT NULL,
    guest VARCHAR(255) NOT NULL,
    userID INT NOT NULL,
    FOREIGN KEY (userID) REFERENCES User(userID)
);

Create Table Warning(
    warningId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    orderNo INT NOT NULL,
    complainant VARCHAR(255) NOT NULL,
    complainantID INT NOT NULL,
    comments VARCHAR(255) NOT NULL,
    userID INT NOT NULL,
    FOREIGN KEY (userID) REFERENCES User(userID),
    FOREIGN KEY (complainantID) REFERENCES User(userID)
);

INSERT INTO User(userName,password,email,type,registrationDate) VALUES ('eddie',MD5('123'),'eddie@gmail.com','m',NOW())
