import { database } from "../../../config/watermelon";
import Password from "../models/password";

const PasswordRepositorie = {
  create: async (userId: string, title: string, password: string) => {
    await database.write(async () => {
      await database.collections.get<Password>("passwords").create((record) => {
        record.userId = userId;
        record.title = title;
        record.password = password;
        record.isActive = true;
      });
    });
  },
  findAll: async () => {
    return database.collections.get<Password>("passwords").query().fetch();
  },
};

export default PasswordRepositorie;
