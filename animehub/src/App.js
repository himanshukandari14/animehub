import { useState } from "react";
import Heading from "./Components/Heading";
import animeData from "./Components/data";
import Card from "./Components/Card";

function App() {
  const [data,setData]= useState(animeData);
  function notInterestedcardRemover(id){
    const newCards= data.filter(card=> card.id !== id);
    setData(newCards);
  }

  function interestedCardRemover(id){
    const updatedCards=data.filter(card => card.id == id);
    setData(updatedCards);
  }
  if(data.length ===0) return(
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <div className="">No cards Left</div>
    <button onClick={()=>setData(animeData)} className="bg-green-500 px-4 py-2 rounded-2xl ">refresh</button>
    </div>
    
  )
  return (
    <div className="App min-h-[100vh]   bg-green-400 w-[100vw]overflow-x-hidden">
     <Heading></Heading>
    <div className="w-full min-h-[100vh] bg-white flex flex-wrap justify-center items-center gap-6 py-6  ">
    
      {data.map((card)=>{
        return(
          <Card {...card} notInterestedcardRemover={notInterestedcardRemover} interestedCardRemover={interestedCardRemover}></Card>
        )
      })}

    </div>
    
    </div>
  );
}

export default App;
