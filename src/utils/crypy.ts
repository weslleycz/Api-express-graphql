import CryptoJS from "crypto-js";
import * as dotenv from "dotenv";

dotenv.config();

const crypyPassword = (password: string) => {
  if (process.env.SECRET) {
    const encrypted = CryptoJS.AES.encrypt(
      password,
      process.env.SECRET
    ).toString();
    return encrypted;
  }
};

const encryptiPassword = (password: string) => {
  if (process.env.SECRET) {
    const decrypted = CryptoJS.AES.decrypt(password, process.env.SECRET);
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
};

const matchKey = (password: string, encrypted: string) => {
  return password === encryptiPassword(encrypted);
};

export { crypyPassword, encryptiPassword, matchKey };
