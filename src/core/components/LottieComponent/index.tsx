import React from 'react'
import * as animationData from '../../../lottie/94249-loading.json'
import Lottie from 'react-lottie';

interface ILottieComponent {
    size: number
}

export const LottieComponent = ({ size }: ILottieComponent) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        
        <div
        style={{marginLeft:`-${size/3.5}px`}}
        ><Lottie options={defaultOptions}
            height={size*0.4}
            width={size}
            isStopped={false}
            isPaused={false} /></div>
    )
}