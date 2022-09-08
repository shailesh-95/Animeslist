import { useEffect , useState } from "react";
import Usefetch from "./usefetch";
import AnimesList from "./Animeslist";

const Wishlist = () => {

    let{ data : animes , pending , error} =  Usefetch("https://api.jikan.moe/v4/anime")

    const [wishlistAnime, setwishlistAnime] = useState(null);

    const [wish, setwish] = useState(null);

    useEffect(()=>{

       let wish = localStorage.getItem("wish");

       wish = JSON.parse(wish);

        setwish(wish);

        },[])


    return (  

        <div>

       {error && <h1>data not found</h1>}

       { pending && <h4> <div class="d-flex justify-content-center"> <div class="spinner-border text-danger"  role="status" >
  <span class="visually-hidden">Loading...</span>
</div></div></h4>}

       { animes && <AnimesList animes={animes.filter((anime)=>{ return wish.includes(anime.mal_id)})}/> }
        </div>
    );
}
 
export default Wishlist;