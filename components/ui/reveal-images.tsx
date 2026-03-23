"use client";
import { cn } from "@/lib/utils";

interface ImageSource {
  src: string;
  alt: string;
}

interface RevealImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, images }: RevealImageListItemProps) {
  const container = "absolute right-8 -top-1 z-40 h-20 w-16";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-xl";

  return (
    <div className="group relative h-fit w-fit overflow-visible py-6 cursor-pointer">
      <h3 className="text-5xl md:text-6xl font-light text-gray-900 transition-all duration-500 group-hover:opacity-30 tracking-tight">
        {text}
      </h3>
      <div className={container}>
        <div className={effect}>
          <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
        </div>
      </div>
      <div
        className={cn(
          container,
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12"
        )}
      >
        <div className={cn(effect, "duration-200")}>
          <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function RevealImageList() {
  const items: RevealImageListItemProps[] = [
    {
      text: "Viaggi Leisure",
      images: [
        {
          src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&auto=format&fit=crop&q=80",
          alt: "Montagne panoramiche",
        },
        {
          src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300&auto=format&fit=crop&q=80",
          alt: "Spiaggia tropicale",
        },
      ],
    },
    {
      text: "Business Travel",
      images: [
        {
          src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&auto=format&fit=crop&q=80",
          alt: "Sala conferenze aziendale",
        },
        {
          src: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=300&auto=format&fit=crop&q=80",
          alt: "Aeroporto business",
        },
      ],
    },
    {
      text: "Congressi",
      images: [
        {
          src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&auto=format&fit=crop&q=80",
          alt: "Congresso medico",
        },
        {
          src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300&auto=format&fit=crop&q=80",
          alt: "Conferenza professionale",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-0 px-4 py-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CC0000] mb-8">
        Le nostre specializzazioni
      </p>
      {items.map((item, index) => (
        <RevealImageListItem key={index} text={item.text} images={item.images} />
      ))}
    </div>
  );
}

export { RevealImageList };
