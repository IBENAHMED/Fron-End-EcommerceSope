import React from 'react'

const Spinner = () => {
    return (
        <div className="flex items-center justify-center">
            <div
                className="spinner border-4 border-t-4  rounded-full h-12 w-12 animate-spin"
                style={{ "background": "linear-gradient(45deg, #4e54c8, #8f94fb)" }}>
            </div>
        </div>
    )
}

export default Spinner
