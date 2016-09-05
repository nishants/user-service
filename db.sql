--DROP TABLE users;
CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    first_name  VARCHAR(50),
    last_name   VARCHAR(50),
    email       VARCHAR(50),
    since       DATE,
    last_seen   DATE
);

INSERT INTO users(first_name) VALUES('hello');

SELECT * FROM users;