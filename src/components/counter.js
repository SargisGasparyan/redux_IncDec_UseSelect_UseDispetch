import React from 'react'
import {connect} from 'react-redux'
import {inc,dec,rand} from '../action'
import {bindActionCreators} from 'redux'
const Counter=({counter,inc,dec,rand})=>{
    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={inc} className='btn btn-primary btn-lg'>INC</button>
            <button onClick={dec} className='btn btn-primary btn-lg'>DEC</button>
            <button onClick={rand} className='btn btn-primary btn-lg'>RAND</button>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        counter:state
    }
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({inc,dec,rand},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)