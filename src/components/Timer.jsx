// import React from 'react';
import {useState, useEffect} from 'react';

export default function Timer({setStopTime, questionNumber}) {
  
    const [timer, setTimer] = useState(20);

    useEffect(() => {
        if(timer === 0) return setStopTime(true);
        const interval = setInterval(() =>{
            setTimer(prev => prev -1);
        }, 1000)

        // clear internals in the timer. 
        return () => clearInterval(interval)

    },[setStopTime, timer])

    useEffect(() => {
        setTimer(20);
    }, [questionNumber]
    )


    return timer;
};
