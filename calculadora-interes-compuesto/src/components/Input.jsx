import React from 'react'
import { useField } from 'formik'

export default function Input({label, ...props}) {
    // hook para usar las propiedades de useField
    const [field,meta] = useField(props);
  return (
    <div className='mb-4'>
        <label className='block mb-2 text-gray-500 text-xl'>{label}</label>
        <input {...field} {...props} className='outline-none p-2 border-1 border-[#b1b3b5] rounded-sm w-full'/>
        {meta.touched && meta.error ? <span className='font-sm text-red-500'>{meta.error}</span> : null}
    </div>
  )
}
