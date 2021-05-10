import React from 'react'
import Info from '../../Components/Info/Info'
import {obj1,obj2,obj3,obj4} from './Data'
const HomePage = () => {
    return (
        <>
         <Info obj={obj1}/>
         <Info obj={obj2}/>
         <Info obj={obj3}/>
         <Info obj={obj4}/>
        </>
    )
}

export default HomePage
