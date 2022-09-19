import { useState } from "react"

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState('One punch') 
  
  const onInputChange= ({target}) =>{
    // console.log(target.value)
    setInputValue(target.value)
  }
  
  const onSubmit = (event)=>{
    event.preventDefault();
    // console.log(inputValue)
  }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="Buscar gif"
            value={inputValue}
            onChange={ onInputChange} 
            />
    </form>        
  )
}
