import React from 'react'
import {inc,dec,rand} from '../action'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'

const Counter=()=>{
    const counter = useSelector(state => state)
    const dispatch = useDispatch()

  
    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={()=>dispatch(inc())} className='btn btn-primary btn-lg'>INC</button>
            <button onClick={()=> dispatch(dec())} className='btn btn-primary btn-lg'>DEC</button>
            <button onClick={()=> dispatch(rand())} className='btn btn-primary btn-lg'>RAND</button>
        </div>
    )
}

export default Counter