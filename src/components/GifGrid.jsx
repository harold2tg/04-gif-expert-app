import { useState,useEffect } from "react";
import {GifItems} from "./GifItems"
import { getGif } from "../helpers/GetGifs";

export const GifGrid = ({category}) => {
  const [images, setImages] = useState([]);

  const getImages = async()=>{
    const newImages = await getGif( category );
    setImages(newImages);
  }

  useEffect(()=>{
    getImages()
  }, [])
  
  // const gifsAll = getGif(category);

  return (
    <>
        <h3>{category}</h3>
        {/* <h5>{counter}</h5> */}
        {/* <button onClick={ () => setCounter(counter + 1 ) }>+1</button> */}        
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
