import React from 'react'

function Jobcard({title, company, description, link}) {
    return (
        <div className="container px-5 py-12 ">
            <div className="flex flex-col">
              <div className="w-full mx-auto my-4 bg-white border rounded-lg shadow-xl ">
                <div className="p-6">
                  <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> {title}</h2>
                  <h4 className="mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font "> {company}</h4>
                  <p className="mb-3 text-base leading-relaxed text-blueGray-500"> {description} </p>
                  <p></p>
                    <a href={link} className="w-full">
                    <button className="w-full px-16 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform border-black rounded-md bg-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-900"> Job Link </button>
                    </a>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Jobcard
