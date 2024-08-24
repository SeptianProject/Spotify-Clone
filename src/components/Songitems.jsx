import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const Songitems = ({ id, name, desc, image }) => {
    const { playWithId } = useContext(PlayerContext)


    return (
        <div onClick={() => playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img className=' font-bold mt-2 mb-1' src={image} />
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className=' text-slate-200 text-sm '>{desc}</p>
        </div>
    )
}

export default Songitems