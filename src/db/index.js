import { db } from "./Schema/user";

import { UserModel } from "./model/User";

db.connect((err) => {
  if (err) {
    console.log(err);
  }
});

export { UserModel };
