import {createPortal} from "react-dom";
import {useEffect} from "react";
import PropTypes from "prop-types";

import {ModalOverlay, ModalContainer, Img} from './Modal.styled';


const modalRoot = document.getElementById("modal-root");


 function Modal({selectedImage, tags, onClose}) {

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);


  })


  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  }
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }


  return createPortal(<ModalOverlay onClick={handleBackdropClick}>
    <ModalContainer>
      <Img src={selectedImage} alt={tags}/>
    </ModalContainer>
  </ModalOverlay>, modalRoot);

}

export default Modal


Modal.propTypes = {
  selectedImage: PropTypes.string, tags: PropTypes.string, onClose: PropTypes.func,
}
