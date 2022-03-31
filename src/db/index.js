import { db } from "./Schema/user";

import { UserModel } from "./model/User";

db.connect((err) => {
  if (err) {
    console.log("mysql connection error :" + err);
  } else {
    console.log("mysql is connected successfully.");
  }
});

export { UserModel };
