import React from 'react'

const Card = ({id,title,episodes,image,genre,notInterestedcardRemover,interestedCardRemover}) => {
    
  return (
    <div className='bg-white h-[500px] rounded-3xl w-[300px] shadow-2xl flex flex-col justify-center items-center'>
    <img src={image} className='rounded-3xl' height={328} width={220} />
    <h1>{title}</h1>
    <h1>{genre}</h1>
    <h1>{episodes}</h1>
    <button onClick={()=>interestedCardRemover(id)} className='bg-green-600 h-[30px] W-[220px] px-2 text-white rounded-md'>INTERESTED</button>
    <button onClick={()=>notInterestedcardRemover(id)} 
    className='bg-red-600 h-[30px] W-[180px] px-2 text-white rounded-md'>NOT INTERESTED</button>
    
    </div>
  )
}

export default Card
