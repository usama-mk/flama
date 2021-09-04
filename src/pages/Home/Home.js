import React, { useState } from "react";
import "./Home.css";
import Modal from "react-modal";
import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";
import Gallery from "../../components/Gallery/Gallery";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    // backgroundColor: 'green',
    boxShadow: "rgba(0, 0, 0, 0.96) 0px 30px 70px 70px",
    border: "none",
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },

  overlay: {
    backgroundColor: "none",
  },
};

function Home() {
  let subtitle;
  const [modalIsOpen, setModalIsOpen] = useState(true);

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }
  return (
    <div
      style={{
        backgroundColor: modalIsOpen ? "black" : "",
        opacity: modalIsOpen ? "0.55" : "",
      }}
      className="home"
    >
      <div className="homeLeft">
        <div id="Flama" class="Flama">
          <div className="flama_m" id="Flama_m">
            <span>Flama</span>
          </div>
        </div>

        <div>icons</div>
      </div>

      <div className="homeRight">
        <div className="bio" onClick={() => setModalIsOpen(true)}>
          bio
        </div>
        <div className="bio">Gallery</div>
        <div className="bio">musica</div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        //  onAfterOpen={afterOpenModal}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
        id="Modal"
      >
        <Gallery setModalIsOpen={setModalIsOpen} />
      </Modal>
    </div>
  );
}

export default Home;
