
import { Cpu, Zap, HardDrive, Layers, BrainCircuit, BarChart3, ShieldCheck, Microscope } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 font-sans">
      <section className="text-center mb-16 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 text-foreground shadow-lg rounded-2xl p-12 border border-primary/10">
        <h1 className="text-5xl font-extrabold mb-6 font-headline text-primary text-balance">🌟 Our Mission</h1>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed text-balance text-foreground/80">
          TokenCalc is dedicated to democratizing AI infrastructure knowledge. We bridge the gap between high-level transformer research and practical local deployment, providing the precision tools needed to architect efficient AI workloads.
        </p>
      </section>

      <section className="mb-16 bg-card shadow-md rounded-2xl p-10 border border-border">
        <h2 className="text-4xl font-bold mb-6 font-headline text-primary">🔬 Infrastructure Excellence</h2>
        <p className="text-lg leading-relaxed mb-6 text-foreground/80 text-balance">
          Effective AI deployment begins with meticulous memory planning. In the era of massive 70B+ parameter models, understanding the nuances of KV Cache bloat and quantization tradeoffs is no longer optional—it's mission-critical.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
           <div className="flex flex-col items-center p-4 text-center">
              <Cpu className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-bold">Hardware Precision</h3>
              <p className="text-sm text-muted-foreground">Rigorous mathematical modeling of model weight footprints.</p>
           </div>
           <div className="flex flex-col items-center p-4 text-center">
              <Zap className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-bold">Real-Time Logic</h3>
              <p className="text-sm text-muted-foreground">Instantaneous VRAM feedback for complex inference scenarios.</p>
           </div>
           <div className="flex flex-col items-center p-4 text-center">
              <ShieldCheck className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-bold">Data Sovereignty</h3>
              <p className="text-sm text-muted-foreground">Zero-knowledge local processing for all architecture data.</p>
           </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-primary/5 shadow-sm rounded-2xl p-8 border-l-4 border-primary">
          <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2">
            <Microscope className="h-6 w-6" />
            Memory Research
          </h3>
          <p className="text-foreground/80 leading-relaxed text-balance">
            Deep-dive technical resources on transformer memory dynamics, including the impact of GQA and context scaling.
          </p>
        </div>

        <div className="bg-primary/5 shadow-sm rounded-2xl p-8 border-l-4 border-primary">
          <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2">
            <Layers className="h-6 w-6" />
            Quantization Audits
          </h3>
          <p className="text-foreground/80 leading-relaxed text-balance">
            Methodologies for balancing model perplexity with available VRAM using INT4, INT8, and NF4 precision.
          </p>
        </div>

        <div className="bg-primary/5 shadow-sm rounded-2xl p-8 border-l-4 border-primary">
          <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2">
            <BarChart3 className="h-6 w-6" />
            Compute Prioritization
          </h3>
          <p className="text-foreground/80 leading-relaxed text-balance">
            Technical guides for scaling AI infrastructure within high-growth software sectors and tech clusters.
          </p>
        </div>

        <div className="bg-primary/5 shadow-sm rounded-2xl p-8 border-l-4 border-primary">
          <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2">
            <BrainCircuit className="h-6 w-6" />
            Future-Proofing
          </h3>
          <p className="text-foreground/80 leading-relaxed text-balance">
            Strategic analysis of upcoming hardware architectures and their support for next-generation LLM inference engines.
          </p>
        </div>
      </section>

      <section className="text-center mt-16 bg-muted p-12 rounded-2xl">
        <h2 className="text-4xl font-bold mb-6 font-headline text-primary">Why Choose TokenCalc?</h2>
        <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-4 text-foreground/80 text-balance">
          We bridge the gap between high-level paper specifications and physical hardware reality. TokenCalc is engineered for accuracy, speed, and professional-grade infrastructure planning.
        </p>
      </section>
    </main>
  );
}
