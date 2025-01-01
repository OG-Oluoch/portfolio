import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb' 
import { RiAngularjsLine } from 'react-icons/ri'
import { TbBrandMysql } from 'react-icons/tb' 
import { DiPostgresql } from 'react-icons/di'  
import { SiSpringboot } from 'react-icons/si'
import { RiNodejsLine } from 'react-icons/ri'
import { TbBrandLaravel } from 'react-icons/tb'

const Technologies = () => {
  return <div className='border-b border-neutral-800 pb-24'>
    <h2 className='my-20 text-center text-4xl'>Technologies</h2>
    <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiReactjsLine className='text-7xl text-cyan-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
        < TbBrandLaravel className='text-7xl text-red-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiNodejsLine className='text-7xl text-green-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiSpringboot className='text-7xl text-green-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
        < DiPostgresql className='text-7xl text-blue-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
        < TbBrandMysql className='text-7xl text-blue-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
        < RiAngularjsLine className='text-7xl text-red-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
        < TbBrandNextjs className='text-7xl text-white-400'/>
        </div>
    
    </div>
    </div>
}

export default Technologies