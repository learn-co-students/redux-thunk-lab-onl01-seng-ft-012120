// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {

    render() {

        return(
            <div>
                {this.props.catPics.map((cat, idx) => {
                    return <img key={idx} src={cat.url} alt='' />
                })}
            </div>
        )
    }

}

export default CatList