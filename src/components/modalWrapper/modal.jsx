import "./modal.css";
const ModalWrapper = ({children, onClose  }) => {
  return (
    <>
      <div onClick={onClose} className="modal-overlay"> </div>
      <div className="modal-content"> {children} </div>
  
    </>
  )
}


export default ModalWrapper;
