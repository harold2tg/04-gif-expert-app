export const getGif = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=WKpdqd4mz20r81gngba4rp1cepoxOyx4&q=valorant&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const {data} = await resp.json();
    // console.log(data)
    const gifs = data.map(img =>{
      return {
        id : img.id,
        title : img.title,
        url : img.images.downsized_medium.url
      }
    });
    return gifs
  }
  