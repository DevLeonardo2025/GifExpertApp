import {GifItem} from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  // Custom Hooks useFecthGifs 
  const { images, isLoading } = useFetchGifs(category); 

  console.log(images, isLoading);

  return (
    <>
        <h2>{category}</h2>
        <div className="card-grid">
          {
            images.map( ( image ) => (
               <GifItem 
                  key={image.id}
                  { ...image}
               />
            ))
          }
        </div>
    </>
  )
}
