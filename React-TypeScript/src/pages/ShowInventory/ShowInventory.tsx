import './ShowInventory.css';
import { useEffect, useState } from "react";
import { Select, Button } from "antd";
import axios from "axios";
import { IProjectModel } from './ShowInventory.interface';
import { getAvailableStockInWareHouse, getPossibleNumberTillProductionCanDone, getTotalRequiredStocksForProductionPlan } from '../../features/project-model/projectModel.service';
import { PreviewModal } from '../../components/PreviewModal/PreviewModal';

const {Option} = Select;

export const ShowInventory = () => {

  const [projectModel,setProjectModel] = useState("");
  const [projectModelList,setProjectModelList] = useState([]);
  const [addedProjectModelList,setAddedProjectModelList] = useState<string[]>([]);
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [requiredQuantity,setRequiredQuantity] = useState<any>({});
  const [availableQuantity,setAvailableQuantity] = useState<any>({});
  const [lastPossibleItem,setLastPossibleItem] = useState("");
  const [readyForProduction, setReadyForProduction] = useState(false);


  const onModalClose = () => {
    setIsModalOpen(false);
  }

  const onModalOpen = () => {
    setIsModalOpen(true);
  }

  const handleProjectChange = (value: string) => {
    setProjectModel(value);
  }

  const addProjectModelHandle = () => {
    setAddedProjectModelList((prevState) => ([...prevState,projectModel]));
  }

  const checkProduction = (requiredQuantity: any,availableQuantity: any) => {
     let flag = true;

     Object.keys(availableQuantity).map((item,index) => {
        if(requiredQuantity[item] > availableQuantity[item] ) {
          flag = false;
        }
     })

     return flag;
  }

  const handleStatusCheck = async () => {
    const requiredQuantity = await getTotalRequiredStocksForProductionPlan(addedProjectModelList);
    setRequiredQuantity(requiredQuantity);
    console.log(requiredQuantity,"requiredQuantity");

    const availableQuantity = await getAvailableStockInWareHouse(addedProjectModelList);
    setAvailableQuantity(availableQuantity);
    console.log(availableQuantity,"availableQuantity");

    const lastPossibleItem = await getPossibleNumberTillProductionCanDone(addedProjectModelList);
    setLastPossibleItem(lastPossibleItem);
    console.log(lastPossibleItem,"lastPossibleItem");

    const isReadyForProduction = await checkProduction(requiredQuantity,availableQuantity);
    console.log(isReadyForProduction,"isReadyForProduction");
    setReadyForProduction(isReadyForProduction);

    onModalOpen();
  }

  const onRemoveProjectModel = (projectModel: string) => {
    setAddedProjectModelList(addedProjectModelList.filter((model) => {
      return model !== projectModel
    }));
  }

  useEffect(() => {
    const getProjectModel = async () => {
      const {data: response} = await axios.get("http://localhost:8080/projectModel/listAllModels");
      console.log(response,"response");
      setProjectModelList(response);
    }
    getProjectModel();
  },[])
  
  return (
    <>
      <div className="Container">
        <div className="DropDownContainer}">
            <Select value={projectModel} onChange={handleProjectChange} style={{width: "200px"}}>
              {projectModelList.map((projectModal: IProjectModel,index) => {
                return (
                  <Option key={index} value={projectModal.projectName}>
                    {projectModal.projectName}
                  </Option>
                )
              })}
            </Select>
            <Button onClick={addProjectModelHandle}>
              Add
            </Button>
        </div>

        <div className="ProjectModelContainer">
          <div className='modelList'>
            {addedProjectModelList.map((projectModel,index) => {
              return (
                <>
                <div className='modelContainer'>
                  <div className='addedModel'>
                    {projectModel}
                  </div>
                  <div>
                    <Button onClick={() => {onRemoveProjectModel(projectModel)}}> - </Button>
                  </div>
                </div>
                </>
              )
            })}
          </div>
          <div className='modelList-footer'>
            <Button onClick={handleStatusCheck}>
              Check Production status
            </Button>
          </div>
        </div>
      </div>
      <PreviewModal 
        isOpen={isModalOpen} 
        onClose={onModalClose} 
        availableQuantity={availableQuantity} 
        requiredQuantity={requiredQuantity} 
        lastPossibleItem={lastPossibleItem} 
        isReadyForProduction={readyForProduction}
        projectModelList={addedProjectModelList}
      />
    </>
  )
}