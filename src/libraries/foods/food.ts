import {API} from "libraries";

export const getAllFoods = async (setParam?: string) => {
  try {
    const resp = await API.get(`/foods?${setParam}`);
    return resp?.data;
  } catch (error) {
    return console.log(error);
  }
};

export const getFoodById = async (id: number) => {
  try {
    const resp = await API.get(`/food/${id}`);
    return resp?.data;
  } catch (error) {
    return console.log(error);
  }
};
