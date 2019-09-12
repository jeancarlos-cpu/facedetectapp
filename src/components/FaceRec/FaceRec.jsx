import React from 'react';
import "./FaceRec.css"

const FaceRec = ({ imageUrl, box }) => {

    const divStyle = {
        top: box.topRow,
        right: box.rightCol,
        left: box.leftCol,
        bottom: box.bottomRow
    }

    return (
        <div className="center">
            <div className=" absolute mt2">
                <img id="faceimg" src={imageUrl} alt="" />
                <div className='bounding-box' style={divStyle}>
                </div>
            </div>
        </div>
    )
}


export default FaceRec;