import React from 'react'
import './Gallery.css'
import g1 from '../../assets/g1.png'
import g2 from '../../assets/g2.png'
import g3 from '../../assets/g3.png'

function Gallery({setModalIsOpen}) {
    const images=[
        {
            src: g1,
            width: '200px',
            height: '300px'
        },
        {
            src: g2,
            width: '150px',
            height: '200px'
        },
        {
            src: g3,
            width: '200px',
            height: '150px'
        },
        {
            src: g1,
            width: '200px',
            height: '300px'
        },{
            src: g1,
            width: '200px',
            height: '300px'
        },
    ]
    return (
        <div className="gallery">
            {
                images.map((image)=>{
                    return(
                        <div className="galleryItem" >
                            <img src={image.src} height={image.height} width={image.width} alt="" />
                        </div>
                    )
                })
            }

        {/* <button onClick={()=>setModalIsOpen(false)}>close</button> */}
        </div>
    )
}

export default Gallery
