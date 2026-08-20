"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function DigitalTwinSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ---------------------------------------------------------
  // SCROLL MAPPINGS
  // ---------------------------------------------------------

  // Opacity of the main introductory text
  const introOpacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  // "THEN AURA STARTS REMEMBERING."
  const state2Opacity = useTransform(scrollYProgress, [0.1, 0.12, 0.22, 0.25], [0, 1, 1, 0]);
  
  // "YOUR ROUTINE CHANGES."
  const state3Opacity = useTransform(scrollYProgress, [0.25, 0.27, 0.37, 0.4], [0, 1, 1, 0]);

  // "YOUR CONTEXT CHANGES."
  const state4Opacity = useTransform(scrollYProgress, [0.4, 0.42, 0.52, 0.55], [0, 1, 1, 0]);

  // "YOUR HISTORY STARTS TO MEAN SOMETHING."
  const state5Opacity = useTransform(scrollYProgress, [0.55, 0.57, 0.65, 0.68], [0, 1, 1, 0]);

  // "PATTERNS EMERGE. NOW AURA CAN PERSONALIZE."
  const state6Opacity = useTransform(scrollYProgress, [0.68, 0.7, 0.8, 0.82], [0, 1, 1, 0]);

  // Final statement
  const state7Opacity = useTransform(scrollYProgress, [0.85, 0.88], [0, 1]);

  // Node opacities
  const nodeSkinHairOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const timelineOpacity = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);
  const nodeRoutineOpacity = useTransform(scrollYProgress, [0.25, 0.3], [0, 1]);
  const nodeContextOpacity = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);
  
  // Lines drawing (pathLength)
  const linesProgress = useTransform(scrollYProgress, [0.55, 0.62], [0, 1]);

  // Insight box
  const insightOpacity = useTransform(scrollYProgress, [0.72, 0.75], [0, 1]);
  const insightY = useTransform(scrollYProgress, [0.72, 0.75], [20, 0]);

  // Image scale (starts large, scales down to make room for map)
  const imageScale = useTransform(scrollYProgress, [0, 0.15], [1.2, 0.8]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full"
      style={{ height: "800vh", backgroundColor: "#e6e2d8", color: "#080808" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Background Grid for Map Feel */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: "linear-gradient(rgba(8,8,8,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(8,8,8,0.3) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem"
          }}
        />

        {/* Top Left Header (Always visible until end) */}
        <motion.div 
          className="absolute top-8 left-8 md:top-12 md:left-12 z-20 flex flex-col gap-2"
          style={{ opacity: useTransform(scrollYProgress, [0.9, 0.95], [1, 0]) }}
        >
          <span className="font-mono text-xs tracking-widest uppercase opacity-50">07 / THE DIGITAL TWIN</span>
          <span className="font-mono text-xs tracking-widest uppercase text-[#c8ff00] bg-black px-2 py-1 inline-block w-max">
            NOT A PROFILE. A REFLECTION IN MOTION.
          </span>
        </motion.div>



        {/* SVG CONNECTIONS (The "Map") */}
        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <motion.path 
            d="M 20% 30% Q 35% 40% 50% 50%" 
            fill="none" 
            stroke="#080808" 
            strokeWidth="1" 
            strokeDasharray="4 4"
            style={{ pathLength: linesProgress, opacity: nodeSkinHairOpacity }}
          />
          <motion.path 
            d="M 80% 25% Q 65% 35% 50% 50%" 
            fill="none" 
            stroke="#080808" 
            strokeWidth="1" 
            style={{ pathLength: linesProgress, opacity: nodeSkinHairOpacity }}
          />
          <motion.path 
            d="M 15% 65% Q 30% 60% 50% 50%" 
            fill="none" 
            stroke="#c8ff00" 
            strokeWidth="2" 
            style={{ pathLength: linesProgress, opacity: nodeRoutineOpacity }}
          />
          <motion.path 
            d="M 85% 70% Q 70% 60% 50% 50%" 
            fill="none" 
            stroke="#080808" 
            strokeWidth="1" 
            strokeDasharray="2 4"
            style={{ pathLength: linesProgress, opacity: nodeContextOpacity }}
          />
        </svg>

        {/* NODES */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* SKIN & HAIR */}
          <motion.div 
            className="absolute top-[28%] left-[15%] md:left-[25%] flex flex-col items-center gap-2"
            style={{ opacity: nodeSkinHairOpacity }}
          >
            <div className="w-2 h-2 rounded-full bg-black" />
            <span className="font-mono text-[0.65rem] tracking-widest">SKIN HISTORY</span>
          </motion.div>
          <motion.div 
            className="absolute top-[23%] right-[15%] md:right-[25%] flex flex-col items-center gap-2"
            style={{ opacity: nodeSkinHairOpacity }}
          >
            <div className="w-2 h-2 rounded-full bg-black" />
            <span className="font-mono text-[0.65rem] tracking-widest">HAIR</span>
          </motion.div>

          {/* ROUTINE */}
          <motion.div 
            className="absolute bottom-[33%] left-[10%] md:left-[20%] flex flex-col items-center gap-2"
            style={{ opacity: nodeRoutineOpacity }}
          >
            <div className="w-3 h-3 rounded-full bg-[#c8ff00] border border-black" />
            <span className="font-mono text-[0.65rem] tracking-widest">ROUTINE CHANGES</span>
            <span className="font-mono text-[0.55rem] tracking-widest opacity-50">PRODUCTS • ADHERENCE</span>
          </motion.div>

          {/* CONTEXT */}
          <motion.div 
            className="absolute bottom-[28%] right-[10%] md:right-[20%] flex flex-col items-center gap-2"
            style={{ opacity: nodeContextOpacity }}
          >
            <div className="w-2 h-2 rounded-full border border-black" />
            <span className="font-mono text-[0.65rem] tracking-widest">CONTEXT</span>
            <span className="font-mono text-[0.55rem] tracking-widest opacity-50 text-right">LIFESTYLE<br/>ENVIRONMENT</span>
          </motion.div>
        </div>

        {/* TIMELINE */}
        <motion.div 
          className="absolute left-4 md:left-12 bottom-12 z-20 border-l border-black/20 pl-4 py-2 flex flex-col gap-6"
          style={{ opacity: timelineOpacity }}
        >
          <div className="relative">
            <div className="absolute -left-[1.3rem] top-1.5 w-1.5 h-1.5 rounded-full bg-black" />
            <span className="block font-mono text-[0.6rem] tracking-widest opacity-50 mb-0.5">DAY 01</span>
            <span className="block font-mono text-[0.65rem] tracking-widest">FIRST SCAN</span>
          </div>
          <div className="relative">
            <div className="absolute -left-[1.3rem] top-1.5 w-1 h-1 rounded-full bg-black/50" />
            <span className="block font-mono text-[0.6rem] tracking-widest opacity-50 mb-0.5">DAY 14</span>
            <span className="block font-mono text-[0.65rem] tracking-widest">ROUTINE UPDATED</span>
          </div>
          <div className="relative">
            <div className="absolute -left-[1.3rem] top-1.5 w-1.5 h-1.5 rounded-full bg-[#c8ff00] border border-black" />
            <span className="block font-mono text-[0.6rem] tracking-widest opacity-50 mb-0.5">DAY 30</span>
            <span className="block font-mono text-[0.65rem] tracking-widest">NEW SCAN</span>
          </div>
          <div className="relative">
            <div className="absolute -left-[1.3rem] top-1.5 w-1 h-1 rounded-full bg-black/50" />
            <span className="block font-mono text-[0.6rem] tracking-widest opacity-50 mb-0.5">DAY 90</span>
            <span className="block font-mono text-[0.65rem] tracking-widest">PROGRESS OBSERVED</span>
          </div>
        </motion.div>

        {/* NARRATIVE TEXT LAYERS */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none text-center">
          
          {/* STATE 1 */}
          <motion.div style={{ opacity: introOpacity, y: introY, willChange: "opacity, transform", WebkitTransform: "translateZ(0)" }} className="absolute">
            <h2 className="font-bold text-4xl md:text-6xl tracking-tighter mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              ONE PHOTO SHOWS A MOMENT.
            </h2>
            <p className="font-serif italic text-2xl md:text-3xl text-[#5a5952]">Just a snapshot.</p>
          </motion.div>

          {/* STATE 2 */}
          <motion.div style={{ opacity: state2Opacity, willChange: "opacity, transform", WebkitTransform: "translateZ(0)" }} className="absolute">
            <h2 className="font-bold text-4xl md:text-6xl tracking-tighter mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              THEN AURA STARTS REMEMBERING.
            </h2>
          </motion.div>

          {/* STATE 3 */}
          <motion.div style={{ opacity: state3Opacity, willChange: "opacity, transform", WebkitTransform: "translateZ(0)" }} className="absolute">
            <h2 className="font-bold text-4xl md:text-6xl tracking-tighter mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              YOUR ROUTINE CHANGES.
            </h2>
          </motion.div>

          {/* STATE 4 */}
          <motion.div style={{ opacity: state4Opacity, willChange: "opacity, transform", WebkitTransform: "translateZ(0)" }} className="absolute">
            <h2 className="font-bold text-4xl md:text-6xl tracking-tighter mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              YOUR CONTEXT CHANGES.
            </h2>
          </motion.div>

          {/* STATE 5 */}
          <motion.div style={{ opacity: state5Opacity, willChange: "opacity, transform", WebkitTransform: "translateZ(0)" }} className="absolute">
            <h2 className="font-bold text-4xl md:text-6xl tracking-tighter mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              YOUR HISTORY STARTS<br/>TO MEAN SOMETHING.
            </h2>
          </motion.div>

          {/* STATE 6 */}
          <motion.div style={{ opacity: state6Opacity, willChange: "opacity, transform", WebkitTransform: "translateZ(0)" }} className="absolute mt-[40vh]">
            <h2 className="font-bold text-3xl md:text-5xl tracking-tighter mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              PATTERNS EMERGE.
            </h2>
            <p className="font-mono text-sm tracking-widest text-[#5a5952] uppercase">Now AURA can personalize.</p>
          </motion.div>

          {/* STATE 7 (Final) */}
          <motion.div style={{ opacity: state7Opacity, willChange: "opacity, transform", WebkitTransform: "translateZ(0)" }} className="absolute bg-[#11110f] text-[#f3f0e8] inset-[-100vw] flex flex-col items-center justify-center">
            <div className="max-w-4xl px-8 text-center">
              <div className="flex justify-center gap-16 mb-16 font-mono text-sm tracking-widest opacity-60">
                <div className="flex flex-col gap-4">
                  <span className="text-[#c8ff00]">PROFILE</span>
                  <span>"WHAT I KNOW<br/>ABOUT YOU."</span>
                </div>
                <div className="w-[1px] bg-white/20" />
                <div className="flex flex-col gap-4">
                  <span className="text-white">DIGITAL TWIN</span>
                  <span>"WHAT I'M LEARNING<br/>ABOUT YOU."</span>
                </div>
              </div>

              <h2 className="font-bold text-5xl md:text-8xl tracking-tighter mb-6" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                YOU ARE NOT<br/>A SNAPSHOT.
              </h2>
              <p className="font-serif italic text-3xl md:text-5xl text-[#c8ff00] mb-12">You are a story.</p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-[0.65rem] md:text-xs tracking-widest text-[#f3f0e8] mb-12 opacity-80">
                <span>OBSERVE</span>
                <span className="text-[#c8ff00]">→</span>
                <span>UPDATE</span>
                <span className="text-[#c8ff00]">→</span>
                <span>UNDERSTAND</span>
                <span className="text-[#c8ff00]">→</span>
                <span>GUIDE</span>
                <span className="text-[#c8ff00]">→</span>
                <span>TRACK</span>
                <span className="text-[#c8ff00]">⤾</span>
              </div>

              <p className="font-mono text-xs tracking-widest uppercase opacity-70">AURA IS BEING BUILT TO UNDERSTAND IT.</p>
            </div>
          </motion.div>

        </div>

        {/* INSIGHT BOX (State 6) */}
        <motion.div 
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-40 bg-black text-[#f3f0e8] p-6 max-w-xs border border-white/10"
          style={{ opacity: insightOpacity, y: insightY }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8ff00]" />
            <span className="font-mono text-[0.65rem] tracking-widest uppercase text-[#c8ff00]">Personalized Insight</span>
          </div>
          <p className="text-sm leading-relaxed mb-4 font-medium">
            "Your recent routine has been more consistent."
          </p>
          <p className="text-xs opacity-60 leading-relaxed font-mono tracking-wide">
            That gives AURA a better baseline for your next check-in.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
