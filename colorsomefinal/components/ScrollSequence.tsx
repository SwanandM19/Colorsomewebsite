// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const frameCount = 240;

// export default function ScrollSequence() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const container = containerRef.current;

//     if (!canvas || !container) return;

//     const context = canvas.getContext("2d");
//     if (!context) return;

//     const currentFrame = (index: number) =>
//       `/scrollimage/ezgif-frame-${String(index)
//         .padStart(3, "0")}.jpg`;

//     const images: HTMLImageElement[] = [];
//     const imageSeq = {
//       frame: 1,
//     };

//     // preload images
//     for (let i = 1; i <= frameCount; i++) {
//       const img = new Image();
//       img.src = currentFrame(i);
//       images.push(img);
//     }

//     const render = () => {
//       const img = images[imageSeq.frame - 1];

//       if (!img || !context) return;

//       canvas.width = container.offsetWidth;
//       canvas.height = container.offsetHeight;

//       context.clearRect(0, 0, canvas.width, canvas.height);

//       // maintain aspect ratio
//       const scale = Math.max(
//         canvas.width / img.width,
//         canvas.height / img.height
//       );

//       const x = (canvas.width - img.width * scale) / 2;
//       const y = (canvas.height - img.height * scale) / 2;

//       context.drawImage(
//         img,
//         x,
//         y,
//         img.width * scale,
//         img.height * scale
//       );
//     };

//     images[0].onload = render;

//     // Scroll controlled animation
//     gsap.to(imageSeq, {
//       frame: frameCount,
//       snap: "frame",
//       ease: "none",
//       onUpdate: render,
//       scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: "+=1400",
//         scrub: true,
//         pin: false,
//       },
//     });

//     // RIGHT SHIFT SECTION
//     gsap.to(container, {
//       x: "12vw",
//       scrollTrigger: {
//         trigger: container,
//         start: "20% center",
//         end: "35% center",
//         scrub: true,
//       },
//     });

//     // LEFT SHIFT SECTION
//     gsap.to(container, {
//       x: "-12vw",
//       scrollTrigger: {
//         trigger: container,
//         start: "50% center",
//         end: "70% center",
//         scrub: true,
//       },
//     });

//     window.addEventListener("resize", render);

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       window.removeEventListener("resize", render);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="w-full h-full relative overflow-hidden bg-white"
//     >
//       <canvas
//         ref={canvasRef}
//         className="w-full h-full"
//       />
//     </div>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ScrollSequenceProps {
  currentFrame: number;
}

export default function ScrollSequence({
  currentFrame,
}: ScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const frameCount = 240;

  const imagesRef = useRef<HTMLImageElement[]>([]);

  // preload only once
  useEffect(() => {
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();

      img.src = `/scrollimage/ezgif-frame-${String(i).padStart(
        3,
        "0"
      )}.jpg`;

      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  // render whenever frame changes
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const img = imagesRef.current[currentFrame - 1];

    if (!img) return;

    const render = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;

      context.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      const scale =
        Math.min(
          canvas.width / img.width,
          canvas.height / img.height
        ) * 0.82;

      const width = img.width * scale;
      const height = img.height * scale;

      const x = (canvas.width - width) / 2;
      const y = (canvas.height - height) / 2;

      context.drawImage(img, x, y, width, height);
    };

    if (img.complete) {
      render();
    } else {
      img.onload = render;
    }
  }, [currentFrame]);

  return (
    <div
      ref={containerRef}
      className="
        relative overflow-hidden
        h-[50vh] md:h-[75vh]
        bg-gradient-to-br
        from-[#fafafa]
        via-white
        to-[#f4f4f4]
      "
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white/20 z-10 pointer-events-none" />

      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.06)] z-10 pointer-events-none" />

      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-[2]"
      />
    </div>
  );
}