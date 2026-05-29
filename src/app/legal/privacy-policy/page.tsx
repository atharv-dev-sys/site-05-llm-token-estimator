
"use client";

import React from "react";
import { ShieldCheck, EyeOff, Terminal, Zap } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <header className="text-center mb-12">
        <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Privacy & Simulation Safety Policy
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto text-balance">
          Data sovereignty and local processing at TokenCalc
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8 bg-card p-6 sm:p-8 rounded-xl shadow-lg text-foreground/80">
        <section>
          <div className="flex items-center gap-2 mb-3 text-primary">
            <Terminal className="h-6 w-6" />
            <h2 className="text-2xl font-semibold text-foreground">1. No Prompt Harvesting</h2>
          </div>
          <p className="leading-relaxed text-balance">
            TokenCalc is built on a "Local-First" architecture. We do not harvest, store, or transmit your AI prompt data, proprietary model weights, or infrastructure metadata. All VRAM and token estimations are calculated entirely within your browser's local memory.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3 text-primary">
            <EyeOff className="h-6 w-6" />
            <h2 className="text-2xl font-semibold text-foreground">2. Zero Weight Storage</h2>
          </div>
          <p className="leading-relaxed text-balance">
            We do not host or store any proprietary model files. The "Model Size" inputs are purely numeric values used to trigger our VRAM estimation formula. Your specific AI development roadmap remains confidential.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3 text-primary">
            <Zap className="h-6 w-6" />
            <h2 className="text-2xl font-semibold text-foreground">3. Browser Isolation</h2>
          </div>
          <p className="leading-relaxed text-balance">
            Our tool uses standard browser APIs to provide a real-time interactive experience. We do not use persistent cookies to track your modeling behavior. Any session data (e.g., your selected model size) is cleared when you close the tab.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">4. Security Compliance</h2>
          <p className="leading-relaxed text-balance">
            TokenCalc is designed for professional enterprise AI planners who require a high degree of privacy for their compute infrastructure audits. We comply with all standard web privacy regulations by simply not collecting your data in the first place.
          </p>
        </section>

        <p className="text-center font-semibold text-foreground/90 pt-4 border-t border-foreground/20">
          Last updated: May 28, 2026
        </p>
      </div>
    </div>
  );
}
