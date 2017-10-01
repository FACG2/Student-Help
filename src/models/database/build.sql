BEGIN;

DROP TABLE IF EXISTS students  CASCADE;
DROP TABLE IF EXISTS books  CASCADE;
CREATE TABLE "students" (
	"name" varchar NOT NULL,
	"email" varchar NOT NULL UNIQUE,
	"password" varchar NOT NULL,
	"img" varchar NOT NULL DEFAULT 'user_avatar.png',
	CONSTRAINT students_pk PRIMARY KEY ("email")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "books" (
	"id" serial NOT NULL,
	"title" varchar NOT NULL,
	"isbn" varchar,
	"version" varchar,
	"auther" varchar NOT NULL,
	"img_url" varchar NOT NULL,
	"creator_email" varchar NOT NULL,
	"status" varchar NOT NULL DEFAULT 'available',
	"borrower_email" varchar,
	"booking_date" TIMESTAMP,
	CONSTRAINT books_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "books" ADD CONSTRAINT "books_fk0" FOREIGN KEY ("creator_email") REFERENCES "students"("email");
ALTER TABLE "books" ADD CONSTRAINT "books_fk1" FOREIGN KEY ("borrower_email") REFERENCES "students"("email");

INSERT INTO students (name, email, password, img) VALUES

  ('mahmoud', 'mahmoud.box@gmail.com', '123456', 'mahmoud.png'),
  ('ghadeer', 'ghadeer.box@gmail.com', '$2a$08$WsD9bqU5GQdcjk4.eC0JkeCOhdRaVJL5x2gU0OF/vG/pKzeSAExy6', 'ghadeer.png'),

  ('moath', 'moath.box@gmail.com', '12356', 'moath.png');

INSERT INTO books (title, isbn, version, auther, img_url,creator_email,status,borrower_email,booking_date) VALUES
('Computer Science', '566-6845222', '10', 'Matt', 'https://images-na.ssl-images-amazon.com/images/I/51F8O03FVSL.jpg','mahmoud.box@gmail.com','available','ghadeer.box@gmail.com','2017-07-25T16:58:35.296Z'),
('UX/UI', '978-0134276717', '3', 'David', 'https://cdn-images-1.medium.com/max/1600/1*uVLkFQC3yhZo4Re2Ys2WCw.jpeg','ghadeer.box@gmail.com','available','mahmoud.box@gmail.com','2017-07-25T16:58:35.296Z'),
('Abstract Algebra', '601-30029696', '3', 'David', 'https://images-na.ssl-images-amazon.com/images/I/516WR87HwbL._SX318_BO1,204,203,200_.jpg','ghadeer.box@gmail.com','available','mahmoud.box@gmail.com','2017-07-25T16:58:35.296Z'),
('Data Mining', '632-2845222', '5', 'Alex', 'https://dz13w8afd47il.cloudfront.net/sites/default/files/1692_Learning%20Data%20mining%20with%20R_cov.jpg','moath.box@gmail.com','available','mahmoud.box@gmail.com','2017-07-25T16:58:35.296Z');


COMMIT;
