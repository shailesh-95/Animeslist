import React, { useEffect , useState } from "react";
import {Link} from 'react-router-dom';

const AnimesList = ({animes}) => {
     
    const [wish, setWish] = useState([]);
  
    useEffect(()=>{

     if ( localStorage.getItem("wish")==null)  //if wish array is not present before 
     {                                         // then only you add wish array
        localStorage.setItem("wish" , "[]" )
     }

    },[])
      
    let handleWishlist = (id)=>{
            
        let x = localStorage.getItem("wish");
        x=JSON.parse(x)
        if (!x.includes(id) )    // if id is not present then we have to push
        {
            x.push(id)
            x= JSON.stringify(x)
            localStorage.setItem("wish" ,x); 
            alert("Added to wishlist")
        }
        else{

          let i =  x.indexOf(id);
           x.splice(i,1)
           x = JSON.stringify(x);
           localStorage.setItem("wish", x); 
           alert("Removed from wishlist");

        }
        
     } 
     

    return (  

        
            
        <div className="anime-list">
           {
               animes.map((anime)=>{
                    return(
                    <div>
                        <div key={anime.mal_id} className="anime">

                          
                          <Link to={`/animedetails${anime.mal_id}`}>
                          <img src={anime.images.jpg.image_url} alt="poster not found" id="poster"/>
                          <h2>Title : { anime.titles[0].title}</h2>
                          <h2>Type  : { anime.type }</h2>
                          <h2>Source  : { anime.source }</h2>
                          <h2>Episodes  : { anime.episodes }</h2>
                          <h2>Ratings  : { anime.rating }</h2> 
                          </Link>
                        </div>
                         <button id="wishlist" onClick={()=>{handleWishlist(anime.mal_id)}}>
                             &#10084;
                             </button>

                        {/* <button><i class="bi bi-heart"></i></button> */}
                        
                          
                        
                         

                    </div>
                      
                    )
               })
                  
         }
        </div>

            
        
            
    );
}
 
export default AnimesList;