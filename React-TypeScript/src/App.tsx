import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Stock } from './pages/Stock'
import { Inward } from './pages/Inward'
import { FilterStock } from './pages/FilterStock';
import { DashBoard } from './pages/DashBoard';
import { InwardForm } from './pages/InwardForm';
import { ProjectModelForm } from './pages/ProjectModelForm';
import { ShowInventory } from './pages/ShowInventory/ShowInventory';
import { ModelList } from './pages/ProjectModelList';


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<DashBoard/>}/>
          <Route path='/stock' element={<Stock/>}/>
          <Route path='/inward' element={<Inward/>}/>
          <Route path='/filter' element={<FilterStock/>}/>
          <Route path='inwardForm' element={<InwardForm/>}/>
          <Route path='/project-model' element={<ProjectModelForm/>}/>
          <Route path='/update-inventory' element={<ShowInventory/>}/>
          <Route path='/model-list' element={<ModelList/>}/>
        </Routes>
      </Router>
    </>
  )
}