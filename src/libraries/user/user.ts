import {API} from "libraries";

interface IBody {
  deviceName: string;
  model: string;
}
export const createUser = async (body: IBody) => {
  try {
    const resp = await API.post("/user", body);
    return resp?.data;
  } catch (error) {
    return console.log(error);
  }
};
