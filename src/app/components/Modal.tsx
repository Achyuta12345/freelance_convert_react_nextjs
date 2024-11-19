import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  close: () => void;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  presenceKey?: string; 
}


export const Modal: React.FC<ModalProps> = ({ isOpen, close, children, className, ariaLabel }) => {
  // Always call the hook, regardless of isOpen state
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", handleEsc);

    // Cleanup the event listener when the component is unmounted or isOpen changes
    return () => document.removeEventListener("keydown", handleEsc);
  }, [close]);

  // If modal is not open, do not render anything
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${className}`}>
      <div className="modal-overlay absolute inset-0 bg-black opacity-50" onClick={close} />
      <div className="modal-content relative z-10" role="dialog" aria-label={ariaLabel}>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};
