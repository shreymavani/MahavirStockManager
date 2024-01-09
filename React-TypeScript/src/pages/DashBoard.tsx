import { Button } from "antd";
import { useNavigate } from 'react-router-dom'

export const DashBoard = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Dashboard</h1>
      <div>
        <Button onClick={() => navigate('/stock')}>
          Stock
        </Button>

        <Button onClick={() => navigate('/inward')}>
          Inward
        </Button>

        <Button onClick={() => navigate('/filter')}>
          Filter stock
        </Button>

        <Button onClick={() => navigate('/inwardForm')}>
          Inward Form
        </Button>

        <Button onClick={() => navigate('/project-model')}>
          Project Model
        </Button>

        <Button onClick={() => navigate('/update-inventory')}>
          Update Inventory
        </Button>
      </div>
    </>
  )
}
