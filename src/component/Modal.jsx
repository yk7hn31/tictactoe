function Modal({ children, onRematch }) {
  return (
    <div className="modal">
      <div className="msg">{children}</div>
      <button onClick={onRematch}>Rematch</button>
    </div>
  );
}

export default Modal;