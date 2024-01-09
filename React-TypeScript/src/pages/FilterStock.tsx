import { Category, Type } from '../constants/constant.ts';
import { Select, Table, Button } from "antd";
import { useEffect, useState } from "react";
import { filterStocks } from '../features/stocks/stock.service';
import { stockColumn } from "../constants/column.tsx";

const { Option } = Select;

export const FilterStock = () => {

  const [category, setCategory] = useState(null);
  const [type, setType] = useState(null);
  const [stocks,setStock] = useState([]);

  const onSubmit = async () => {
    if(!category && !type) {
      console.log("Error");
      return;
    }
    console.log("0");
    const stock = await filterStocks(category, type);
    console.log(stock,"stock");
    setStock(stock);
    
  }
  
  return (
    <>
      <div>
        <Select
          style={{ width: 200 }}
          placeholder="Select a category"
          onChange={(value) => {console.log(value);setCategory(value)}}
        >
          {Object.values(Category).map((category,index) => {
          return (
            <Option key={index}
              value={category}  
            >
              {category}
            </Option>
          )
          })}
        </Select>

        <Select
          style={{ width: 200 }}
          placeholder="Select a type"
          onChange={(value) => {console.log(value);setType(value)}}
        >
          {Object.values(Type).map((type,index) => {
          return (
            <Option key={index} value={type}>
              {type}
            </Option>
          )
          })}
        </Select>

        <Button type="primary" onClick={onSubmit}> Submit </Button>
      </div>

      <div>
        <Table columns={stockColumn} dataSource={stocks}>
        </Table>      
      </div>
    </>
  )
}