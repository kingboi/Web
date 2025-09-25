import { NextResponse } from "next/server";

export async function GET() {
  // Mock data; replace with DB or source ingestion later.
  const stories = [
    {
      id: 1,
      title: "Local council quietly approves zoning change",
      abstract: "A zoning change passed with little media coverage, affecting mixed-use development near transit corridors.",
      credibility_score: 85,
      coverage_count: 1,
      published_at: new Date().toISOString(),
    },
    {
      id: 2,
      title: "New environmental study released",
      abstract: "A peer-reviewed study highlights overlooked pollution risks in smaller communities downstream of industrial sites.",
      credibility_score: 90,
      coverage_count: 2,
      published_at: new Date().toISOString(),
    },
    {
      id: 3,
      title: "Regulator posts enforcement notice",
      abstract: "A federal regulator issued a notice of violation with fines against mid-sized providers for consumer protection failures.",
      credibility_score: 78,
      coverage_count: 1,
      published_at: new Date().toISOString(),
    }
  ];
  return NextResponse.json(stories);
}
