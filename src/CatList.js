// write your CatList component here
import React from 'react';

const CatList = (props) =>{
    console.log(props)
    return(
        <div>
           {props.catPics.map(pic => <image src={pic.url} />)} 
        </div>
    )
}

export default CatList