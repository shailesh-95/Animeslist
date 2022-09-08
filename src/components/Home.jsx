import AnimesList from "./Animeslist";
import Usefetch from "./usefetch";

const Home = () => {

    let { data : animes , pending , error} = Usefetch("https://api.jikan.moe/v4/anime")

    return (  

    <div>

        {/* <h1> Display all the Animes</h1> */}

        {error && <h1>data not found</h1>}

       { pending && <h4> <div class="d-flex justify-content-center"> <div class="spinner-border text-danger"  role="status" >
  <span class="visually-hidden">Loading...</span>
</div></div></h4>}

       { animes && <AnimesList animes={animes}/> }
    
    </div>

    );
}
 
export default Home;