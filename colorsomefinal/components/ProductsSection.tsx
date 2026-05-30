// "use client";

// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   image: string;
//   slug: string;
// }

// const products: Product[] = [
//   {
//     id: '1',
//     name: 'Glossmate Enamel Paint',
//     description: 'Precision-engineered protective coating for extreme environmental conditions.',
//     image: '/Glossmate_Enamel_Paint.png',
//     slug: 'axis-weather-coat'
//   },
//   {
//     id: '2',
//     name: 'uniprime ARA Weather Coat',
//     description: 'Advanced reactive armor system designed for durability and performance.',
//     image: '/Uniprime_Ext.png',
//     slug: 'ara-weather-coat'
//   },
//   {
//     id: '3',
//     name: 'Tough Tex',
//     description: 'Industrial-grade textile technology for maximum resilience and flexibility.',
//     image: '/Tough_Tex.png',
//     slug: 'tough-tex'
//   }
// ];

// export default function ProductsSection() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <div id="products-section" className="w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col py-24 md:py-32 relative z-10">
      
//       {/* Typography Section */}
//       <section className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 mb-16 md:mb-24">
//         <div className="col-span-1 md:col-span-2 flex flex-col justify-between order-2 md:order-1">
//           <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6 md:mb-0">05 / Products</p>
//           <div className="flex flex-col gap-6">
//             <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed uppercase tracking-widest font-medium">
//               Engineered solutions for demanding applications and environments.
//             </p>
//           </div>
//         </div>

//         <div className="col-span-1 md:col-span-10 order-1 md:order-2">
//           <h2 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8.5rem] font-medium tracking-tighter leading-[0.85] text-gray-900">
//             Engineered
//             <br />
//             <span className="text-gray-500">Solutions</span>
//           </h2>
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
//         <div className="hidden md:block col-span-3">
//           {/* Spacer for alignment */}
//         </div>

//         <div className="col-span-1 md:col-span-9">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
//             {products.map((product, index) => (
//               <Link
//                 key={product.id}
//                 href={`/products/${product.slug}`}
//                 className="group block outline-none"
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 <div className="relative overflow-hidden bg-gray-100 aspect-[4/5] mb-6">
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     fill
//                     className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
//                   />
//                   {/* Overlay on hover */}
//                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                  
//                   {/* Arrow indicator on hover */}
//                   <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
//                     <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
//                       <iconify-icon 
//                         icon="solar:arrow-right-up-linear" 
//                         width="20" 
//                         height="20" 
//                         className="text-gray-900"
//                       />
//                     </div>
//                   </div>
//                 </div>
                
//                 <h3 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-2 group-hover:translate-x-1 transition-transform duration-300">
//                   {product.name}
//                 </h3>
//                 <p className="text-sm text-gray-500 leading-relaxed">
//                   {product.description}
//                 </p>
                
//                 {/* Learn more link */}
//                 <div className="mt-4 flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-900 transition-colors">
//                   <span className="uppercase tracking-widest font-semibold">Explore</span>
//                   <iconify-icon 
//                     icon="solar:arrow-right-up-linear" 
//                     width="14" 
//                     height="14" 
//                     className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Axis Weather Coat',
    description: 'Precision-engineered protective coating for extreme environmental conditions.',
    image: '/Axis_Weather_Coat.png',
    slug: 'axis-weather-coat'
  },
  {
    id: '2',
    name: 'Ara Weather Coat',
    description: 'Advanced reactive armor system designed for durability and performance.',
    image: '/Ara_Weather_Coat.png',
    slug: 'ara-weather-coat'
  },
  {
    id: '3',
    name: 'Tough Tex',
    description: 'Industrial-grade textile technology for maximum resilience and flexibility.',
    image: '/Tough_Tex.png',
    slug: 'tough-tex'
  }
];

export default function ProductsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div id="products-section" className="w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col py-24 md:py-32 relative z-10">
      
      {/* Typography Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 mb-16 md:mb-24">
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between order-2 md:order-1">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6 md:mb-0">05 / Products</p>
          <div className="flex flex-col gap-6">
            <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed uppercase tracking-widest font-medium">
              Engineered solutions for demanding applications and environments.
            </p>
          </div>
        </div>

        <div className="col-span-1 md:col-span-10 order-1 md:order-2">
          <h2 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8.5rem] font-medium tracking-tighter leading-[0.85] text-gray-900">
            Engineered
            <br />
            <span className="text-gray-500">Solutions</span>
          </h2>
        </div>
      </section>

      {/* Products Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
        <div className="hidden md:block col-span-3">
          {/* Spacer for alignment */}
        </div>

        <div className="col-span-1 md:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {products.map((product, index) => (
              <Link
                key={product.id}
                href={`/labs#product-${product.slug}`}
                className="group block outline-none"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/5] mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                  
                  {/* Arrow indicator on hover */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <iconify-icon 
                        icon="solar:arrow-right-up-linear" 
                        width="20" 
                        height="20" 
                        className="text-gray-900"
                      />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-2 group-hover:translate-x-1 transition-transform duration-300">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Learn more link */}
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-900 transition-colors">
                  <span className="uppercase tracking-widest font-semibold">Explore</span>
                  <iconify-icon 
                    icon="solar:arrow-right-up-linear" 
                    width="14" 
                    height="14" 
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}