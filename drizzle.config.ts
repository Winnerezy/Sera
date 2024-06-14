import type {Config} from "drizzle-kit";
export default {
  schema: "./lib/schemas", // Your schema location
  out: "./drizzle", // Where our migrations will be outputted
  driver: "pg", // PostgreSQL driver
  dbCredentials: {
    connectionString: "postgres://default:aBVTkR1cuYH4@ep-sparkling-lake-a4wuwykg-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require",
    database: "verceldb"
  },
} satisfies Config;