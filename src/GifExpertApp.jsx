import React from 'react'
import { useState } from 'react'
import {AddCategory} from '../src/components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball', 'Naruto']);
  const onAddCategory = (newCategory) =>{
    //Priemra forma de agrear seria
    // setCategories([ ...categories, 'Caballeros del Zodiaco']);
   
    //segunda forma de agregar
    // setCategories(cat => [...cat, 'Caballeros del Zodiaco']);
    // categories.push(newCategory)
    
    if (categories.includes(newCategory)){
      alert("ya existe esta categoria")
      return
    };
 
    // para insertarlo al inicio 
    setCategories([newCategory,...categories]);



  }

  return (
    <>
        <h1>GifExpertApp</h1>
    <AddCategory
      // setCategories={setCategories}
      onNewCategory = { value => (onAddCategory(value))}
      currentCategories = {categories}
     />
    
    <button onClick={onAddCategory}>Agregar</button>
      {/* listados de Gif */}
        {/* {categories.map( category =>{
            return (
              <div  key={category}>
                <h3>{category}</h3>
                <li>{category}</li>
              </div>
            )
          })
        } */}

        {/* otra orma de mostrar es  */}
        
        {/* {categories.map( (category) =>(
              <div  key={category}>
                <h3>{category}</h3>
                <li>{category}</li>
              </div>
          ))
        }   */}

         {categories.map( (category) =>(
              <GifGrid 
                key={category}
                category={category}
              />
          ))
        }  
    </>
  )
}
