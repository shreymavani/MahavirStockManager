import axios from "axios";

export const fetchStocks = async () => {
  try{
    const {data: stocks} = await axios.get('http://localhost:8080/stock');
    return stocks;
  } catch (err) {
    console.log(err,"err");
    return [];
  }
}

export const filterStocks = async (category: any, type: any) => {
  try{
  if(category && type) {
    console.log(category,type);
    const {data: stocks} = await axios.get(`http://localhost:8080/stock/${category}/${type}`);
    return stocks;
  } else if (category) {
    const {data: stocks} = await axios.get(`http://localhost:8080/stock/category/${category}`);
    return stocks;
  } else {
    const {data: stocks} = await axios.get(`http://localhost:8080/stock/type/${type}`);
    return stocks;
  }
  } catch (error) {
   console.log(error);
    return [];
  }
}