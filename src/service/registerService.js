import crypto from "crypto";

class registerService {
  static hashPassword = (password) => {
    const hashedPassword = crypto
      .createHash("md5")
      .update(password)
      .digest("hex");
    return hashedPassword;
  };
}

export { registerService };
