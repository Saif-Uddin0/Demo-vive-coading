"use client";

import { useState } from "react";

// ── AgentMessageSetup ──────────────────────────────────────────────────────────
export function AgentMessageSetup() {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border flex flex-col h-full">
      <h2 className="text-xl font-semibold mb-6">Agent Message Setup</h2>

      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground">First Message</label>
          <textarea
            className="w-full h-32 bg-[#121212] border border-border rounded-xl p-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
            placeholder="Type message"
            defaultValue=""
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground">Closing Message</label>
          <textarea
            className="w-full h-32 bg-[#121212] border border-border rounded-xl p-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
            placeholder="Type message"
            defaultValue=""
          />
        </div>
      </div>

      <div className="mt-8">
        <button className="w-full bg-primary hover:bg-[#22C55E]/90 text-black font-semibold py-3.5 rounded-xl transition-colors">
          Save Message
        </button>
      </div>
    </div>
  );
}

// ── ToneAndPersonality ─────────────────────────────────────────────────────────
const styles = [
  { id: "friendly",     title: "Friendly & Warm",    description: "Conversational and welcoming" },
  { id: "professional", title: "Professional",        description: "Formal and business-like" },
  { id: "sales",        title: "Sales-Oriented",      description: "Persuasive and promotional" },
];

export function ToneAndPersonality() {
  const [selectedStyle, setSelectedStyle] = useState("friendly");

  return (
    <div className="bg-card rounded-2xl p-6 border border-border flex flex-col h-full">
      <h2 className="text-xl font-semibold mb-6">Tone & Personality</h2>

      <div className="flex-1">
        <h3 className="text-sm font-medium text-foreground mb-4">Communication Style</h3>

        <div className="flex flex-col gap-3">
          {styles.map((style) => (
            <label
              key={style.id}
              className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                selectedStyle === style.id
                  ? "border-primary bg-primary/5"
                  : "border-border bg-[#121212] hover:border-muted-foreground/50"
              }`}
            >
              <div>
                <p className="font-medium text-foreground">{style.title}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{style.description}</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedStyle === style.id ? "border-primary" : "border-muted-foreground"
              }`}>
                {selectedStyle === style.id && (
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                )}
              </div>
              <input
                type="radio"
                name="communication_style"
                value={style.id}
                checked={selectedStyle === style.id}
                onChange={() => setSelectedStyle(style.id)}
                className="hidden"
              />
            </label>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <button className="w-full bg-primary hover:bg-[#22C55E]/90 text-black font-semibold py-3.5 rounded-xl transition-colors">
          Save Scripts
        </button>
      </div>
    </div>
  );
}
