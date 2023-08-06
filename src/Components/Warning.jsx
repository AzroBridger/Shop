import React, { useState } from 'react'
import './styles/Warning.css'



const Warning = () => {
    const [modalOpen, setModalOpen] = useState(true);

    
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    const confirmAction = () => {
        
        closeModal();
    };
  
    return (
      <div>
        
  
        {modalOpen && (
          <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Подтверждение</h2>
            <p>Вы уверены, что хотите продолжить?</p>
            <div className="button-container">
              <button onClick={confirmAction}>Да</button>
              <button onClick={closeModal}>Нет</button>
            </div>
          </div>
        </div>
        )}
      </div>
    )
}

export default Warning
