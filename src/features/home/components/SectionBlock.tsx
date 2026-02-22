import React, { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export type SectionBlockProps = Readonly<{
  title: string;
  iconClassName?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}>;

export function SectionBlock({ title, iconClassName, actions, children }: SectionBlockProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLSpanElement | null>(null);
  const resetInProgressRef = useRef(false);

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Only sync when not actively editing, so the caret doesn't jump.
    if (isEditing) return;
    if (titleRef.current) titleRef.current.textContent = title;
  }, [title, isEditing]);

  const shakeAndResetTitle = useCallback(() => {
    const el = titleRef.current;
    if (!el) return;
    if (resetInProgressRef.current) return;
    resetInProgressRef.current = true;

    gsap.to(el, {
      duration: 0.02,
      x: "random(-4,4)",
      y: "random(-2,2)",
      repeat: 9, // ~200ms total (10 * 0.02s)
      yoyo: true,
      ease: "none",
      onComplete: () => {
        el.textContent = title;
        gsap.set(el, { clearProps: "transform" });
        resetInProgressRef.current = false;
      }
    });
  }, [title]);

  useEffect(() => {
    if (!isEditing) return;

    const onPointerDown = (e: PointerEvent) => {
      const root = rootRef.current;
      if (!root) return;
      if (!root.contains(e.target as Node)) {
        titleRef.current?.blur();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isEditing]);

  return (
    <div ref={rootRef} className="new-section-div">
      <div className="floating-section-div" />
      <div className="section-content-div">
        <div className="section-title">
          <div className="sectionTitleLeft">
            {iconClassName ? <i className={iconClassName} /> : null}{" "}
            <span
              ref={titleRef}
              contentEditable
              suppressContentEditableWarning
              aria-label="Section title"
              role="textbox"
              aria-multiline="false"
              tabIndex={0}
              spellCheck={false}
              onFocus={() => setIsEditing(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  e.currentTarget.blur();
                }
              }}
              onBlur={() => {
                setIsEditing(false);
                shakeAndResetTitle();
              }}
              style={{
                display: "inline-block",
                minWidth: 1,
                outline: "none",
                background: "transparent",
                font: "inherit",
                color: "inherit",
                padding: 0,
                margin: 0
              }}
            >
              {title}
            </span>
          </div>
          {actions ? <div className="sectionTitleActions">{actions}</div> : null}
        </div>
        {children}
      </div>
    </div>
  );
}

