import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, Globe, Cpu, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-green-500/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
              v1.8 WASM-GC Offline
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent" style={{ fontFamily: 'Oxanium, sans-serif' }}>
              Eaglercraft X
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
              Experience the classic 1.8 Minecraft java edition directly in your browser. 
              Powered by WebAssembly for near-native performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <a href="/game.html" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold h-14 px-8 text-lg shadow-[0_0_20px_-5px_rgba(22,163,74,0.5)] border-b-4 border-green-800 active:border-b-0 active:translate-y-1 transition-all">
                  <Gamepad2 className="mr-2 h-5 w-5" />
                  Play Now
                </Button>
              </a>
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 text-neutral-300 hover:text-white backdrop-blur-sm">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Globe className="h-8 w-8 text-blue-400" />}
            title="Browser Native"
            description="No downloads required. Runs completely within your modern web browser using standard technologies."
          />
          <FeatureCard 
            icon={<Cpu className="h-8 w-8 text-purple-400" />}
            title="WASM Powered"
            description="compiled to WebAssembly with Garbage Collection support for smooth, stutter-free gameplay."
          />
          <FeatureCard 
            icon={<Zap className="h-8 w-8 text-yellow-400" />}
            title="Instant Load"
            description="Optimized assets and local caching ensure you can jump into your world in seconds."
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-12">
        <div className="container mx-auto px-4 text-center text-neutral-500 text-sm">
          <p>Eaglercraft is not affiliated with Mojang or Microsoft.</p>
          <p className="mt-2">Running on Replit</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="bg-neutral-900/50 border-neutral-800 backdrop-blur-sm hover:border-neutral-700 transition-colors">
      <CardContent className="pt-6">
        <div className="mb-4 p-3 rounded-lg bg-neutral-950 w-fit border border-neutral-800">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white" style={{ fontFamily: 'Oxanium, sans-serif' }}>{title}</h3>
        <p className="text-neutral-400 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
