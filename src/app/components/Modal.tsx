import React, { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  close: () => void;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  closeOnOverlayClick?: boolean; 
  presenceKey: string;// Optional prop to control overlay click behavior
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  close,
  children,
  className = "",
  ariaLabel = "Modal",
  closeOnOverlayClick = true,
}) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let modalRoot = document.getElementById("modal-root");
    if (!modalRoot) {
      modalRoot = document.createElement("div");
      modalRoot.id = "modal-root";
      document.body.appendChild(modalRoot);
    }
    setPortalElement(modalRoot);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, close]);

  if (!isOpen || !portalElement) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${className}`}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
    >
      {/* Overlay */}
      <div
        className="modal-overlay absolute inset-0 bg-black opacity-50"
        aria-hidden="true"
        onClick={closeOnOverlayClick ? close : undefined}
      />
      {/* Modal Content */}
      <div className="modal-content relative z-10">
        {children}
      </div>
    </div>,
    portalElement
  );
};
