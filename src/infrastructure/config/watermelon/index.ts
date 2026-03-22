import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import Schema from "./schema";
import migrations from "./migrations";
import Database from "@nozbe/watermelondb/Database";
import Password from "../../database/watermelon/models/password";

const adapter = new SQLiteAdapter({
  schema: Schema,
  migrations,
});

export const database = new Database({
  adapter,
  modelClasses: [Password],
});