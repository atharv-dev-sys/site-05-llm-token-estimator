
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AdPlaceholder } from "@/components/ad-placeholder";
import Link from "next/link";
import { BookOpen, ShieldCheck, Cpu, Database, Zap } from "lucide-react";

const articles = [
  {
    title: "Demystifying KV Cache Memory Bloat",
    description: "Why context length is the primary driver of VRAM consumption in modern LLMs.",
    slug: "demystifying-kv-cache",
    category: "Architecture"
  },
  {
    title: "INT4 Quantization: Technical Limits",
    description: "The math behind optimal model compression and its impact on hardware efficiency.",
    slug: "int4-quantization",
    category: "Quantization"
  },
  {
    title: "Scaling Llama 3 Context Windows",
    description: "Hardware requirements and performance tradeoffs for extended sequence lengths.",
    slug: "scaling-llama3-context",
    category: "Llama 3"
  },
  {
    title: "Resolving OOM Errors in Inference",
    description: "Practical strategies for managing Out-Of-Memory errors in local LLM deployments.",
    slug: "resolving-oom-errors",
    category: "Troubleshooting"
  },
  {
    title: "The Architecture of Memory: GQA",
    description: "Understanding Grouped-Query Attention and its revolutionary impact on VRAM.",
    slug: "understanding-gqa-vram",
    category: "Architecture"
  },
  {
    title: "Choosing Quantization Levels",
    description: "A comparison of 4-bit vs. 8-bit precision for enterprise production workloads.",
    slug: "choosing-quantization-levels",
    category: "Strategy"
  },
  {
    title: "VRAM Requirements for Fine-Tuning",
    description: "Calculating memory needs for LoRA and QLoRA across various model sizes.",
    slug: "vram-requirements-lora",
    category: "Training"
  },
  {
    title: "Multi-GPU Inference Strategies",
    description: "How to split 70B+ parameter models across multiple consumer or server GPUs.",
    slug: "multi-gpu-inference",
    category: "Hardware"
  },
  {
    title: "Scaling AI in Hinjewadi Phase 3",
    description: "Localized infrastructure planning for Pune's high-growth tech clusters.",
    slug: "scaling-ai-hinjewadi",
    category: "Localized SEO"
  },
  {
    title: "AI Deployments in Kharadi EON Zone",
    description: "Optimizing data pipelines and AI workloads within specialized free zones.",
    slug: "optimizing-ai-kharadi",
    category: "Localized SEO"
  },
  {
    title: "AI Hardware Planning for Baner",
    description: "Strategic setups for enterprise generative AI in Pune's software sectors.",
    slug: "hardware-planning-baner",
    category: "Localized SEO"
  },
  {
    title: "Benchmarking vLLM vs. llama.cpp",
    description: "A deep dive into memory-efficient inference engines for production.",
    slug: "vllm-vs-llamacpp",
    category: "Performance"
  },
  {
    title: "Enterprise GPU Procurement Guide",
    description: "Comparing NVIDIA H100, A100, and RTX 4090 for modern LLM stacks.",
    slug: "gpu-procurement-guide",
    category: "Procurement"
  },
  {
    title: "FlashAttention & Memory Efficiency",
    description: "The evolution of IO-aware attention and its role in modern transformers.",
    slug: "flash-attention-evolution",
    category: "Research"
  },
  {
    title: "Future-Proofing for 1M+ Context",
    description: "Architecting AI stacks for the next generation of massive sequence windows.",
    slug: "future-proofing-ai",
    category: "Future"
  }
];

export default function ArticlesIndex() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-primary">LLM Infrastructure Knowledge Base</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
          Technical guides on VRAM optimization, hardware scaling, and enterprise AI deployment strategies.
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto mb-12">
        <AdPlaceholder variant="leaderboard" label="High Performance AI Compute Sponsor" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link href={`/articles/${article.slug}`} key={article.slug} className="group">
            <Card className="h-full hover:border-primary transition-colors border-primary/10 shadow-sm hover:shadow-md">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {article.category}
                  </span>
                  <Database className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors text-xl font-headline">{article.title}</CardTitle>
                <CardDescription className="line-clamp-2">{article.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <div className="w-full max-w-5xl mx-auto mt-12">
        <AdPlaceholder variant="banner" label="Cloud GPU Instances & Clusters" />
      </div>
    </div>
  );
}
