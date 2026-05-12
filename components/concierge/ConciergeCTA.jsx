import { LuxuryButton } from "../ui/LuxuryButton.jsx";

export function ConciergeCTA({ title = "Request Private Advisory", body, href = "https://wa.me/19548420980" }) {
  return (
    <section className="concierge-cta-shell">
      <div>
        <span>Private Concierge</span>
        <h2>{title}</h2>
        {body && <p>{body}</p>}
      </div>
      <LuxuryButton href={href}>Request Private Showing</LuxuryButton>
    </section>
  );
}
