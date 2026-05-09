import { MotionReveal } from "../ui/MotionReveal.jsx";

export function EditorialSection({ eyebrow, title, children }) {
  return (
    <MotionReveal className="editorial-section">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <div>{children}</div>
    </MotionReveal>
  );
}
