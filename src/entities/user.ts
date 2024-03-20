import { Entity } from "@/util";

// TODO: Implement this entity
export class User extends Entity {
  constructor(
    public name: string,
    public email: string,
    public password: string,
  ) {
    super();
  }
}
