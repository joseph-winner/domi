"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

// Main Custom Section Renderer
export default function CustomSection({ section }) {
  if (!section || !section.enabled) return null;

  const style = {
    backgroundColor: section.backgroundColor || "#ffffff",
    paddingTop: `${section.paddingTop || 80}px`,
    paddingBottom: `${section.paddingBottom || 80}px`,
  };

  return (
    <section style={style}>
      <div className="container mx-auto px-4">
        {section.blocks?.map((block) => (
          <BlockRenderer key={block.id} block={block} />
        ))}
      </div>
    </section>
  );
}

// Block Renderer - renders different block types
function BlockRenderer({ block }) {
  switch (block.type) {
    case "heading":
      return <HeadingBlock block={block} />;
    case "paragraph":
      return <ParagraphBlock block={block} />;
    case "image":
      return <ImageBlock block={block} />;
    case "button":
      return <ButtonBlock block={block} />;
    case "video":
      return <VideoBlock block={block} />;
    case "stats":
      return <StatsBlock block={block} />;
    case "list":
      return <ListBlock block={block} />;
    case "cards":
      return <CardsBlock block={block} />;
    case "spacer":
      return <SpacerBlock block={block} />;
    default:
      return null;
  }
}

// Heading Block
function HeadingBlock({ block }) {
  const textAlign = block.align || "center";
  const className = `mb-6 font-bold text-gray-900 text-${textAlign}`;

  const sizeClasses = {
    h1: "text-4xl md:text-5xl lg:text-6xl",
    h2: "text-3xl md:text-4xl",
    h3: "text-2xl md:text-3xl",
    h4: "text-xl md:text-2xl",
  };

  const HeadingTag = block.level || "h2";

  return (
    <HeadingTag
      className={`${className} ${sizeClasses[block.level] || sizeClasses.h2}`}
      style={{ textAlign }}
    >
      {block.content}
    </HeadingTag>
  );
}

// Paragraph Block
function ParagraphBlock({ block }) {
  return (
    <p
      className="text-gray-600 text-lg leading-relaxed mb-6 max-w-4xl mx-auto"
      style={{ textAlign: block.align || "left" }}
    >
      {block.content}
    </p>
  );
}

// Image Block
function ImageBlock({ block }) {
  if (!block.src) return null;

  const widthClasses = {
    small: "max-w-xs",
    medium: "max-w-md",
    large: "max-w-2xl",
    full: "max-w-full",
  };

  return (
    <figure
      className={`mb-6 mx-auto ${
        widthClasses[block.width] || widthClasses.full
      }`}
    >
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={block.src}
          alt={block.alt || ""}
          fill
          className="object-cover"
        />
      </div>
      {block.caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}

// Button Block
function ButtonBlock({ block }) {
  const styleClasses = {
    primary: "bg-[#912923] text-white hover:bg-[#7a2320]",
    secondary:
      "border-2 border-[#912923] text-[#912923] hover:bg-[#912923] hover:text-white",
    dark: "bg-gray-900 text-white hover:bg-gray-800",
  };

  const alignClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <div
      className={`flex ${
        alignClasses[block.align] || alignClasses.center
      } mb-6`}
    >
      <Link
        href={block.href || "#"}
        className={`inline-block px-8 py-3 rounded-lg font-semibold transition-colors ${
          styleClasses[block.style] || styleClasses.primary
        }`}
      >
        {block.text}
      </Link>
    </div>
  );
}

// Video Block
function VideoBlock({ block }) {
  if (!block.youtubeId) return null;

  return (
    <div className="mb-6">
      {block.title && (
        <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
          {block.title}
        </h3>
      )}
      <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${block.youtubeId}`}
          title={block.title || "Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}

// Stats Block
function StatsBlock({ block }) {
  if (!block.items?.length) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6">
      {block.items.map((item, idx) => (
        <div key={idx} className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-[#912923] mb-2">
            {item.value}
          </div>
          <div className="text-gray-600 font-medium">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

// List Block
function ListBlock({ block }) {
  if (!block.items?.length) return null;

  const ListTag = block.style === "numbered" ? "ol" : "ul";

  return (
    <ListTag
      className={`mb-6 max-w-2xl mx-auto space-y-2 ${
        block.style === "numbered" ? "list-decimal pl-6" : ""
      }`}
    >
      {block.items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-gray-600">
          {block.style === "check" && (
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          )}
          {block.style === "bullet" && (
            <span className="w-2 h-2 bg-[#912923] rounded-full mt-2 flex-shrink-0" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ListTag>
  );
}

// Cards Block
function CardsBlock({ block }) {
  if (!block.items?.length) return null;

  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div
      className={`grid grid-cols-1 ${
        gridCols[block.columns] || gridCols[3]
      } gap-6 mb-6`}
    >
      {block.items.map((card, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
        >
          {card.image && (
            <div className="relative h-48">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 mb-4">{card.description}</p>
            {card.link && (
              <Link
                href={card.link}
                className="text-[#912923] font-medium hover:underline"
              >
                Learn More →
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// Spacer Block
function SpacerBlock({ block }) {
  return <div style={{ height: `${block.height || 40}px` }} />;
}
