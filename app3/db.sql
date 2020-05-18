CREATE EXTENSION IF NOT EXISTS "uuis-ossp";

CREATE TABLE "users" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "name" character varying NOT NULL,
  "email" character varying NOT NULL,
  "password" character varying NOT NULL,
)