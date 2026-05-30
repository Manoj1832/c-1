"use client";

import { useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
  subtitle?: string;
}

export default function BeforeAfter({
  beforeImage = "/before.jpg",
  afterImage = "/after.jpg",
  title = "Make Your Smile Shine Again",
  subtitle = "Dental Practice",
}: BeforeAfterProps) {
  const [sliderPos, setSliderPos] = useState(50);

  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x = Math.max(
      0,
      Math.min(clientX - rect.left, rect.width)
    );

    setSliderPos((x / rect.width) * 100);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      updateSlider(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      updateSlider(e.touches[0].clientX);
    };

    const stopDragging = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", stopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[4px] text-gray-500 font-semibold text-sm">
            {subtitle}
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-medium text-black">
            {title}
          </h2>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-[30px] shadow-2xl select-none"
          style={{ aspectRatio: "16/9" }}
        >
          {/* AFTER IMAGE */}
          <img
            src={afterImage}
            alt="After Treatment"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            draggable={false}
          />

          {/* BEFORE IMAGE */}
          <img
            src={beforeImage}
            alt="Before Treatment"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            draggable={false}
            style={{
              clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
            }}
          />

          {/* Divider */}
          <div
            className="absolute top-0 bottom-0 z-20"
            style={{
              left: `${sliderPos}%`,
            }}
          >
            <div className="absolute h-full w-[3px] bg-white -translate-x-1/2 shadow-lg" />

            <button
              type="button"
              onMouseDown={() => {
                isDragging.current = true;
              }}
              onTouchStart={() => {
                isDragging.current = true;
              }}
              className="
              absolute
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-16
              h-16
              rounded-full
              bg-white
              border-4
              border-gray-500
              shadow-2xl
              flex
              items-center
              justify-center
            "
            >
              <MoveHorizontal
                size={24}
                className="text-gray-500"
              />
            </button>
          </div>

          {/* Labels */}
          <div className="absolute top-6 left-6 z-30">
            <span className="bg-black/60 text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
              BEFORE
            </span>
          </div>

          <div className="absolute top-6 right-6 z-30">
            <span className="bg-gray-500 text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
              AFTER
            </span>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-6">
          Drag the slider to compare before and after results
        </p>
      </div>
    </section>
  );
}