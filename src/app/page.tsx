
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Cpu, Zap, ArrowRight, BrainCircuit, BarChart3, Lock, ShieldCheck, Layers } from "lucide-react";
import Link from "next/link";
import { AdPlaceholder } from "@/components/ad-placeholder";
import { LlmVramEstimator } from "@/components/llm-vram-estimator";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-20 lg:py-28 text-center bg-gradient-to-br from-primary/10 via-background to-background rounded-xl shadow-lg mb-12 border border-primary/5">
        <div className="container px-4 md:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
            <BrainCircuit className="h-3 w-3" />
            LLM DEPLOYMENT ARCHITECT
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary mb-6 text-balance">
            TokenCalc: LLM VRAM & Memory Estimator
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80 md:text-xl lg:text-2xl mb-8 text-balance">
            Optimize your AI infrastructure. Calculate precise GPU memory requirements for model weights and KV Cache across any quantization level.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#estimator" passHref>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
                Start Estimation
                <Zap className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/articles" passHref>
              <Button size="lg" variant="outline" className="shadow-md transition-transform hover:scale-105">
                VRAM Knowledge Base
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto px-4 mb-12">
        <div id="slot-lead-billboard" className="min-h-[90px] w-full flex justify-center items-center">
          <AdPlaceholder variant="leaderboard" label="High Performance AI Compute" />
        </div>
      </div>

      <section id="estimator" className="w-full py-12 scroll-mt-20">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold font-headline text-primary mb-4">Precision Memory Matrix</h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">Adjust the parameters below to visualize the memory footprint of your specific LLM configuration.</p>
        </div>
        <LlmVramEstimator />
      </section>

      <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30 rounded-3xl my-12 border border-border/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl font-headline text-primary mb-12">
            Enterprise AI Planning
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-primary">
              <CardHeader className="items-center text-center">
                <Layers className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl font-headline">KV Cache Logic</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <p className="text-foreground/70 text-balance">
                  Accurately model context window scaling. Understand how context length and batch size impact VRAM consumption in real-world inference.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-primary">
              <CardHeader className="items-center text-center">
                <BarChart3 className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl font-headline">Quantization Ops</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <p className="text-foreground/70 text-balance">
                  Compare INT4, INT8, and FP16 memory profiles to find the optimal balance between model intelligence and hardware constraints.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-primary">
              <CardHeader className="items-center text-center">
                <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl font-headline">Local Privacy</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <p className="text-foreground/70 text-balance">
                  Plan your sensitive infrastructure deployments securely. TokenCalc runs entirely in your browser—no architecture data is ever uploaded.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6 text-left">
              <h2 className="text-3xl font-bold font-headline text-primary">Optimize AI Infrastructure</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Modern LLMs like Llama 3 and Mistral require meticulous memory planning. TokenCalc provides the granular insights needed to avoid OOM errors and maximize hardware utilization.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Cpu className="h-6 w-6 text-primary shrink-0" />
                  <span>Support for Grouped-Query Attention (GQA) architectures.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-primary shrink-0" />
                  <span>Hardware recommendations for consumer and enterprise GPUs.</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full flex justify-center">
               <AdPlaceholder variant="inline" label="Cloud GPU Instances" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
