"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';

interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  status: string;
  image: string;
  category: string;
  features: string[];
  applications: string[];
  slug: string;
  technicalSpecs?: {
    coverage?: string;
    dryingTime?: string;
    finish?: string;
    application?: string;
  };
}

// This would ideally come from a database or API
const productsData: Product[] = [
  {
    id: "01",
    name: "Axis Weather Coat",
    description: "Precision-engineered protective coating for extreme environmental conditions.",
    fullDescription: "Axis Weather Coat is a premium protective coating engineered to withstand extreme weather conditions, UV radiation, and chemical exposure. Ideal for industrial and marine applications.",
    status: "Active",
    image: "/Axis_Weather_Coat.png",
    category: "Protective Coatings",
    features: ["UV Resistant", "Chemical Resistant", "Weather Proof", "Long-lasting Durability"],
    applications: ["Industrial Equipment", "Marine Vessels", "Outdoor Structures", "Pipeline Protection"],
    slug: "axis-weather-coat"
  },
  {
    id: "02",
    name: "Ara Weather Coat",
    description: "Advanced reactive armor system designed for durability and performance.",
    fullDescription: "Ara Weather Coat features advanced reactive technology that adapts to environmental conditions, providing superior protection against corrosion and wear.",
    status: "Active",
    image: "/Ara_Weather_Coat.png",
    category: "Protective Coatings",
    features: ["Self-healing Properties", "Anti-corrosion", "Temperature Resistant", "Flexible Application"],
    applications: ["Automotive", "Aerospace", "Heavy Machinery", "Infrastructure"],
    slug: "ara-weather-coat"
  },
  {
    id: "03",
    name: "Tough Tex",
    description: "Industrial-grade textile technology for maximum resilience and flexibility.",
    fullDescription: "Tough Tex is an industrial-grade textile coating that combines maximum resilience with flexibility, perfect for high-wear applications.",
    status: "Active",
    image: "/Tough_Tex.png",
    category: "Industrial Textiles",
    features: ["Tear Resistant", "Waterproof", "Breathable", "High Tensile Strength"],
    applications: ["Protective Gear", "Industrial Covers", "Tarpaulins", "Tents"],
    slug: "tough-tex"
  },
  {
    id: "04",
    name: "CRUX SUPRA Fine Finish Wall Putty",
    description: "Premium fine finish wall putty for smooth, flawless surfaces.",
    fullDescription: "CRUX SUPRA Fine Finish Wall Putty provides an ultra-smooth base for premium paints, ensuring perfect wall finishing with superior adhesion.",
    status: "Active",
    image: "/CRUX_SUPRA_Fine_Finish_Wall_Putty.png",
    category: "Wall Finishes",
    features: ["Smooth Finish", "Excellent Adhesion", "Crack Resistant", "Easy Application"],
    applications: ["Interior Walls", "Exterior Walls", "Commercial Spaces", "Residential Projects"],
    slug: "crux-supra-fine-finish"
  },
  {
    id: "05",
    name: "CRUX Coarse Finish Wall Putty",
    description: "Rugged wall putty for textured finishes and surface leveling.",
    fullDescription: "CRUX Coarse Finish Wall Putty is designed for surface leveling and creating textured finishes on both interior and exterior walls.",
    status: "Active",
    image: "/CRUX_Coarse_Finish_Wall_Putty.png",
    category: "Wall Finishes",
    features: ["Excellent Coverage", "Surface Leveling", "Textured Finish", "Durable"],
    applications: ["Exterior Walls", "Textured Finishes", "Repair Work", "Surface Preparation"],
    slug: "crux-coarse-finish"
  },
  {
    id: "06",
    name: "Buildwell Ready-Mix Plaster",
    description: "Pre-mixed plaster solution for efficient construction.",
    fullDescription: "Buildwell Ready-Mix Plaster is a factory-mixed plaster that ensures consistent quality and reduces on-site labor requirements.",
    status: "Active",
    image: "/Buildwell_Reay-Mix_Plaster.png",
    category: "Construction Materials",
    features: ["Consistent Quality", "Time Saving", "Reduced Waste", "Superior Bonding"],
    applications: ["Interior Walls", "Exterior Walls", "Ceilings", "Renovation Projects"],
    slug: "buildwell-ready-mix-plaster"
  },
  {
    id: "07",
    name: "Glossmate Enamel Paint",
    description: "High-gloss enamel paint for brilliant, long-lasting finish.",
    fullDescription: "Glossmate Enamel Paint delivers a brilliant, high-gloss finish that resists yellowing and maintains its shine for years.",
    status: "Active",
    image: "/Glossmate_Enamel_Paint.png",
    category: "Decorative Paints",
    features: ["High Gloss Finish", "Scratch Resistant", "Easy Cleaning", "Weather Resistant"],
    applications: ["Metal Surfaces", "Wood Work", "Furniture", "Doors & Windows"],
    slug: "glossmate-enamel"
  },
  {
    id: "08",
    name: "Uniprime Ext",
    description: "Premium exterior primer for superior paint adhesion.",
    fullDescription: "Uniprime Ext is a high-performance exterior primer that ensures superior paint adhesion and protects against weathering.",
    status: "Active",
    image: "/Uniprime_Ext.png",
    category: "Primers",
    features: ["Superior Adhesion", "Alkali Resistant", "Weather Protection", "Seals Surfaces"],
    applications: ["Exterior Walls", "Concrete Surfaces", "Plastered Walls", "Masonry"],
    slug: "uniprime-ext"
  },
  {
    id: "09",
    name: "Uniprime",
    description: "Versatile primer for interior and exterior applications.",
    fullDescription: "Uniprime is a versatile all-purpose primer that prepares surfaces for optimal paint adhesion and uniform finish.",
    status: "Active",
    image: "/Uniprime.png",
    category: "Primers",
    features: ["All-purpose", "Quick Drying", "Excellent Adhesion", "Seals Porous Surfaces"],
    applications: ["Interior Walls", "Exterior Walls", "Wood", "Metal"],
    slug: "uniprime"
  },
  {
    id: "10",
    name: "Jet Emulsion",
    description: "Smooth emulsion paint for elegant interior finishes.",
    fullDescription: "Jet Emulsion provides a smooth, elegant finish for interior walls with excellent washability and color retention.",
    status: "Active",
    image: "/Jet_Emulsion.png",
    category: "Emulsion Paints",
    features: ["Smooth Finish", "Washable", "Color Retention", "Low VOC"],
    applications: ["Living Rooms", "Bedrooms", "Offices", "Hotels"],
    slug: "jet-emulsion"
  },
  {
    id: "11",
    name: "Metalock Yellow Pro",
    description: "Professional grade yellow metal coating for industrial use.",
    fullDescription: "Metalock Yellow Pro is a professional-grade coating specifically formulated for metal surfaces requiring high visibility and protection.",
    status: "Active",
    image: "/Metalock_Yellow_Pro.png",
    category: "Industrial Coatings",
    features: ["High Visibility", "Corrosion Resistant", "UV Stable", "Industrial Grade"],
    applications: ["Safety Equipment", "Industrial Machinery", "Markings", "Heavy Equipment"],
    slug: "metalock-yellow-pro"
  },
  {
    id: "12",
    name: "Metalock Yellow",
    description: "Standard yellow metal coating for general applications.",
    fullDescription: "Metalock Yellow provides reliable protection and high-visibility finish for general metal coating applications.",
    status: "Active",
    image: "/Metalock_Yellow.png",
    category: "Industrial Coatings",
    features: ["Durable Finish", "Good Coverage", "Weather Resistant", "Easy Application"],
    applications: ["Metal Structures", "Pipes", "Equipment", "General Metal Work"],
    slug: "metalock-yellow"
  },
  {
    id: "13",
    name: "Metalock Red Pro",
    description: "Premium red industrial coating for heavy-duty applications.",
    fullDescription: "Metalock Red Pro delivers superior protection and high-visibility red finish for heavy-duty industrial applications.",
    status: "Active",
    image: "/Metalock_Red_Pro.png",
    category: "Industrial Coatings",
    features: ["Heavy-duty Protection", "Chemical Resistant", "High Visibility", "Long-lasting"],
    applications: ["Fire Safety Equipment", "Heavy Machinery", "Industrial Piping", "Warning Markings"],
    slug: "metalock-red-pro"
  },
  {
    id: "14",
    name: "Metalock Red",
    description: "Standard red metal coating for general industrial use.",
    fullDescription: "Metalock Red offers reliable protection and standard red finish for general industrial metal coating requirements.",
    status: "Active",
    image: "/Metalock_Red.png",
    category: "Industrial Coatings",
    features: ["Good Adhesion", "Weather Resistant", "Economical", "Easy to Apply"],
    applications: ["General Metal Surfaces", "Maintenance Work", "Repairs", "Touch-ups"],
    slug: "metalock-red"
  },
  {
    id: "15",
    name: "Oil Paint Premium",
    description: "Premium oil-based paint for superior finish and durability.",
    fullDescription: "Oil Paint Premium delivers a superior, durable finish with excellent flow and leveling properties for professional results.",
    status: "Active",
    image: "/Oil_Paint_premium.png",
    category: "Oil Paints",
    features: ["Superior Flow", "Excellent Durability", "High Gloss Option", "Smooth Finish"],
    applications: ["Fine Woodwork", "Furniture", "Decorative Surfaces", "Artistic Projects"],
    slug: "oil-paint-premium"
  },
  {
    id: "16",
    name: "Eco Acrylic Distemper",
    description: "Eco-friendly acrylic distemper for interior walls.",
    fullDescription: "Eco Acrylic Distemper is an environmentally friendly, water-based distemper perfect for interior walls with excellent coverage.",
    status: "Active",
    image: "/Eco_Acrylic_Distemper.png",
    category: "Distempers",
    features: ["Eco-friendly", "Water-based", "Excellent Coverage", "Breathable Finish"],
    applications: ["Interior Walls", "Ceilings", "Low-traffic Areas", "Residential Spaces"],
    slug: "eco-acrylic-distemper"
  },
  {
    id: "17",
    name: "Decorx Acrylic Distemper",
    description: "Decorative acrylic distemper for enhanced interior aesthetics.",
    fullDescription: "Decorx Acrylic Distemper combines decorative appeal with durable protection for enhanced interior wall aesthetics.",
    status: "Active",
    image: "/Decorx_Acrylic_Distemper.png",
    category: "Distempers",
    features: ["Decorative Finish", "Durable", "Easy Application", "Good Coverage"],
    applications: ["Interior Decoration", "Feature Walls", "Commercial Spaces", "Hospitality"],
    slug: "decorx-acrylic-distemper"
  },
  {
    id: "18",
    name: "Aquaris Supra",
    description: "Premium waterproofing solution for superior protection.",
    fullDescription: "Aquaris Supra provides premium waterproofing protection for roofs, terraces, and other exposed surfaces.",
    status: "Active",
    image: "/Aquaris_Supra.png",
    category: "Waterproofing",
    features: ["Superior Waterproofing", "Elastic Properties", "UV Resistant", "Long-lasting"],
    applications: ["Roofs", "Terraces", "Balconies", "Water Tanks"],
    slug: "aquaris-supra"
  },
  {
    id: "19",
    name: "Aquaproof",
    description: "Reliable waterproofing compound for construction.",
    fullDescription: "Aquaproof is a reliable waterproofing compound that provides effective protection against water ingress in construction projects.",
    status: "Active",
    image: "/Aquaproof.png",
    category: "Waterproofing",
    features: ["Effective Protection", "Easy Application", "Cost-effective", "Versatile Use"],
    applications: ["Basements", "Bathrooms", "Wet Areas", "Foundation Walls"],
    slug: "aquaproof"
  },
  {
    id: "20",
    name: "Decorprime",
    description: "High-performance decorative primer for premium finishes.",
    fullDescription: "Decorprime is a high-performance primer that ensures premium decorative finishes with enhanced durability and adhesion.",
    status: "Active",
    image: "/Decorprime.png",
    category: "Primers",
    features: ["Premium Finish", "Enhanced Adhesion", "Seals Surfaces", "Quick Drying"],
    applications: ["Premium Interiors", "Decorative Projects", "High-end Finishes", "Architectural Work"],
    slug: "decorprime"
  },
  {
    id: "21",
    name: "DuraGuard Exterior",
    description: "Heavy-duty exterior paint for maximum protection.",
    fullDescription: "DuraGuard Exterior provides maximum protection against harsh weather conditions with exceptional durability and color retention.",
    status: "Active",
    image: "/DuraGuard_Exterior.png",
    category: "Exterior Paints",
    features: ["Maximum Protection", "Weather Resistant", "Color Retention", "Anti-fungal"],
    applications: ["Exterior Walls", "Facades", "Boundary Walls", "Commercial Buildings"],
    slug: "duraguard-exterior"
  },
  {
    id: "22",
    name: "DuraGuard Interior",
    description: "Durable interior paint for high-traffic areas.",
    fullDescription: "DuraGuard Interior offers exceptional durability for high-traffic interior areas while maintaining an elegant finish.",
    status: "Active",
    image: "/DuraGuard_Interior.png",
    category: "Interior Paints",
    features: ["Scrub Resistant", "Stain Resistant", "Easy Cleaning", "Durable Finish"],
    applications: ["Hallways", "Corridors", "Kitchens", "High-traffic Areas"],
    slug: "duraguard-interior"
  },
  {
    id: "23",
    name: "Eva Emulsion",
    description: "Smooth emulsion with excellent coverage properties.",
    fullDescription: "Eva Emulsion delivers smooth, even coverage with excellent hiding power and a elegant matte finish.",
    status: "Active",
    image: "/Eva_Emulsion.png",
    category: "Emulsion Paints",
    features: ["Excellent Coverage", "Smooth Finish", "Matte Appearance", "Good Hiding Power"],
    applications: ["Interior Walls", "Ceilings", "Bedrooms", "Living Areas"],
    slug: "eva-emulsion"
  },
  {
    id: "24",
    name: "Zodiac Emulsion",
    description: "Premium emulsion for luxurious interior finishes.",
    fullDescription: "Zodiac Emulsion provides a luxurious, premium finish for discerning interior design projects requiring exceptional quality.",
    status: "Active",
    image: "/Zodiac_Emulsion.png",
    category: "Emulsion Paints",
    features: ["Luxurious Finish", "Premium Quality", "Excellent Durability", "Rich Colors"],
    applications: ["Luxury Homes", "Premium Offices", "Hotels", "Showrooms"],
    slug: "zodiac-emulsion"
  }
];

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = productsData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    notFound();
  }

  return (
    <main className="flex-1 w-full flex flex-col relative z-10">
      
      {/* Hero Section */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-16 md:pb-24 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-1 md:col-span-3 flex flex-col justify-between order-2 md:order-1">
            <Link href={`/labs#product-${product.slug}`} className="text-xs uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-2 group mb-6 md:mb-0">
              <iconify-icon icon="solar:arrow-left-linear" width="14" className="transition-transform group-hover:-translate-x-1" />
              Back to Labs
            </Link>
          </div>

          <div className="col-span-1 md:col-span-9 order-1 md:order-2">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
              {product.category}
            </p>
            <h1 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8rem] font-medium tracking-tighter leading-[0.85] text-gray-900 mb-6">
              {product.name}
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed font-medium">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column - Image */}
          <div className="col-span-1 lg:col-span-6">
            <div className="sticky top-32">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 border border-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="col-span-1 lg:col-span-6">
            <div className="flex flex-col gap-12">
              
              {/* Full Description */}
              <div>
                <h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Technical Specifications */}
              {product.technicalSpecs && (
                <div>
                  <h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Technical Specifications</h2>
                  <div className="space-y-3">
                    {product.technicalSpecs.coverage && (
                      <div className="grid grid-cols-2 gap-4 py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-500">Coverage</span>
                        <span className="text-sm text-gray-900 font-medium">{product.technicalSpecs.coverage}</span>
                      </div>
                    )}
                    {product.technicalSpecs.dryingTime && (
                      <div className="grid grid-cols-2 gap-4 py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-500">Drying Time</span>
                        <span className="text-sm text-gray-900 font-medium">{product.technicalSpecs.dryingTime}</span>
                      </div>
                    )}
                    {product.technicalSpecs.finish && (
                      <div className="grid grid-cols-2 gap-4 py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-500">Finish</span>
                        <span className="text-sm text-gray-900 font-medium">{product.technicalSpecs.finish}</span>
                      </div>
                    )}
                    {product.technicalSpecs.application && (
                      <div className="grid grid-cols-2 gap-4 py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-500">Application Method</span>
                        <span className="text-sm text-gray-900 font-medium">{product.technicalSpecs.application}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div>
                <h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <iconify-icon icon="solar:check-circle-linear" width="16" className="text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Applications</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.applications.map((application, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <iconify-icon icon="solar:buildings-linear" width="16" className="text-gray-400" />
                      {application}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white hover:bg-black transition-all duration-300 text-sm font-medium tracking-wide outline-none group"
                >
                  Request a Quote
                  <iconify-icon 
                    icon="solar:arrow-right-up-linear" 
                    width="18" 
                    height="18" 
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>

            </div>
          </div>
          
        </div>
      </section>

    </main>
  );
}