
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
    user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(224) UNIQUE NOT NULL,
    user_name VARCHAR(200) UNIQUE NOT NULL,
    passward VARCHAR(200) NOT NULL,
    first_name VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTMP,
);

CREATE TABLE address(
    address_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCE (users(user_id)) ON DELETE CASECADE,
    address_type VARCHAR(200) CHECK (address_type in ('billing','shipping'))
);


CREATE TABLE product(
    product_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID NOT NULL REFERENCES (address(address_id)) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTMP
)

CREATE EXTENSION IF NOT EXITS  'uuid-ossp';


INSERT INTO car(bardn , model, year)
VALUES ('bmx','v0',1068);

SELECT * FROM cars;

INSERT INTO cars(brand, model, year)
VALUES
('volvo','r5',1990),
('bmw','562',1000),
('bench','sclass',1999);

SELECT * FROM cars;
SELECT brand FROM cars;
SELECT brans, year FROM cars;

//add a coloumn

ALTER TABLE cars
ADD color VARCHAR(200);

ALTER TABLE
ADD fine VARCHAR(300);

ALTER TABLE ADD bal VARCHAR(200);

SELECT * FROM cars


//update
UPDATE cars
SET color='red';

UPDATE cars
SET color='red'
WHERE brand='volvo'

UPDATE cars
SET color='green', year=1998
WHERE brand='toyota';

//change a data type of a coloumn

ALTER TABLE cars
ALTER COLUMN  year TYPE VARCHAR(4);

ALTER TABLE cars
ALTER COLUMN color TYPE VARCHAR(20);


//remove a coloumn
ALTER TABLE cars
DROP COLUMN color;


//DeleTE

DELETE FROM cars
WHERE brand='volvo';

DELETE FROM cars;

TRUNCATE TABLE cars;


DROP TABLE cars

//sort
SELECT * FROM product
ORDER BY price;

SELECT * FROM product
ORDER BY price DESC;


SELECT product_id, product_name, category_id
FROM products
INNER JOIN categories ON products.category_id===categories.category_id;