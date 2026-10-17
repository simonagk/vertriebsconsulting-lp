import { channelCard } from "@/content";

type Status = (typeof channelCard.rows)[number]["status"];

// Statusmarken: Schwarz, Weiß und Blau, über Füllung und Rahmen unterscheidbar
const badgeStyles: Record<Status, string> = {
  expand: "border-[#1C60E2] bg-[#1C60E2] text-white",
  new: "border-[#1C60E2]/40 bg-[#EEF3FD] text-[#1A55C8]",
  reduce: "border-[#D4D4D8] bg-white text-[#37352F]",
  drop: "border-[#191919] bg-[#191919] text-white",
};

export default function ChannelCard() {
  return (
    <figure className="w-full">
      <div
        className="overflow-hidden rounded-lg border border-[#E5E7EB] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]"
        aria-labelledby="kanalbewertung-titel"
        role="group"
      >
        <div className="flex items-center gap-2 border-b border-[#E5E7EB] px-5 py-3.5">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#787774]" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
            <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" strokeLinejoin="round" />
            <path d="M14 3v5h5" strokeLinejoin="round" />
          </svg>
          <p id="kanalbewertung-titel" className="text-sm font-semibold text-[#191919]">
            {channelCard.title}
          </p>
        </div>

        <ul className="divide-y divide-[#E5E7EB]">
          {channelCard.rows.map((r) => (
            <li key={r.channel} className="px-5 py-4">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <p className="pt-0.5 text-[15px] font-semibold leading-snug text-[#191919]">{r.channel}</p>
                <span
                  className={`inline-flex shrink-0 items-center rounded-md border px-2 py-0.5 text-sm font-medium ${badgeStyles[r.status]}`}
                >
                  {channelCard.statusLabels[r.status]}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-[#4B4F58]">{r.reason}</p>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-3 text-sm text-[#5F6168]">{channelCard.note}</figcaption>
    </figure>
  );
}
