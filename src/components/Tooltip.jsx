import { cloneElement, useId, useState } from "react";

export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId();

  const child = cloneElement(children, {
    "aria-describedby" : visible ? tooltipId : undefined
  })

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}

      {visible && (
        <div
          className="tooltip"
          id={tooltipId}
          role="tooltip"
        >
          {text}
        </div>
      )}
    </div>
  );
}
