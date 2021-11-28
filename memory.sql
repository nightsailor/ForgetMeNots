SET sql_safe_updates = FALSE;
USE defaultdb;
DROP DATABASE IF EXISTS test CASCADE;


CREATE DATABASE test;
USE test;


CREATE TABLE memories (
    memory_id INT8 NOT NULL DEFAULT unique_rowid(),
    title VARCHAR(60) NULL,
    text VARCHAR NULL,
    done BOOL NULL,
    pub_date TIMESTAMP NULL,
    CONSTRAINT "primary" PRIMARY KEY (memory_id ASC),
    FAMILY "primary" (memory_id, title, text, done, pub_date)
  );

CREATE TABLE users (
    user_id INT8 NOT NULL DEFAULT unique_rowid(),
    username VARCHAR(60) NULL,
    email VARCHAR NULL,
    password VARCHAR NULL,
    create_date TIMESTAMP NULL,
    CONSTRAINT "primary" PRIMARY KEY (user_id ASC),
    FAMILY "primary" (user_id, username, email, password, create_date)
  );