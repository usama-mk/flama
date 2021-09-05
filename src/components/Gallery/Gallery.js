import React, { useEffect, useState } from 'react'
import './Gallery.css'
import g1 from '../../assets/g1.png'
import g2 from '../../assets/g2.png'
import g3 from '../../assets/g3.png'
import g4 from '../../assets/g4.png'
import g5 from '../../assets/g5.png'
import g6 from '../../assets/g6.png'
import g7 from '../../assets/g7.png'

function Gallery({setGalleryModalIsOpen}) {
    const [isImageOpen, setIsImageOpen]= useState(false)
    const [image, setImage]= useState('')

    const handleOnImageClick=(src)=>{
        setIsImageOpen(true)
        setImage(src)
      
    }

    useEffect(()=>{
        if(isImageOpen){
            openImage('openedImage')
        }
    },[isImageOpen])

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
            src: g4,
            width: '200px',
            height: '300px'
        },{
            src: g5,
            width: '200px',
            height: '150px'
        },
        {
            src: g6,
            width: '150px',
            height: '300px'
        },
        {
            src: g7,
            width: '200px',
            height: '300px'
        },
    ]

    const openImage=(id)=>{
        const element= document.getElementById(id)
        element.classList.toggle("transparent");
    }
    return (
        <div className="gallery">
            {
                isImageOpen?(
                    <div className="imageShow">
                       <div className="imageShowClose">
                       <span className="imageCloseButton pointer" onClick={()=> setIsImageOpen(false)} >X</span>
                       </div>
                       <div className="openedImageWrapper">
                       <img id='openedImage'  className="transparent" src={image}  alt="" />
                       </div>
                    </div>
                ):(
                    images.map((image)=>{
                        return(
                            <div className="galleryItem" >
                                <img className="pointer" onClick={()=>{handleOnImageClick(image.src)}} src={image.src} height={image.height} width={image.width} alt="" />
                            </div>
                        )
                    })
                )
            }

        {/* <button onClick={()=>setGalleryModalIsOpen(false)}>close</button> */}
        </div>
    )
}

export default Gallery
