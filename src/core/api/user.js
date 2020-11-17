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
  async createValid(email) {
    const res = await axios.post("createvalid", { email });
    return res;
  }
  async Valid(email) {
    const res = await axios.post("valid", { email });
    return res;
  }
  async changePassword(email, password) {
    const res = await axios.put("changepassword", { email, password });
    return res;
  }
}
