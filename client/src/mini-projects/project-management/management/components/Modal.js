import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(({ children, buttonCaption, onClose }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
    close() {
      dialog.current.close();
    },
  }));

  const handleClose = () => {
    onClose(); // Call the onClose function passed as prop
  };

  return createPortal(
    <dialog
      ref={dialog}
      className="shadow-md rounded-md p-4 text-center flex flex-col gap-2 border-2 justify-center items-center mt-80"
    >
      {children}
      <form method="dialog">
        <Button onClick={handleClose}>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
