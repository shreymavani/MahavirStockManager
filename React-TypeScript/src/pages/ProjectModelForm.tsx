import { useState } from "react"
import { createProjectModel } from "../features/project-model/projectModel.service";

  export const ProjectModelForm = () => {
    const [formData,setFormData] = useState({
      projectName: '',
      Glycerin: 0,
      SLES: 0,
      DM_Water: 0,
      SMP: 0,
      Stearic: 0,
      EDTA: 0,
      E_Wax: 0,
      Noodles: 0
  });

  const onChange = (e:any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e:any) => {
    e.preventDefault();
    if(formData.projectName === ''){
      alert('Please enter a project name');
      return;
    }
    
     const payload = {
      projectName: formData.projectName,
      quantity: {
        Glycerin: formData.Glycerin,
        SLES: formData.SLES,
        DM_Water: formData.DM_Water,
        SMP: formData.SMP,
        Stearic: formData.Stearic,
        EDTA: formData.EDTA,
        E_Wax: formData.E_Wax,
        Noodles: formData.Noodles
      }
      
    }

    const response = await createProjectModel(payload);
    
    if(response){
      setFormData({projectName: '',
      Glycerin: 0,
      SLES: 0,
      DM_Water: 0,
      SMP: 0,
      Stearic: 0,
      EDTA: 0,
      E_Wax: 0,
      Noodles: 0})
      alert("ProjectModel created/updated successfully")
    }
  }

  const { projectName, Glycerin, SLES, DM_Water, SMP, Stearic, EDTA, E_Wax,Noodles } = formData;
    
  return (
    <>
      <section className='heading'>
        <h1>
          Project Model Form
        </h1>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label for='projectName' className='form-label'>Project Name:</label>
            <input
              type='text'
              className='form-control'
              id='projectName'
              name='projectName'
              value={projectName}
              placeholder='Enter Project Modal Name'
              onChange={onChange}
            />
          </div>
    
          <div className='form-group'>
            <label for='Glycerin' className='form-label'>Glycerin:</label>
            <input
              type='number'
              className='form-control'
              id='Glycerin'
              name='Glycerin'
              value={Glycerin}
              placeholder='Enter Glycerin quantity'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label for='SLES' className='form-label'>SLES:</label>
            <input
              type='number'
              className='form-control'
              id='SLES'
              name='SLES'
              value={SLES}
              placeholder='Enter SLES quantity'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label for='DM_Water' className='form-label'>DM Water:</label>
            <input
              type='number'
              className='form-control'
              id='DM_Water'
              name='DM_Water'
              value={DM_Water}
              placeholder='Enter DM Water quantity'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label for='SMP' className='form-label'>SMP:</label>
            <input
              type='number'
              className='form-control'
              id='SMP'
              name='SMP'
              value={SMP}
              placeholder='Enter SMP quantity'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label for='Stearic' className='form-label'>Stearic:</label>
            <input
              type='number'
              className='form-control'
              id='Stearic'
              name='Stearic'
              value={Stearic}
              placeholder='Enter Stearic quantity'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label for='EDTA' className='form-label'>EDTA:</label>
            <input
              type='number'
              className='form-control'
              id='EDTA'
              name='EDTA'
              value={EDTA}
              placeholder='Enter EDTA quantity'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label for='E_Wax' className='form-label'>E Wax:</label>
            <input
              type='number'
              className='form-control'
              id='E_Wax'
              name='E_Wax'
              value={E_Wax}
              placeholder='Enter E-Wax quantity'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label for='Noodles' className='form-label'>Noodles:</label>
            <input
              type='number'
              className='form-control'
              id='Noodles'
              name='Noodles'
              value={Noodles}
              placeholder='Enter Noodles quantity'
              onChange={onChange}
            />
          </div>
         
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
      
    </>
  )
}