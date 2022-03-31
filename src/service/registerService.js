import { UserModel } from "../db";

class registerService {
  static create = async ({ email, name, description, password }) => {
    const newUserData = [email, name, description, password];
    const newUser = await UserModel.create(newUserData);
    return newUser;
  };
}

export { registerService };