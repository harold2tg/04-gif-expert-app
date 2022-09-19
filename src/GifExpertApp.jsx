import React from 'react'
import { useState } from 'react'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball', 'Naruto']);
  const onAddCategory = () =>{
    //Priemra forma de agrear seria
    // setCategories([ ...categories, 'Caballeros del Zodiaco']);
   
    //segunda forma de agregar
    // setCategories(cat => [...cat, 'Caballeros del Zodiaco']);

    // para insertarlo al inicio 
    setCategories(cat => ['Caballeros del Zodiaco',...cat]);



  }

  return (
    <>
    {/* Titulo */}
        <h1>GifExpertApp</h1>
      {/* input */}
    <button onClick={onAddCategory}>Agregar</button>
      {/* listados de Gif */}
      <ol>
        {categories.map( category =>{
            return <li key={category}>{category}</li>
          })
        }
      </ol>
    </>
  )
}
