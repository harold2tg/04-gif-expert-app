import {useEffect, useState} from 'react'
import {getGif} from '../helpers/GetGifs'

export const useFetchGits = (category) => {

 const [images, setImages] = useState([]);
 const [isLoading, setIsloading] = useState(true);

  const getImages = async()=>{
    const newImages = await getGif( category );
    setImages(newImages);
    setIsloading(false);
  }

  useEffect(()=>{
    getImages()
  }, [])

  return {
    images:images,
    isLoading:isLoading
  }
}
