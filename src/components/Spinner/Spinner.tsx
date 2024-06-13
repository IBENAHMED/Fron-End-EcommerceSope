import React from 'react';
import './Spinner.css';

const Spinner = () => {
    return (
        <div className='relative h-screen'>
            <div className="Spinners">
                <div
                    className="spinner border-4 border-t-4  rounded-full h-12 w-12 animate-spin"
                    style={{ "background": "linear-gradient(45deg, #4e54c8, #8f94fb)" }}>
                </div>
            </div>
        </div>
    )
}

export default Spinner
