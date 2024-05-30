import React, { useContext } from 'react';
import './page.css';
import SignUp from '@/components/SignUp/SignUp';
import { ShopeProviderContext } from '@/context/ShopeContext';

const page = () => {

    return (
        <SignUp />
    )
}

export default page
