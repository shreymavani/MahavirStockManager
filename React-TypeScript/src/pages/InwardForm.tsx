import {useState} from "react";
import { Category, INWARD_FORM_DEFAULT_STATE, Type } from '../constants/constant';
import { Select } from "antd";
import { createInward } from "../features/inward/inward.service";

const { Option } = Select;

export const InwardForm = () => {
  const [formData,setFormData] = useState(INWARD_FORM_DEFAULT_STATE);

  const { itemName,emailAddress, sign, category,box, unitPerBox, looseUnits, storageRoom, vehicle, unloadingVehicle, type } = formData;
  console.log(formData,"formData");

  const onSubmit = async (e:any) => {
    e.preventDefault();
    
    if(itemName==="" || emailAddress==="" || sign==="" || box===undefined || unitPerBox===undefined || looseUnits===undefined || storageRoom==="" || vehicle==="" || unloadingVehicle===""){
      alert("Please fill all the fields");
      return;
    }

    const response = await createInward(formData);
    setFormData(INWARD_FORM_DEFAULT_STATE)
    alert('Form data submitted successfully, dhentende')
  }

  const onChange = (e:any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  
  return (
    <>
      <section className='heading'>
        <h1>
          Inward Form
        </h1>
      </section>
      
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
          <label htmlFor='itemName' className='form-label'>ItemName:</label>
            <input
              type='text'
              className='form-control'
              id='itemName'
              name='itemName'
              value={itemName}
              placeholder='Enter itemName'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
          <label htmlFor='emailAddress' className='form-label'>Email Address:</label>
            <input
              type='email'
              className='form-control'
              id='emailAddress'
              name='emailAddress'
              value={emailAddress}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
          <label htmlFor='sign' className='form-label'>Sign:</label>
            <input
              type='text'
              className='form-control'
              id='sign'
              name='sign'
              value={sign}
              placeholder='Enter sign'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
          <label htmlFor='category' className='form-label'>Select Category:</label>
          <select
            style={{ width: 200 }}
            value={category}
            placeholder="Select a category"
            onChange={onChange}
            id='category'
            name='category'
          >
            {Object.values(Category).map((type,index) => {
            return (
              <option key={index} value={type}>
                {type}
              </option>
            )
            })}
          </select>
          </div>
          <div className='form-group'>
          <label htmlFor='box' className='form-label'>Enter box number:</label>
            <input
              type='number'
              className='form-control'
              id='box'
              name='box'
              value={box}
              placeholder='Enter box number'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
          <label htmlFor='unitPerBox' className='form-label'>Enter unitPerBox:</label>
            <input
              type='number'
              className='form-control'
              id='unitPerBox'
              name='unitPerBox'
              value={unitPerBox}
              placeholder='Enter unitPerBox'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
          <label htmlFor='looseUnits' className='form-label'>Enter looseUnits:</label>
            <input
              type='number'
              className='form-control'
              id='looseUnits'
              name='looseUnits'
              value={looseUnits}
              placeholder='Enter looseUnits'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
          <label htmlFor='storageRoom' className='form-label'>Enter storageRoom:</label>
            <input
              type='text'
              className='form-control'
              id='storageRoom'
              name='storageRoom'
              value={storageRoom}
              placeholder='Enter StorageRoom'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
          <label htmlFor='vehicle' className='form-label'>Enter vehicle:</label>
            <input
              type='text'
              className='form-control'
              id='vehicle'
              name='vehicle'
              value={vehicle}
              placeholder='Enter vehicle'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
          <label htmlFor='unloadingVehicle' className='form-label'>Enter unloadingVehicle:</label>
            <input
              type='text'
              className='form-control'
              id='unloadingVehicle'
              name='unloadingVehicle'
              value={unloadingVehicle}
              placeholder='Enter unloadingVehicle'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
          <label htmlFor='type' className='form-label'>Select Type:</label>
            <select
              style={{ width: 200 }}
              value={type}
              placeholder="Select a type"
              id= 'type'
              name='type'
              onChange={onChange}
            >
              {Object.values(Type).map((type,index) => {
              return (
                <option key={index} value={type}>
                  {type}
                </option>
              )
              })}
            </select>
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