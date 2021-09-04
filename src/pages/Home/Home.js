import React, { useState } from "react";
import "./Home.css";
import Modal from 'react-modal';
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      // backgroundColor: 'green',
      // opacity: '1'
    boxShadow: 'rgba(0, 0, 0, 0.96) 0px 30px 70px 70px',

      
    },
    
    
    overlay: {
      // opacity:' 0.55',
      // filter: 'blur(20px)',
      // fill: 'rgba(0,0,0,1)',
      // background: 'black'
      backgroundColor: 'none'
    }
  };

 
function Home() {
    let subtitle;
    const [modalIsOpen, setModalIsOpen]= useState(true)

    function afterOpenModal() {
         
        subtitle.style.color = '#f00';
      }
  return (
    <div style={{backgroundColor: modalIsOpen? 'black' :'', opacity: modalIsOpen? '0.55' :''}} className="home">
      <div className="homeLeft">
        <div id="Flama" class="Flama">
          <div className="flama_m" id="Flama_m">
            <span>Flama</span>
          </div>
        </div>

        <div>icons</div>
      </div>

      <div className="homeRight">
        <div className="bio" onClick={()=>setModalIsOpen(true)}>bio</div>
        <div className="bio"  >Gallery</div>
        <div className="bio">musica</div>
      </div>
    
       
       <Modal
         isOpen={modalIsOpen}
         onAfterOpen={afterOpenModal}
         onRequestClose={()=>setModalIsOpen(false)}
         style={customStyles}
         contentLabel="Example Modal"
         
       >
        
         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
         <button onClick={()=>setModalIsOpen(false)}>close</button>
         <div>I am a modal</div>
       
         
       </Modal>
     
    </div>
  );
}

export default Home;
