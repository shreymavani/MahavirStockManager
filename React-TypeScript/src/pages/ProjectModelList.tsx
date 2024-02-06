import { Table } from "antd";
import { useEffect, useState } from "react";
import { getProjectModel } from '../features/project-model/projectModel.service';
import { modelColumn, stockColumn } from "../constants/column";


export const ModelList = () => {

  const [modelList, setModelList] = useState([]);

  useEffect(() => {
    const getAllModels = async () => {
      const modelList = await getProjectModel();
      const updatedModelList = modelList.map((model) => {
        return {
          projectName: model.projectName,
          ...model.quantity
        }
      })
      setModelList(updatedModelList);
    }
    getAllModels();
  },[]);

  
  
  return (
    <>
      <div>
        <Table columns={modelColumn} dataSource={modelList}>
        </Table>      
      </div>
    </>
  )
}