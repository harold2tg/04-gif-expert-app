// import { useState,useEffect } from "react";
import PropTypes from 'prop-types'
import {GifItems} from "./GifItems"
import { useFetchGits } from "../hooks/useFetchGits";

export const GifGrid = ({category}) => {
 
  const {images, isLoading} = useFetchGits(category);
  
  return (
    <>
        <h3>{category}</h3>
        {/* forma 1 para mostras cargando  */}
        {/* {
          isLoading 
          ? <h2>Cargando...</h2>
          :null

        } */}

        {/* forma 2 para mostrar el cargando */}

        {
          isLoading && <h2>Cargando...</h2>
        }


        <div className="card-grid">
            {
                images.map( ( image ) =>(
                <GifItems 
                  key={image.id} 
                  {...image}
                />
              ))

            }
        </div>
    </>
  )
}


GifGrid.propTypes = {
  category: PropTypes.string.isRequired,

}