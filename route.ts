import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

type Lead = {
  name: string;
  company?: string;
  phone: string;
  email?: string;
  requirement?: string;
  message?: string;
  createdAt: string;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and mobile number are required." }, { status: 400 });
    }

    const lead: Lead = {
      name,
      company: String(body.company ?? "").trim(),
      phone,
      email: String(body.email ?? "").trim(),
      requirement: String(body.requirement ?? "").trim(),
      message: String(body.message ?? "").trim(),
      createdAt: new Date().toISOString(),
    };

    // Local JSON persistence for a simple self-hosted deployment.
    // For Vercel/serverless, connect this endpoint to a database or CRM instead.
    const dataDir = path.join(process.cwd(), "data");
    await fs.mkdir(dataDir, { recursive: true });
    const file = path.join(dataDir, "leads.json");
    let leads: Lead[] = [];
    try { leads = JSON.parse(await fs.readFile(file, "utf8")); } catch {}
    leads.push(lead);
    await fs.writeFile(file, JSON.stringify(leads, null, 2), "utf8");

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}