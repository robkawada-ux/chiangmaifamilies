# Chiang Mai Families

Next.js/TypeScript site for chiangmaifamilies.com, the Chiang Mai sister site of
BKK Families (bkkfamilies.com) and Phuket Families (phuketfamilies.com). Started
as a copy of the phuketfamilies codebase, itself a copy of bkkfamilies.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- No database: content lives in `src/lib/schools.ts` and `src/lib/articles.ts`

## Commands
- `npm run dev` for local development
- `npm run build` to check a production build
- `bash scripts/linkcheck.sh` to check school website links

See CLAUDE.md for project context and decisions.
