import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import Songitems from './Songitems'

const DisplayHome = () => {
    return (
        <>
            <Navbar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
                <div className='flex overflow-auto'>
                    {albumsData.map((album, index) => (<AlbumItem key={index} id={album.id} name={album.name} desc={album.desc} image={album.image} />))}
                </div>
            </div>
            <div className=''>
                <h1 className='my-5 font-bold text-2xl'>Top 8 Hits</h1>
                <div className='flex overflow-auto'>
                    {songsData.map((song, index) => (<Songitems key={index} id={song.id} file={song.file} name={song.name} desc={song.desc} image={song.image} />))}
                </div>
            </div>
        </>
    )
}

export default DisplayHome