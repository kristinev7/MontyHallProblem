export default function Modal ({show, onClose, title, children}) {
  return (
    <>
      <div className={`modal ${show ? 'show': ''}`} tabIndex="-1" style={{display: show ? 'block' : 'none'}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>  
            </div>
            <div className="modal-body">
                {children}
            </div>
          </div>
        </div>
      </div>
      {show && <div className="modal-backdrop fade show"></div>}
    </>
  );
}