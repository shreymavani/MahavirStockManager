import axios from "axios";

export const fetchInward = async () => {
  try {
    const {data: inward} = await axios.get('http://localhost:8080/inwards');
    return inward;
  } catch(error) {
    console.log(error);
    return [];
  }
}

export const createInward = async (inward: any) => {
  try {
    const {data: response} = await axios.post('http://localhost:8080/inwards', inward);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}