import React from "react";
import ReactDOM from "react-dom";

import "./model.css";

export type ModelProps = Readonly<{
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}>;

export function Model({ open, title, children, onClose }: ModelProps) {
  React.useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="ModelRoot">
      <button
        type="button"
        className="ModelBackdrop"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <dialog
        className="ModelDialog"
        open
        aria-label={title}
        onCancel={(e) => {
          e.preventDefault();
          onClose();
        }}
      >
        <div className="ModelHeader">
          <div className="ModelTitle">{title}</div>
          <button className="ModelClose" type="button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="ModelBody">{children}</div>
      </dialog>
    </div>,
    document.body
  );
}

