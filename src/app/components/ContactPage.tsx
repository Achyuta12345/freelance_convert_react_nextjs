import React from 'react'

export default function ContactPage() {
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2 px-8">
                {/* Drop down Start*/}

                

<div className="flex items-center">
    <input  id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600  focus:ring-blue-500 "/>
    <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium">People</label>
    
</div>


                {/* Drop down End */}
            </div>
            <div className="col-span-8 px-8"></div>
            <div className="col-span-2 px-8"></div>
        </div>
    )
}
