import React, { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'
import './Gallery.css'
import g1 from '../../assets/galleryImages/1.jpeg'
import g2 from '../../assets/galleryImages/2.jpeg'
import g3 from '../../assets/galleryImages/3.jpeg'
import g4 from '../../assets/galleryImages/4.jpeg'
import g5 from '../../assets/galleryImages/5.jpeg'
import g6 from '../../assets/galleryImages/6.jpeg'
import g7 from '../../assets/galleryImages/7.jpeg'
import g8 from '../../assets/galleryImages/8.jpeg'

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
            height: '320px'
        },
        {
            src: g2,
            width: '200px',
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
            width: '200px',
            height: '300px'
        },
        {
            src: g7,
            width: '200px',
            height: '300px'
        },
        {
            src: g8,
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
                    // images.map((image, key)=>{
                    //     return(
                    //         <div key={key} className="galleryItem" >
                    //             <img className="pointer" key={key} style={{objectFit: 'cover'}}  onClick={()=>{handleOnImageClick(image.src)}} src={image.src} height={image.height} width={image.width}   alt="" />
                    //         </div>
                    //     )
                    // })

                    <Masonry
  breakpointCols={3}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
  {
        images.map((image, key)=>{
            return(
                <div key={key} className="galleryItem" >
                    <img className="pointer"style={{objectFit: 'cover'}}  key={key} onClick={()=>{handleOnImageClick(image.src)}} src={image.src} height={image.height} width={image.width}   alt="" />
                </div>
            )
        })
  }
</Masonry>
                )
            }

        {/* <button onClick={()=>setGalleryModalIsOpen(false)}>close</button> */}
        </div>
    )
}

export default Gallery
