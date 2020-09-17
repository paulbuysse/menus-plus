
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

--creates table to store all menus
CREATE TABLE "menus" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"title" VARCHAR(255) NOT NULL
);

--creates table to store all dishes
CREATE TABLE "dishes" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"name" VARCHAR(255) NOT NULL,
	"price" INT NOT NULL,
	"img_url" VARCHAR(255),
	"description" VARCHAR(255),
	"instructions" TEXT
);

--junction for menus and dishes
CREATE TABLE "menus_dishes" (
	"id" SERIAL PRIMARY KEY,
	"menu_id" INT REFERENCES "menus",
	"dish_id" INT REFERENCES "dishes"
);