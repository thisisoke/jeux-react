
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const GifArray = () => {
    
    const [listOfGifs, setGifs] = useState();
    let content;
  
    useEffect(() => {
      // code to run on component mount
        
        gifs();
  
  
    }, [])

    
    const gifs = async () => {
        try {
          // fetch data from a url endpoint
          const gifResult = await axios.get("https://api.giphy.com/v1/gifs/search?api_key=OaSDu9vRTy8cI8Q2Z91TnJqNqXC8AIth&q=play&limit=8&offset=0&rating=pg&lang=en");
    
            console.log(gifResult.data.data);
    
            setGifs(gifResult.data.data)
          return gifResult;
        } catch(error) {
          console.log("error", error);
          // appropriately handle the error
        }
      }

    
      return(
          <div>
              <h1>gid array</h1>

              {/* {console.log(listOfGifs)} */}
              {listOfGifs && listOfGifs.map(item => (
                
                <img key= {item.id} src={item.images.original.url}/>
                ))}
              
          </div>
      );
    


}



