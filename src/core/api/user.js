import { default as axios } from "axios";

export class UserApi {
  constructor() {
    axios.defaults.baseURL = "http://localhost:3333/user/";
  }
  async auth(email, password) {
    const res = await axios.post("auth", { email, password });
    return res;
  }
  async create(email, password) {
    const res = await axios.post("create", { email, password });
    return res;
  }
  async changePassword(email, token, password) {
    const res = await axios.put("changepassword", { email, token, password });
    return res;
  }
  async forgotPassword(email) {
    const res = await axios.post("forgot_password", { email });
    return res;
  }
  async verifyUser(email) {
    const res = await axios.post("verifyuser", { email });
    return res;
  }
}
