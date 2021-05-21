import React from 'react'
import Info from '../../Components/Info/Info'
import {obj1,obj2} from './Data'
const HomePage = () => {
    return (
        <>
         <Info obj={obj1} />
         <Info obj={obj2}/>
         
        </>
    )
}

export default HomePage
