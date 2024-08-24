import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
    const { seekBg, seekBar, playStatus, play, pause, track, time, previous, next, seekSong } = useContext(PlayerContext)

    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
            <div className='hidden lg:flex items-center gap-4'>
                <img className='w-12 rounded' src={track.image}></img>
                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2 m-auto'>
                <div className='flex gap-4'>
                    <img src={assets.shuffle_icon} className='w-4 cursor-pointer' />
                    <img onClick={previous} src={assets.prev_icon} className='w-4 cursor-pointer' />
                    {playStatus
                        ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} />
                        : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} />
                    }
                    <img onClick={next} src={assets.next_icon} className='w-4 cursor-pointer' />
                    <img src={assets.loop_icon} className='w-4 cursor-pointer' />
                </div>
                <div className='flex items-center gap-4'>
                    <p className=' tracking-wider'>{time.currentTime.minute}:{time.currentTime.second} </p>
                    <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='h-1 border-none w-0 bg-green-700 rounded-full' />
                    </div>
                    <p className=' tracking-wider'>{time.totalTime.minute}:{time.totalTime.second} </p>
                </div>
            </div>
            <div className='hidden lg:flex items-center gap-2'>
                <img className='w-4 cursor-pointer' src={assets.plays_icon} />
                <img className='w-4 cursor-pointer' src={assets.mic_icon} />
                <img className='w-4 cursor-pointer' src={assets.queue_icon} />
                <img className='w-4 cursor-pointer' src={assets.speaker_icon} />
                <img className='w-4 cursor-pointer' src={assets.volume_icon} />
                <div className='w-20 bg-slate-50 h-1 rounded'>
                    <hr className='h-1 border-none w-0 bg-green-700' />
                </div>
                <img className='w-4 cursor-pointer' src={assets.mini_player_icon} />
                <img className='w-4 cursor-pointer' src={assets.zoom_icon} />
            </div>
        </div>
    )
}

export default Player