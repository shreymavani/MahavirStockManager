import { Table } from "antd";
import { useEffect, useState } from "react";
import { fetchStocks } from '../features/stocks/stock.service';
import { stockColumn } from "../constants/column";


export const Stock = () => {

  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const getAllStocks = async () => {
      const stock = await fetchStocks();
      setStocks(stock);
    }
    getAllStocks();
  },[]);

  
  
  return (
    <>
      <div>
        <Table columns={stockColumn} dataSource={stocks}>
        </Table>      
      </div>
    </>
  )
}