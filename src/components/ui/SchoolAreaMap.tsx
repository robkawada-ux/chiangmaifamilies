"use client";

import { useState } from "react";
import { AREAS, type Area } from "@/lib/schools";

// A simplified, not-to-scale map of Chiang Mai split into the four directory
// areas. The shapes only need to put each area on the right side of the city
// relative to the others; the landmarks do the real work of telling a parent
// which area they live in. Doi Suthep, the Ping River, the old city moat and
// the airport are drawn on top as orientation only.
const REGIONS: {
  id: Area;
  short: string;
  points: string;
  label: [number, number];
  landmarks: string[];
}[] = [
  {
    id: "north",
    short: "North",
    points: "30,20 370,20 370,150 265,160 140,160 30,150",
    label: [200, 88],
    landmarks: ["Mae Rim town", "Mae Sa valley", "Queen Sirikit Botanic Garden", "Maejo University", "San Phi Suea"],
  },
  {
    id: "city",
    short: "City",
    points: "140,160 265,160 300,205 292,292 200,305 112,292 104,212",
    label: [266, 236],
    landmarks: ["The Old City and the moat", "Nimman and Maya", "Central Festival", "Warorot Market", "Chiang Mai Airport"],
  },
  {
    id: "southwest",
    short: "Southwest",
    points: "30,150 140,160 104,212 112,292 200,305 200,440 30,440",
    label: [110, 372],
    landmarks: ["Canal Road", "Mae Hia", "Royal Park Rajapruek", "Night Safari", "Hang Dong town"],
  },
  {
    id: "southeast",
    short: "Southeast",
    points: "265,160 370,150 370,440 200,440 200,305 292,292 300,205",
    label: [290, 372],
    landmarks: ["Lampang Superhighway", "Promenada mall", "Wiang Kum Kam", "Saraphi town", "Nong Phueng"],
  },
];

export default function SchoolAreaMap({
  selected,
  counts,
  onSelect,
}: {
  selected: "All" | Area;
  counts: Record<Area, number>;
  onSelect: (area: "All" | Area) => void;
}) {
  const [hover, setHover] = useState<Area | null>(null);
  const focus = hover ?? (selected === "All" ? null : selected);
  const info = focus ? AREAS.find((a) => a.id === focus) : null;
  const region = focus ? REGIONS.find((r) => r.id === focus) : null;

  return (
    <div className="grid gap-5 md:grid-cols-[3fr_2fr]">
      <div>
        <svg
          viewBox="0 0 400 460"
          className="mx-auto h-auto w-full max-w-sm select-none"
          role="group"
          aria-label="Map of Chiang Mai divided into four school areas"
        >
          <rect x={0} y={0} width={400} height={460} rx={16} fill="#EDF6F9" />
          {REGIONS.map((r) => {
            const isSelected = selected === r.id;
            const isHover = hover === r.id;
            return (
              <polygon
                key={r.id}
                points={r.points}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                aria-label={`${AREAS.find((a) => a.id === r.id)?.label}, ${counts[r.id]} schools`}
                onClick={() => onSelect(isSelected ? "All" : r.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect(isSelected ? "All" : r.id);
                  }
                }}
                onMouseEnter={() => setHover(r.id)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(r.id)}
                onBlur={() => setHover(null)}
                className="cursor-pointer outline-none transition-colors"
                style={{
                  fill: isSelected ? "#2F6B4F" : isHover ? "#FBEDE9" : "#F5EEE1",
                  stroke: isHover && !isSelected ? "#C8553D" : "#FFFFFF",
                  strokeWidth: 3,
                  strokeLinejoin: "round",
                }}
              />
            );
          })}
          {/* Orientation: Ping River, Doi Suthep, the old city moat, the airport */}
          <g pointerEvents="none">
            <path d="M 236 20 C 240 90, 222 130, 232 165 S 214 250, 206 300 S 196 390, 204 440" fill="none" stroke="#6FB3C8" strokeWidth={5} strokeLinecap="round" opacity={0.8} />
            <text x={244} y={140} fontSize={10} fill="#3d7f93" stroke="#FFFFFF" strokeWidth={3} paintOrder="stroke">Ping River</text>
            <path d="M 34 206 L 58 176 L 72 190 L 86 168 L 108 204 Z" fill="#8DB89A" stroke="#2F6B4F" strokeWidth={1.5} strokeLinejoin="round" />
            <text x={36} y={222} fontSize={10} fontWeight={600} fill="#2F6B4F" stroke="#FFFFFF" strokeWidth={3} paintOrder="stroke">Doi Suthep</text>
            <rect x={148} y={196} width={30} height={30} fill="none" stroke="#C8553D" strokeWidth={2.5} rx={2} />
            <text x={163} y={242} fontSize={9} textAnchor="middle" fill="#7a3324" stroke="#FFFFFF" strokeWidth={3} paintOrder="stroke">Old City</text>
            <circle cx={150} cy={274} r={5} fill="#FFFFFF" stroke="#2E2420" strokeWidth={2} />
            <text x={160} y={278} fontSize={10} fontWeight={600} fill="#333333" stroke="#FFFFFF" strokeWidth={3} paintOrder="stroke">Airport</text>
          </g>
          {REGIONS.map((r) => {
            const isSelected = selected === r.id;
            return (
              <g key={r.id} pointerEvents="none" textAnchor="middle">
                <text
                  x={r.label[0]}
                  y={r.label[1]}
                  fontSize={14}
                  fontWeight={700}
                  fill={isSelected ? "#FFFFFF" : "#2E2420"}
                >
                  {r.short}
                </text>
                <text
                  x={r.label[0]}
                  y={r.label[1] + 16}
                  fontSize={11}
                  fill={isSelected ? "#FFFFFF" : "#555555"}
                >
                  {counts[r.id]} {counts[r.id] === 1 ? "school" : "schools"}
                </text>
              </g>
            );
          })}
        </svg>
        <p className="mt-1 text-center text-xs text-neutral-400">Simplified map, not to scale.</p>
      </div>

      <div className="rounded-xl border border-black/5 bg-neutral-50 p-5 text-sm">
        {info && region ? (
          <>
            <h3 className="font-heading text-lg font-bold text-purple-dark">{info.label}</h3>
            <p className="mt-1 text-neutral-600">{info.covers}</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-wide text-neutral-500">
              Landmarks
            </p>
            <ul className="mt-1.5 space-y-1 text-neutral-700">
              {region.landmarks.map((l) => (
                <li key={l}>📍 {l}</li>
              ))}
            </ul>
            <p className="mt-4 font-semibold text-purple-dark">
              {counts[info.id]} {counts[info.id] === 1 ? "school" : "schools"}
            </p>
            {selected === info.id ? (
              <button
                type="button"
                onClick={() => onSelect("All")}
                className="mt-3 text-sm font-semibold text-teal hover:underline"
              >
                Show all areas
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onSelect(info.id)}
                className="mt-3 rounded-full bg-orange px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
              >
                Show schools here
              </button>
            )}
          </>
        ) : (
          <>
            <h3 className="font-heading text-lg font-bold text-purple-dark">Pick your side of the city</h3>
            <p className="mt-2 text-neutral-600">
              Tap an area on the map to see the schools there. Hover over or tap an area to see its
              landmarks, so you can tell which one you live in. Most international schools are
              outside the old city, in Hang Dong to the southwest or along the Lampang Superhighway
              to the southeast, and the school run is mostly by car or school bus.
            </p>
            <p className="mt-3 text-neutral-600">Tap the selected area again to clear it.</p>
          </>
        )}
      </div>
    </div>
  );
}
