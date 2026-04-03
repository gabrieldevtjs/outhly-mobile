import { appSchema, tableSchema } from "@nozbe/watermelondb";

const Schema = appSchema({
  version: process.env.WALTERMELON_DATABASE_VERSION,
  tables: [
    tableSchema({
      name: "passwords",
      columns: [
        { name: "user_id", type: "string" },
        { name: "title", type: "string" },
        { name: "password", type: "string" },
        { name: "updated_at", type: "number" },
        { name: "created_at", type: "number" },
        { name: "is_active", type: "boolean" },
      ],
    }),
    tableSchema({
      name: "module-cards",
      columns: [
        { name: "id", type: "string" },
        { name: "title", type: "string" },
        { name: "updated_at", type: "number" },
        { name: "created_at", type: "number" },
        { name: "is_active", type: "boolean" },
      ],
    }),
  ],
});

export default Schema;
