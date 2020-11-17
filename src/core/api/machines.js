import { default as axios } from "axios";

export class MachineApi {
  constructor() {
    axios.defaults.baseURL = "https://recrutamento.alterdata.cloud/";
  }
  async getAll() {
    const res = await axios.get("listaServidor", {
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgxLCJpYXQiOjE2MDUyOTk2MzQsImV4cCI6MzIxMDYwMjg2OH0.iB3J6v6sbUbk058YA4ajGKl_ZmP7GviSaEf4XcANg64",
      },
    });
    return res;
  };
}

