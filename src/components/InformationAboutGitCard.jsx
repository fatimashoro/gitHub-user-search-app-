import React from 'react'


export const InformationAboutGitCard = ({title,numbers}) => {
   
    return (
        <div className='flex flex-col'>
            <span className='dark:text-white text-slate-500'>{title}</span>
            <span className= 'dark:text-white  text-black font-bold text-xl'>{numbers}</span>
        </div>
    )
}
