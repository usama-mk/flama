import React, { useState } from "react";
import "./Home.css";
import Modal from "react-modal";
import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";
import Gallery from "../../components/Gallery/Gallery";
import Bio from "../../components/Bio/Bio";

function Home() {
  let subtitle;
  const [galleryModalIsOpen, setGalleryModalIsOpen] = useState(false);
  const [bioModalIsOpen, setBioModalIsOpen] = useState(false);
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
      backgroundColor: galleryModalIsOpen
        ? "rgba(0, 0, 0, 0.55)"
        : bioModalIsOpen
        ? "black"
        : "",
    },

    overlay: {
      backgroundColor: "none",
    },
  };

  return (
    <div
      style={{
        backgroundColor: galleryModalIsOpen || bioModalIsOpen ? "black" : "",
        opacity: galleryModalIsOpen || bioModalIsOpen ? "0.55" : "",
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
        <div
          className="homeRightOption"
          onClick={() => setBioModalIsOpen(true)}
        >
          bio
        </div>
        <div
          className="homeRightOption"
          onClick={() => setGalleryModalIsOpen(true)}
        >
          Gallery
        </div>
        {/* <div className="homeRightOption">musica</div> */}
        {/* Musica component */}
        <div id="musica-menu-item" class="musica_menu_item">
          <div style={{ display: "flex" }} id="musica-menu-item_u">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
              }}
            >
              <svg
                style={{ margin: "10px", marginBottom: "1px" }}
                class="Line_Copy_5"
                viewBox="0.505 1.247 29.998 0.253"
              >
                <path
                  id="Line_Copy_5"
                  d="M 0.5045359134674072 1.247006297111511 L 30.50301170349121 1.5"
                ></path>
              </svg>
              <svg
                style={{ margin: "10px", paddingBottom: "6px" }}
                class="Line_Copy_6"
                viewBox="0 0.5 41.503 2"
              >
                <path
                  id="Line_Copy_6"
                  d="M 0 0.5 L 41.50301361083984 0.5"
                ></path>
              </svg>
            </div>

            <div id="Msica">
              <span>Música</span>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={galleryModalIsOpen}
        //  onAfterOpen={afterOpenModal}
        onRequestClose={() => setGalleryModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
        id="Modal"
      >
        <Gallery setGalleryModalIsOpen={setGalleryModalIsOpen} />
      </Modal>

      <Modal
        isOpen={bioModalIsOpen}
        //  onAfterOpen={afterOpenModal}
        onRequestClose={() => setBioModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
        id="Modal"
      >
        <Bio />
      </Modal>
    </div>
  );
}

export default Home;
