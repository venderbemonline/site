import { useSignal } from "@preact/signals";
import { define } from "../utils.ts";
import Counter from "../islands/Counter.tsx";
import { HeroExample } from "../islands/HeroExample.tsx";

import { ArrowRight, Code, ShoppingCart, Users, Zap } from "lucide-react";

export default define.page(function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]">
      </div>

      {/* Main Content Container */}
      <div className="relative min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Logo Section */}
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse">
                </div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-3 sm:p-4 rounded-full shadow-2xl">
                  <ShoppingCart
                    className="h-10 w-10 sm:h-12 sm:w-12 text-white"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight">
              Vender Bem
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 sm:mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Online
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed px-2">
              Transformamos sua presença digital em resultados reais.
              <span className="block mt-1 sm:mt-2 text-sm sm:text-base md:text-lg text-slate-400">
                Soluções de software personalizadas para seu negócio crescer
                online.
              </span>
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto w-full px-2">
            <div className="text-center group">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 sm:p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                <Code className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 mx-auto mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                  Desenvolvimento
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Soluções técnicas inovadoras
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 sm:p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 mx-auto mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors" />
                <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                  Consultoria
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Estratégias personalizadas
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 sm:p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 mx-auto mb-2 sm:mb-3 group-hover:text-yellow-300 transition-colors" />
                <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                  Performance
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Resultados otimizados
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center px-4">
            <button className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </span>
              <span className="relative flex items-center">
                Entre em Contato
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>

            <p className="mt-3 sm:mt-4 text-slate-400 text-xs sm:text-sm px-2">
              Pronto para transformar seu negócio?
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 p-4 sm:p-6 text-center mt-auto">
          <p className="text-slate-500 text-xs leading-relaxed">
            © 2025 Vender Bem Online. Transformando ideias em soluções digitais.
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-16 sm:top-20 left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60">
        </div>
        <div className="absolute top-24 sm:top-32 right-6 sm:right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40">
        </div>
        <div className="absolute bottom-24 sm:bottom-32 left-6 sm:left-8 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse opacity-50">
        </div>
        <div className="absolute bottom-32 sm:bottom-40 right-4 w-1 h-1 bg-green-400 rounded-full animate-bounce opacity-30">
        </div>
      </div>
    </div>
  );
});
