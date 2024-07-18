import React from 'react'

export const FooterCard = ({description,icon}) => {

  return (
    <div className='flex space-x-4 items-center'>
   <span>{icon}</span> 
    <p className='dark:text-slate-100 text-slate-500 text-[17px]'>{description}</p>
   </div>
  )
}
