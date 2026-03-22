import Model from "@nozbe/watermelondb/Model";
import { field, date } from "@nozbe/watermelondb/decorators";

export default class Password extends Model {
  static table = "passwords";

  @field("user_id") userId!: string;
  @field("title") title!: string;
  @field("password") password!: string;
  @field("is_active") isActive!: boolean;
  @date("updated_at") updatedAt!: Date;
  @date("created_at") createdAt!: Date;
}
