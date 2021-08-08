import React from 'react'

import { SpinnerOverlay,SpinnerContainer } from './with-spinner.styles';

const WithSpinner =WrappedComponent=>{
    const Spinner=({lädtgerade,...otherProps})=>{
        return lädtgerade?(
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>

        ):(
            <WrappedComponent {...otherProps}/>
        )
    };
    return Spinner;
};


export default WithSpinner;

