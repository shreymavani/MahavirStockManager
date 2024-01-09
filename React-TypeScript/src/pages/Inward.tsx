import { Table } from "antd";
import { useEffect, useState } from "react";
import { inwardColumn } from "../constants/column.tsx";
import { fetchInward } from '../features/inward/inward.service';


export const Inward = () => {

  const [inward, setInward] = useState([]);

  useEffect(() => {
    const getAllInward = async () => {
      const inward = await fetchInward();
      setInward(inward);
    }
      getAllInward();
  },[]);
  
  return (
    <>
      <div>
        <Table columns={inwardColumn} dataSource={inward}>
        </Table>
      </div>
    </>
  )
}