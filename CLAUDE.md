# chiangmaifamilies.com: Project Context

## Overview
Chiang Mai Families is the Chiang Mai sister site of BKK Families (bkkfamilies.com) and Phuket Families (phuketfamilies.com). It was started on 4 Nov 2026 as a copy of the phuketfamilies codebase (which is itself a copy of bkkfamilies) in its own repo, with the Phuket data stripped out and the brand swapped to a northern palette. No Facebook group; the site leans on BKK Families and the Bangkok Expat Families group for reach.

## Repo & local setup
- GitHub repo: `robkawada-ux/chiangmaifamilies` (public)
- Suggested local path: `/Users/robertkawada/Projects/chiangmaifamilies` (on Roberts-iMac-2), cloned from GitHub. Bangkok is `~/Projects/bkkfamilies`, Phuket `~/Projects/phuketfamilies`.
- Same GitHub-to-Vercel workflow as the other two sites. Rob runs commands one at a time in Terminal.

## Domain & deployment
- Domain chiangmaifamilies.com bought Nov 2026 (Namecheap). Canonical host is `www.chiangmaifamilies.com`, set once in `SITE` in `src/lib/seo.ts`.
- Live since 4 Nov 2026. One Vercel project, "chiangmaifamilies", holds www.chiangmaifamilies.com (production) and chiangmaifamilies.com (308 to www), plus chiangmaifamilies.vercel.app.
- Namecheap Advanced DNS: A @ 216.198.79.1 and CNAME www 0c595bc1cab50a52.vercel-dns-017.com. (Vercel's project-specific values).
- Google Search Console: Domain property for chiangmaifamilies.com, verified by a DNS TXT record in Namecheap (4 Nov 2026), so no verification meta tag in `layout.tsx`. Sitemap submitted and read successfully.
- TODO: GA4 property (put the ID in `GA_MEASUREMENT_ID`, currently empty so no tag loads).
- Email: Namecheap Mail Settings set to Email Forwarding, forwarder info@chiangmaifamilies.com to robkawada@gmail.com (4 Nov 2026, tested working). `CONTACT_EMAIL` is info@chiangmaifamilies.com.

## Brand
- Name Chiang Mai Families, tagline "YOUR CHIANG MAI ROADMAP" (always caps and bold), same layout and cartoon road theme as BKK Families.
- Palette in `tailwind.config.ts`. Token NAMES are inherited (purple, orange...), only values changed: purple = mountain green #2F6B4F, purple-dark = teak brown #2E2420, orange = Lanna terracotta #C8553D, teal = hill blue #3F8297, green = rice green #8DC63F, sand = rice paper #F5EEE1.
- Logo: the four-dot mark, terracotta top, misty blue #6FB3C8 right, mountain green bottom, rice green left. Keep `Logo.tsx`, `src/app/icon.svg`, `favicon.ico` and `apple-icon.png` in sync.
- Homepage hero has cartoon hills (`Mountains` in `Road.tsx`) under the stat-card roads.
- Nav has "Bangkok" and "Phuket" links to the sister sites; the footer cross-links both.

## Share images (Facebook previews), required on every page
- Every page must emit an og:image. `og()` in `src/lib/seo.ts` attaches the nearest section card (`SECTION_CARDS`: /schools, /activities, /blog), falling back to the homepage card.
- Cards are 1200x630, mountain green with hills and a road up to a chedi. Regenerate them (and the app icons) with `python3 scripts/og/make_cards.py`. Articles without a hero image use `public/images/og/blog-default.png`.

## Site architecture
- Live sections: home, /schools (directory + detail pages), /activities (directory + detail pages), /blog (titled "Guides"; first article "Yi Peng and Loy Krathong 2026 in Chiang Mai with Kids" published 4 Nov 2026, hero photo supplied by Rob at public/images/articles/yi-peng-loy-krathong-chiang-mai-with-kids/; refresh the same URL each November), /contact (incl. #advertise).
- Camps (added 5 Nov 2026): /camps directory and /camps/[slug] pages, ported from phuketfamilies (`src/lib/camps.ts`, `CampsDirectory.tsx`, `featured.ts`). 11 operators, 19 camp weeks, researched 5 Nov 2026. Camp seasons are `BREAK_WINDOWS` in `schoolBreaks.ts` (winter-2026, other-2027 for Jan to Feb term-time camps, spring-2027, songkran-2027, summer-2027), with Prem, Grace and APIS break dates in their summaries. Some facts come from public listings rather than the operator's page; `worthKnowing` says so. Left out: Able to Share camps (include an elephant sanctuary visit), Progression climbing camps (last dates found were Dec 2024), 50FLY (no ages, conflicting location). Guide: /blog/christmas-holiday-camps-chiang-mai-2026, with its own share card in `public/images/og/blog/`.
- Not built yet for Chiang Mai: healthcare, playgroups, learning support, school breaks page. `schoolBreaks.ts` and `schoolFees.ts` are kept with empty data because the school pages use their types and helpers.
- Articles are TypeScript objects in `src/lib/articles.ts`. Body paragraphs support `[label](/path)` links and `**bold**`. Byline renders as "by Chiang Mai Families".
- No legacy redirects (new domain). The bkkfamilies redirect map was removed from `next.config.mjs`.

## Schools directory
- 17 live schools in `src/lib/schools.ts`, researched 4 Nov 2026. Sources, addresses, one-time fees and open questions are in the claude.ai project doc `claude/chiangmai-schools.md`.
- Four areas: city (inside the Superhighway ring), north (Mae Rim, San Phi Suea), southwest (Hang Dong, Mae Hia, Canal Road), southeast (Saraphi, Lampang Superhighway). No school was found to the east. `SchoolAreaMap.tsx` is a simplified city map with Doi Suthep, the Ping River, the old city and the airport.
- `feeRange` holds the published range, 2026/27 unless the string carries an older year in brackets, e.g. "(2025/26)"; "(one source)" marks a single-guide figure. The page and meta description read both. Budget tags use the middle of the range (under/over 400k, same line as the other sites).
- Mill Hill International School Thailand is in the file with `pending: true` (hidden) until its campus location, website and fees are confirmed.
- Verified fees (4 Nov 2026), per year group in `schoolFees.ts`, each read from the school's own page or PDF: Prem and Meritton (from Rob's screenshots of their PDFs), Lanna, Panyaden, SISB, APIS, NIS, CMIS (2025/26, the latest it publishes), SBS, UCIS, Grace, BCIS, CDSC. Windfield is in `feesOnEnquiry` (the Chiang Mai campus publishes no fees; the group's schedule is Koh Samui's). Left out on purpose: APIS's semester-two-only Pre-N row (in the note). CDSC confirmed its French Intensive rate (452,000), sibling discounts, admission fee credit and DaZ lessons by email on 5 Nov 2026 (Jasmin Hennecke, Marketing Manager, marketing@cdsc.ac.th), sent its own introduction (now the page description) and campus photos (main building used as the page photo).
- Still on database ranges (`feeRange`, labelled on the page): Varee and Chiang Mai Montessori (sites would not load). ACIS shows its own 2026/27 PDF's min to max only, because the PDF does not say which figure is which grade band. Varee and Chiang Mai Montessori websites still need checking in a browser.
- Later: a bilingual schools section (Wichai Wittaya, Ambassador Bilingual School and Academy), Thai EP programmes, nurseries.

## Activities directory (added 4 Nov 2026)
- 27 listings in `src/lib/activities.ts` (16 days out, 11 weekly classes), same model and honesty rules as phuketfamilies: `status` "confirmed" only when read on the operator's own page (11 are), everything else "check" with its source. Prices omitted when not published or when sources disagree (Grand Canyon, Pongyang, Doi Suthep foreigner fee, Arts and Cultural Centre).
- Zones are Chiang Mai specific, incl. "Superhighway and Central Festival" and "Location to confirm" (the three kids' Muay Thai classes, which come from a booking site with no addresses). Category "Swimming, riding and sport" also holds horse riding and basketball.
- No elephant camps or sanctuaries, no tiger attractions. Never link flightofthegibbon.com or chiangmainightsafari.com (both now show gambling content; the Night Safari site was found hijacked on 4 Nov 2026, so its listing has no website or source link).
- Research notes, gaps and ideas: claude.ai project doc `claude/chiangmai-activities.md`.

## Tools
- `scripts/linkcheck.sh` checks external school website URLs (use parallelism 4).
- `scripts/og/make_cards.py` renders share cards and icons.
