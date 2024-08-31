import Home from "./home";
import {Routes , Route} from "react-router-dom";
import MovieCard from "./MovieCard";
import Error from "./Error";
import "./App.css";
const App = ()=>{
  return (
    <>
     <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "movie/:id" element={<MovieCard/>} />
      <Route path = "*" element = {<Error/>}/>
     </Routes>
    </>
  )
}
export default App
