
"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Cpu, Zap, HardDrive, Info, AlertCircle, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function LlmVramEstimator() {
  const [modelSize, setModelSize] = useState(7); // B
  const [precision, setPrecision] = useState("4"); // bits
  const [contextLength, setContextLength] = useState(4096);
  const [batchSize, setBatchSize] = useState(1);
  const [gqa, setGqa] = useState(true);
  
  const [vramModel, setVramModel] = useState(0);
  const [vramKV, setVramKV] = useState(0);
  const [vramTotal, setVramTotal] = useState(0);

  useEffect(() => {
    calculateVram();
  }, [modelSize, precision, contextLength, batchSize, gqa]);

  const calculateVram = () => {
    // Model Weights: Size * (bits / 8) * 1.1 (buffer)
    const weights = modelSize * (Number(precision) / 8) * 1.1;
    
    // KV Cache estimation (simplified for visualization)
    // 2 * layers * hidden_size * num_heads * (precision / 8) * context * batch
    // For a 7B model, layers ~32, hidden ~4096
    // GQA reduces KV cache by factor (num_heads / num_kv_heads), usually 8x
    const kvFactor = gqa ? 0.125 : 1.0;
    const kvCache = (contextLength * batchSize * modelSize * 0.0000002) * kvFactor; // Rough heuristic for web UI
    
    setVramModel(Math.round(weights * 100) / 100);
    setVramKV(Math.round(kvCache * 100) / 100);
    setVramTotal(Math.round((weights + kvCache) * 100) / 100);
  };

  const getGpuRecommendation = (vram: number) => {
    if (vram < 8) return "RTX 3060/4060 (8GB)";
    if (vram < 12) return "RTX 3060/4070 (12GB)";
    if (vram < 16) return "RTX 4070 Ti/4080 (16GB)";
    if (vram < 24) return "RTX 3090/4090 (24GB)";
    if (vram < 48) return "RTX 6000 Ada / 2x RTX 3090 (48GB)";
    return "A100/H100 Cluster (80GB+)";
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 flex flex-col lg:flex-row gap-8">
      <div className="flex-grow space-y-8">
        <Card className="shadow-lg border-primary/20">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <div className="flex items-center gap-3">
              <Cpu className="h-6 w-6 text-primary" />
              <div>
                <CardTitle className="text-2xl font-headline text-primary">Model Parameters</CardTitle>
                <CardDescription>Configure your LLM architecture and precision.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-base font-semibold">Model Size: {modelSize}B</Label>
                <Badge variant="outline">{modelSize < 10 ? "Edge/Mobile" : modelSize < 70 ? "Desktop" : "Server"}</Badge>
              </div>
              <Slider 
                value={[modelSize]} 
                onValueChange={(val: number[]) => setModelSize(val[0])} 
                min={1} 
                max={180} 
                step={1}
                className="py-4"
              />
              <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                <span>1B</span>
                <span>7B</span>
                <span>13B</span>
                <span>34B</span>
                <span>70B</span>
                <span>180B</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Quantization (Precision)</Label>
                <Select value={precision} onValueChange={setPrecision}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select bits" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="32">FP32 (Original)</SelectItem>
                    <SelectItem value="16">FP16 / BF16</SelectItem>
                    <SelectItem value="8">INT8 (Quantized)</SelectItem>
                    <SelectItem value="6">INT6 (Quantized)</SelectItem>
                    <SelectItem value="4">INT4 (Optimal)</SelectItem>
                    <SelectItem value="2">INT2 (Experimental)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
                <div className="space-y-0.5">
                  <Label className="text-sm">GQA Support</Label>
                  <p className="text-[10px] text-muted-foreground">Grouped-Query Attention</p>
                </div>
                <Switch checked={gqa} onCheckedChange={setGqa} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-primary/20">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <div className="flex items-center gap-3">
              <Zap className="h-6 w-6 text-primary" />
              <div>
                <CardTitle className="text-2xl font-headline text-primary">Inference Context</CardTitle>
                <CardDescription>Define sequence length and throughput requirements.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-base font-semibold">Context Window: {contextLength.toLocaleString()} tokens</Label>
              </div>
              <Slider 
                value={[contextLength]} 
                onValueChange={(val: number[]) => setContextLength(val[0])} 
                min={512} 
                max={131072} 
                step={512}
                className="py-4"
              />
              <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                <span>512</span>
                <span>4K</span>
                <span>8K</span>
                <span>32K</span>
                <span>128K</span>
              </div>
            </div>

            <div className="space-y-4">
               <Label className="text-base font-semibold">Batch Size: {batchSize}</Label>
               <Slider 
                value={[batchSize]} 
                onValueChange={(val: number[]) => setBatchSize(val[0])} 
                min={1} 
                max={128} 
                step={1}
                className="py-4"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:w-[350px] space-y-6">
        <Card className="sticky top-20 shadow-xl border-2 border-primary/20 bg-primary/5 overflow-hidden">
          <div className="h-2 w-full bg-primary" />
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-sm uppercase tracking-widest text-muted-foreground font-bold">Estimated VRAM Required</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="text-7xl font-extrabold tracking-tighter text-primary">
              {vramTotal} <span className="text-2xl font-medium">GB</span>
            </div>
            
            <div className="w-full mt-6 space-y-4">
               <div className="flex justify-between items-center text-sm border-b border-primary/10 pb-2">
                  <span className="text-muted-foreground flex items-center gap-2"><HardDrive className="h-3 w-3" /> Model Weights</span>
                  <span className="font-mono font-bold text-primary">{vramModel} GB</span>
               </div>
               <div className="flex justify-between items-center text-sm border-b border-primary/10 pb-2">
                  <span className="text-muted-foreground flex items-center gap-2"><Zap className="h-3 w-3" /> KV Cache</span>
                  <span className="font-mono font-bold text-primary">{vramKV} GB</span>
               </div>

               <div className="bg-primary text-primary-foreground p-4 rounded-xl shadow-inner mt-6">
                  <span className="text-[10px] uppercase font-bold opacity-80">Recommended Hardware</span>
                  <div className="text-lg font-bold leading-tight mt-1">
                    {getGpuRecommendation(vramTotal)}
                  </div>
               </div>

               <div className="space-y-3 mt-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground bg-white/50 p-2 rounded border border-border">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Real-time simulation active.</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground bg-white/50 p-2 rounded border border-border">
                    <Info className="h-4 w-4 text-blue-500" />
                    <span>Local-first calculation engine.</span>
                  </div>
               </div>
            </div>
          </CardContent>
        </Card>
        
        <div id="slot-sidebar-skyscraper" className="min-h-[600px] w-full flex justify-center items-center bg-muted/20 rounded-lg border border-dashed border-border p-4 text-center">
            <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-tighter">AI Infrastructure Solutions [Ad]</span>
        </div>
      </div>
    </div>
  );
}
