import React from 'react'

const Signup = () => {
    return (
        <div className='bg-slate-400 w-1/2 m-auto p-7 flex flex-col justify-center items-center gap-6'>

            <p className='font-semibold text-2xl'>Sign up</p>

            <form className='flex flex-col gap-4  justify-center' >
                <div>
                    <label htmlFor="">email</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="text" />
                </div>

                <button className='bg-blue-600 p-2 rounded text-white font-medium'>Submit</button>
            </form>

        </div>
    )
}

export default Signup