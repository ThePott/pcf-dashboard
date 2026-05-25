-- AlterTable
CREATE SEQUENCE activity_category_id_seq;
ALTER TABLE "activity_category" ALTER COLUMN "id" SET DEFAULT nextval('activity_category_id_seq');
ALTER SEQUENCE activity_category_id_seq OWNED BY "activity_category"."id";

-- AlterTable
CREATE SEQUENCE activity_description_id_seq;
ALTER TABLE "activity_description" ALTER COLUMN "id" SET DEFAULT nextval('activity_description_id_seq');
ALTER SEQUENCE activity_description_id_seq OWNED BY "activity_description"."id";

-- AlterTable
CREATE SEQUENCE activity_record_id_seq;
ALTER TABLE "activity_record" ALTER COLUMN "id" SET DEFAULT nextval('activity_record_id_seq');
ALTER SEQUENCE activity_record_id_seq OWNED BY "activity_record"."id";

-- AlterTable
CREATE SEQUENCE emission_factor_id_seq;
ALTER TABLE "emission_factor" ADD COLUMN     "company_id" BIGINT,
ALTER COLUMN "id" SET DEFAULT nextval('emission_factor_id_seq');
ALTER SEQUENCE emission_factor_id_seq OWNED BY "emission_factor"."id";
