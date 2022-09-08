import Usefetch from "./usefetch";
import { useParams } from "react-router-dom";



const Animedetails = () => 
{

    let {mal_id} = useParams();
    let { data : animes , pending , error} = Usefetch(`https://api.jikan.moe/v4/anime/${mal_id}`)

    return ( 
         <div>
                  {error && <h1> error </h1>}
             
                   {pending && <h1> loading... </h1>}

                 { animes && <div>

                    <img src={animes.images.jpg.image_url} alt="poster not found" id="poster"/>
                         <h2>Title : { animes.titles[0].title}</h2>
                         <h2>Type  : { animes.type }</h2>
                         <h2>Source  : { animes.source }</h2>
                         <h2>Episodes  : { animes.episodes }</h2>
                         <h2>Ratings  : { animes.rating }</h2>
                         <h2>Status  : { animes.status }</h2>
                         <h2>Duration  : { animes.duration }</h2>
                         <h2>Rank  : { animes.rank }</h2>
                         <h2>Popularity  : { animes.popularity }</h2>
                         <h2>Synopsis : { animes.synopsis }</h2>
                         <h2>Background : { animes.background }</h2>
                         <h2>Season : { animes.season }</h2>
                         <h2>Year : { animes.year }</h2>
                         <h2>Broadcast : { animes.broadcast.day}</h2>
                         <h2>Producers : { animes.producers[0].name }</h2>
                         <h2>Licensors : { animes.licensors[0].name}</h2>
                         <h2>Studios : { animes.studios[0].name}</h2>
                         <h2>Genres : { animes.genres[0].name}</h2>
                         <h2>Themes : { animes.themes[0].name}</h2><br />
                         <iframe width="560" height="315" src={animes.trailer.embed_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                  </div> }
            
         </div>
     );
}
 
export default Animedetails;