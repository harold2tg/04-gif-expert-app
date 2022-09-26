

import { useState,useEffect } from "react";
import { getGif } from "../helpers/GetGifs";

export const GifGrid = ({category}) => {

  const getImages = async()=>{
    const newImages = await getGif( category );
    setImages(newImages);
  }

  const [images, setImages] = useState([]);
  useEffect(()=>{
    getImages()

    // getGif(category)
    // .then(newImages => setImages(newImages))
  }, [])
  
  // const gifsAll = getGif(category);

  return (
    <>
        <h3>{category}</h3>
        {/* <h5>{counter}</h5> */}
        {/* <button onClick={ () => setCounter(counter + 1 ) }>+1</button> */}
        
        <ol>
            {
              // images.map(image=>(
              //   <li key={image.id}>{ image.title }</li>
              // ))

              // otra forma de mostrar con desestruracion de objeto
              images.map( ({id,title,url})=>(
                <li key={ id }> <a href={url} target="_blank">{title}</a></li>
              ))

            }
        </ol>
    </>
  )
}
