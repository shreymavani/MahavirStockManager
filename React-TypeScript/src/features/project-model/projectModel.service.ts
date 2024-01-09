import axios from "axios";

export const createProjectModel = async(formData: any) => {
  try {
    const {data: response} = await axios.post(`http://localhost:8080/projectModel`,formData);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const getTotalRequiredStocksForProductionPlan = async (projectModelList: string[]) => {
  try {
    const response = await fetch('http://localhost:8080/projectModel/totalRequiredStockForProductionPlans',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectModelList)
    })
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const getAvailableStockInWareHouse = async (projectModelList: string[]) => {
  try {
    const response = await fetch(`http://localhost:8080/projectModel/availableStockInWareHouseThatIsRequiredForProductionPlan`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectModelList)
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const getPossibleNumberTillProductionCanDone = async (projectModelList: string[]) => {
  try {
    const response = await fetch(`http://localhost:8080/projectModel/possibleNumberTillProductionCanDone`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectModelList)
    });
    const text = await response.text();
    return text;
  } catch (error) {
    console.log(error);
    return '';
  }
}

export const updateItemsInInventory = async (projectModelList: string[]) => {
  try {
    const response = await fetch(`http://localhost:8080/stock/updateStockUsedForGivenProductionPlan`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projectModelList)
    })
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return '';
  }
} 