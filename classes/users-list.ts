import { User } from "./user";

export class UsersList {
  private list: User[] = [];

  constructor() {}

  /**
   * @description Adds an user
   * @param user
   * @returns
   */
  public add(user: User) {
    this.list.push(user);
    console.log(user);
    return user;
  }

  /**
   * @description Updates user name
   * @param id
   * @param name
   */
  public updateName(id: string, name: string) {
    for (const user of this.list) {
      if (user.id === id) {
        user.name = name;
        break;
      }
    }
    console.log("Updating user data");
    console.log(this.list);
  }

  /**
   * @description Returns users list
   * @returns
   */
  public getList() {
    return this.list;
  }

  /**
   * @description Returns user by id
   * @param id
   * @returns
   */
  public getUser(id: string) {
    return this.list.find((user) => user.id === id);
  }

  /**
   * @description Returns users list by room
   * @param room
   * @returns
   */
  public getUsersByRoom(room: string) {
    return this.list.filter((user) => user.room === room);
  }

  /**
   * @description Removes user by id
   * @param id
   * @returns
   */
  public removeUser(id: string) {
    const tempUser = this.getUser(id);
    this.list = this.list.filter((user) => user.id != id);
    return tempUser;
  }
}
