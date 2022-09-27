import { useState,useEffect } from "react";
import {GifItems} from "./GifItems"
import { useFetchGits } from "../hooks/useFetchGits";

export const GifGrid = ({category}) => {
 
  const {images, isLoading} = useFetchGits(category);
  
  return (
    <>
        <h3>{category}</h3>
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
