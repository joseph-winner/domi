"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import PageHeader from "@/components/admin/PageHeader";
import SaveButton from "@/components/admin/SaveButton";
import ImageUpload from "@/components/admin/ImageUpload";
import {
  getCustomSection,
  addCustomSection,
  updateCustomSection,
} from "@/lib/firestore";
import {
  Plus,
  Trash2,
  GripVertical,
  Type,
  AlignLeft,
  Image,
  Link2,
  LayoutGrid,
  Video,
  List,
  BarChart3,
  Square,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Eye,
  EyeOff,
} from "lucide-react";

const BLOCK_TYPES = [
  {
    type: "heading",
    label: "Heading",
    icon: Type,
    description: "Add a title or heading",
  },
  {
    type: "paragraph",
    label: "Paragraph",
    icon: AlignLeft,
    description: "Add text content",
  },
  {
    type: "image",
    label: "Image",
    icon: Image,
    description: "Add an image with caption",
  },
  {
    type: "button",
    label: "Button",
    icon: Link2,
    description: "Add a call-to-action button",
  },
  {
    type: "video",
    label: "Video Embed",
    icon: Video,
    description: "Embed a YouTube video",
  },
  {
    type: "cards",
    label: "Cards Grid",
    icon: LayoutGrid,
    description: "Add a grid of cards",
  },
  {
    type: "stats",
    label: "Statistics",
    icon: BarChart3,
    description: "Display numbers/stats",
  },
  {
    type: "list",
    label: "List",
    icon: List,
    description: "Add a bulleted list",
  },
  {
    type: "spacer",
    label: "Spacer",
    icon: Square,
    description: "Add vertical spacing",
  },
];

const createDefaultBlock = (type) => {
  const id = Date.now().toString();

  switch (type) {
    case "heading":
      return { id, type, content: "New Heading", level: "h2", align: "center" };
    case "paragraph":
      return {
        id,
        type,
        content: "Enter your paragraph text here...",
        align: "left",
      };
    case "image":
      return { id, type, src: "", alt: "", caption: "", width: "full" };
    case "button":
      return {
        id,
        type,
        text: "Click Here",
        href: "#",
        style: "primary",
        align: "center",
      };
    case "video":
      return { id, type, youtubeId: "", title: "" };
    case "cards":
      return {
        id,
        type,
        columns: 3,
        items: [
          {
            title: "Card 1",
            description: "Description here",
            image: "",
            link: "",
          },
          {
            title: "Card 2",
            description: "Description here",
            image: "",
            link: "",
          },
          {
            title: "Card 3",
            description: "Description here",
            image: "",
            link: "",
          },
        ],
      };
    case "stats":
      return {
        id,
        type,
        items: [
          { value: "100+", label: "Patients Served" },
          { value: "50+", label: "Medical Camps" },
          { value: "20+", label: "Countries" },
        ],
      };
    case "list":
      return {
        id,
        type,
        style: "bullet",
        items: ["Item 1", "Item 2", "Item 3"],
      };
    case "spacer":
      return { id, type, height: "40" };
    default:
      return { id, type };
  }
};

export default function SectionEditorPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const isNew = params.id === "new";

  const [section, setSection] = useState({
    name: "",
    description: "",
    enabled: true,
    backgroundColor: "#ffffff",
    paddingTop: "80",
    paddingBottom: "80",
    blocks: [],
  });
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [expandedBlocks, setExpandedBlocks] = useState({});
  const [showBlockPicker, setShowBlockPicker] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/admin");
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (!isNew && params.id) {
      loadSection();
    }
  }, [params.id, isNew]);

  async function loadSection() {
    setLoading(true);
    const data = await getCustomSection(params.id);
    if (data) {
      setSection(data);
      // Expand all blocks by default when editing
      const expanded = {};
      data.blocks?.forEach((block) => {
        expanded[block.id] = true;
      });
      setExpandedBlocks(expanded);
    } else {
      router.push("/admin/dashboard/sections");
    }
    setLoading(false);
  }

  async function handleSave() {
    if (!section.name.trim()) {
      alert("Please enter a section name");
      return;
    }

    setSaving(true);

    const sectionData = {
      name: section.name,
      description: section.description,
      enabled: section.enabled,
      backgroundColor: section.backgroundColor,
      paddingTop: section.paddingTop,
      paddingBottom: section.paddingBottom,
      blocks: section.blocks,
    };

    let result;
    if (isNew) {
      result = await addCustomSection(sectionData);
      if (result.success) {
        router.push(`/admin/dashboard/sections/${result.id}`);
      }
    } else {
      result = await updateCustomSection(params.id, sectionData);
    }

    setSaving(false);

    if (!result.success) {
      alert("Failed to save: " + result.error);
    }
  }

  function addBlock(type) {
    const newBlock = createDefaultBlock(type);
    setSection((prev) => ({
      ...prev,
      blocks: [...prev.blocks, newBlock],
    }));
    setExpandedBlocks((prev) => ({ ...prev, [newBlock.id]: true }));
    setShowBlockPicker(false);
  }

  function updateBlock(blockId, updates) {
    setSection((prev) => ({
      ...prev,
      blocks: prev.blocks.map((block) =>
        block.id === blockId ? { ...block, ...updates } : block
      ),
    }));
  }

  function deleteBlock(blockId) {
    if (!confirm("Delete this block?")) return;
    setSection((prev) => ({
      ...prev,
      blocks: prev.blocks.filter((block) => block.id !== blockId),
    }));
  }

  function moveBlock(blockId, direction) {
    setSection((prev) => {
      const blocks = [...prev.blocks];
      const index = blocks.findIndex((b) => b.id === blockId);
      if (
        (direction === -1 && index === 0) ||
        (direction === 1 && index === blocks.length - 1)
      ) {
        return prev;
      }
      const temp = blocks[index];
      blocks[index] = blocks[index + direction];
      blocks[index + direction] = temp;
      return { ...prev, blocks };
    });
  }

  function toggleBlockExpand(blockId) {
    setExpandedBlocks((prev) => ({
      ...prev,
      [blockId]: !prev[blockId],
    }));
  }

  if (authLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#912923]"></div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#912923]"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => router.push("/admin/dashboard/sections")}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Sections
      </button>

      <div className="flex items-center justify-between mb-6">
        <PageHeader
          title={isNew ? "Create Section" : "Edit Section"}
          description={
            isNew
              ? "Build a new custom section with various content blocks."
              : `Editing "${section.name}"`
          }
        />
        <SaveButton onSave={handleSave} saving={saving} />
      </div>

      {/* Section Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Section Settings
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Section Name *
            </label>
            <input
              type="text"
              value={section.name}
              onChange={(e) =>
                setSection((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
              placeholder="e.g., Testimonials, Team Members"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description (Optional)
            </label>
            <input
              type="text"
              value={section.description}
              onChange={(e) =>
                setSection((prev) => ({ ...prev, description: e.target.value }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
              placeholder="Brief description for reference"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Background Color
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={section.backgroundColor}
                onChange={(e) =>
                  setSection((prev) => ({
                    ...prev,
                    backgroundColor: e.target.value,
                  }))
                }
                className="w-12 h-10 rounded border border-gray-300 cursor-pointer"
              />
              <input
                type="text"
                value={section.backgroundColor}
                onChange={(e) =>
                  setSection((prev) => ({
                    ...prev,
                    backgroundColor: e.target.value,
                  }))
                }
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Padding Top (px)
              </label>
              <input
                type="number"
                value={section.paddingTop}
                onChange={(e) =>
                  setSection((prev) => ({
                    ...prev,
                    paddingTop: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Padding Bottom (px)
              </label>
              <input
                type="number"
                value={section.paddingBottom}
                onChange={(e) =>
                  setSection((prev) => ({
                    ...prev,
                    paddingBottom: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={section.enabled}
                onChange={(e) =>
                  setSection((prev) => ({ ...prev, enabled: e.target.checked }))
                }
                className="w-4 h-4 text-[#912923] border-gray-300 rounded focus:ring-[#912923]"
              />
              <span className="text-sm font-medium text-gray-700">
                Section is visible on the website
              </span>
              {section.enabled ? (
                <Eye className="w-4 h-4 text-green-600" />
              ) : (
                <EyeOff className="w-4 h-4 text-gray-400" />
              )}
            </label>
          </div>
        </div>
      </div>

      {/* Content Blocks */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Content Blocks ({section.blocks.length})
          </h3>
        </div>

        {section.blocks.length === 0 ? (
          <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-lg">
            <p className="text-gray-500 mb-4">
              No blocks added yet. Start building your section!
            </p>
          </div>
        ) : (
          <div className="space-y-3 mb-4">
            {section.blocks.map((block, index) => (
              <BlockEditor
                key={block.id}
                block={block}
                index={index}
                total={section.blocks.length}
                expanded={expandedBlocks[block.id]}
                onToggleExpand={() => toggleBlockExpand(block.id)}
                onUpdate={(updates) => updateBlock(block.id, updates)}
                onDelete={() => deleteBlock(block.id)}
                onMoveUp={() => moveBlock(block.id, -1)}
                onMoveDown={() => moveBlock(block.id, 1)}
              />
            ))}
          </div>
        )}

        {/* Add Block Button */}
        <div className="relative">
          <button
            onClick={() => setShowBlockPicker(!showBlockPicker)}
            className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-[#912923] hover:text-[#912923] transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Block
          </button>

          {showBlockPicker && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 p-4 z-10">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {BLOCK_TYPES.map((blockType) => (
                  <button
                    key={blockType.type}
                    onClick={() => addBlock(blockType.type)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 border border-gray-200 hover:border-[#912923] transition-colors text-left"
                  >
                    <blockType.icon className="w-5 h-5 text-[#912923]" />
                    <div>
                      <div className="font-medium text-gray-900 text-sm">
                        {blockType.label}
                      </div>
                      <div className="text-xs text-gray-500">
                        {blockType.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowBlockPicker(false)}
                className="mt-3 w-full py-2 text-sm text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Block Editor Component
function BlockEditor({
  block,
  index,
  total,
  expanded,
  onToggleExpand,
  onUpdate,
  onDelete,
  onMoveUp,
  onMoveDown,
}) {
  const blockType = BLOCK_TYPES.find((t) => t.type === block.type);
  const Icon = blockType?.icon || Square;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {/* Block Header */}
      <div
        className="flex items-center gap-3 px-4 py-3 bg-gray-50 cursor-pointer"
        onClick={onToggleExpand}
      >
        <GripVertical className="w-4 h-4 text-gray-400" />
        <Icon className="w-4 h-4 text-[#912923]" />
        <span className="font-medium text-gray-900 flex-1">
          {blockType?.label || block.type}
          {block.type === "heading" && block.content && (
            <span className="font-normal text-gray-500 ml-2">
              - {block.content.substring(0, 30)}...
            </span>
          )}
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMoveUp();
            }}
            disabled={index === 0}
            className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMoveDown();
            }}
            disabled={index === total - 1}
            className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="p-1 text-gray-400 hover:text-red-600"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          {expanded ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </div>
      </div>

      {/* Block Content */}
      {expanded && (
        <div className="p-4 border-t border-gray-200">
          <BlockFields block={block} onUpdate={onUpdate} />
        </div>
      )}
    </div>
  );
}

// Block Fields Component - renders different fields based on block type
function BlockFields({ block, onUpdate }) {
  switch (block.type) {
    case "heading":
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Heading Text
            </label>
            <input
              type="text"
              value={block.content}
              onChange={(e) => onUpdate({ content: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Level
              </label>
              <select
                value={block.level}
                onChange={(e) => onUpdate({ level: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
              >
                <option value="h1">H1 - Main Title</option>
                <option value="h2">H2 - Section Title</option>
                <option value="h3">H3 - Subsection</option>
                <option value="h4">H4 - Small Heading</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alignment
              </label>
              <select
                value={block.align}
                onChange={(e) => onUpdate({ align: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </div>
          </div>
        </div>
      );

    case "paragraph":
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Paragraph Text
            </label>
            <textarea
              value={block.content}
              onChange={(e) => onUpdate({ content: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Alignment
            </label>
            <select
              value={block.align}
              onChange={(e) => onUpdate({ align: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </div>
        </div>
      );

    case "image":
      return (
        <div className="space-y-4">
          <ImageUpload
            label="Image"
            currentImage={block.src}
            onUpload={(url) => onUpdate({ src: url })}
            folder="custom-sections"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alt Text
              </label>
              <input
                type="text"
                value={block.alt}
                onChange={(e) => onUpdate({ alt: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
                placeholder="Describe the image"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Width
              </label>
              <select
                value={block.width}
                onChange={(e) => onUpdate({ width: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
              >
                <option value="small">Small (25%)</option>
                <option value="medium">Medium (50%)</option>
                <option value="large">Large (75%)</option>
                <option value="full">Full Width</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Caption (Optional)
            </label>
            <input
              type="text"
              value={block.caption}
              onChange={(e) => onUpdate({ caption: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
            />
          </div>
        </div>
      );

    case "button":
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Button Text
              </label>
              <input
                type="text"
                value={block.text}
                onChange={(e) => onUpdate({ text: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Link URL
              </label>
              <input
                type="text"
                value={block.href}
                onChange={(e) => onUpdate({ href: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
                placeholder="https://..."
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Style
              </label>
              <select
                value={block.style}
                onChange={(e) => onUpdate({ style: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
              >
                <option value="primary">Primary (Red)</option>
                <option value="secondary">Secondary (Outline)</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alignment
              </label>
              <select
                value={block.align}
                onChange={(e) => onUpdate({ align: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </div>
          </div>
        </div>
      );

    case "video":
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              YouTube Video ID
            </label>
            <input
              type="text"
              value={block.youtubeId}
              onChange={(e) => onUpdate({ youtubeId: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
              placeholder="e.g., dQw4w9WgXcQ"
            />
            <p className="text-xs text-gray-500 mt-1">
              The ID is the part after "v=" in the YouTube URL
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Video Title (Optional)
            </label>
            <input
              type="text"
              value={block.title}
              onChange={(e) => onUpdate({ title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
            />
          </div>
        </div>
      );

    case "stats":
      return (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Statistics Items
          </label>
          {block.items.map((item, idx) => (
            <div key={idx} className="flex gap-2 items-start">
              <div className="flex-1">
                <input
                  type="text"
                  value={item.value}
                  onChange={(e) => {
                    const newItems = [...block.items];
                    newItems[idx] = { ...item, value: e.target.value };
                    onUpdate({ items: newItems });
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
                  placeholder="100+"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  value={item.label}
                  onChange={(e) => {
                    const newItems = [...block.items];
                    newItems[idx] = { ...item, label: e.target.value };
                    onUpdate({ items: newItems });
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
                  placeholder="Label"
                />
              </div>
              <button
                onClick={() => {
                  const newItems = block.items.filter((_, i) => i !== idx);
                  onUpdate({ items: newItems });
                }}
                className="p-2 text-gray-400 hover:text-red-600"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          <button
            onClick={() =>
              onUpdate({ items: [...block.items, { value: "", label: "" }] })
            }
            className="text-sm text-[#912923] hover:underline"
          >
            + Add Stat
          </button>
        </div>
      );

    case "list":
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              List Style
            </label>
            <select
              value={block.style}
              onChange={(e) => onUpdate({ style: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
            >
              <option value="bullet">Bullet Points</option>
              <option value="numbered">Numbered</option>
              <option value="check">Checkmarks</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              List Items
            </label>
            {block.items.map((item, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => {
                    const newItems = [...block.items];
                    newItems[idx] = e.target.value;
                    onUpdate({ items: newItems });
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
                />
                <button
                  onClick={() => {
                    const newItems = block.items.filter((_, i) => i !== idx);
                    onUpdate({ items: newItems });
                  }}
                  className="p-2 text-gray-400 hover:text-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            <button
              onClick={() => onUpdate({ items: [...block.items, ""] })}
              className="text-sm text-[#912923] hover:underline"
            >
              + Add Item
            </button>
          </div>
        </div>
      );

    case "cards":
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Columns
            </label>
            <select
              value={block.columns}
              onChange={(e) => onUpdate({ columns: parseInt(e.target.value) })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
            >
              <option value={2}>2 Columns</option>
              <option value={3}>3 Columns</option>
              <option value={4}>4 Columns</option>
            </select>
          </div>
          <label className="block text-sm font-medium text-gray-700">
            Cards
          </label>
          {block.items.map((card, idx) => (
            <div
              key={idx}
              className="p-3 border border-gray-200 rounded-lg space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">
                  Card {idx + 1}
                </span>
                <button
                  onClick={() => {
                    const newItems = block.items.filter((_, i) => i !== idx);
                    onUpdate({ items: newItems });
                  }}
                  className="text-gray-400 hover:text-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <input
                type="text"
                value={card.title}
                onChange={(e) => {
                  const newItems = [...block.items];
                  newItems[idx] = { ...card, title: e.target.value };
                  onUpdate({ items: newItems });
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                placeholder="Card Title"
              />
              <textarea
                value={card.description}
                onChange={(e) => {
                  const newItems = [...block.items];
                  newItems[idx] = { ...card, description: e.target.value };
                  onUpdate({ items: newItems });
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                placeholder="Card Description"
                rows={2}
              />
              <input
                type="text"
                value={card.link}
                onChange={(e) => {
                  const newItems = [...block.items];
                  newItems[idx] = { ...card, link: e.target.value };
                  onUpdate({ items: newItems });
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                placeholder="Link URL (optional)"
              />
            </div>
          ))}
          <button
            onClick={() =>
              onUpdate({
                items: [
                  ...block.items,
                  { title: "", description: "", image: "", link: "" },
                ],
              })
            }
            className="text-sm text-[#912923] hover:underline"
          >
            + Add Card
          </button>
        </div>
      );

    case "spacer":
      return (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Height (px)
          </label>
          <input
            type="number"
            value={block.height}
            onChange={(e) => onUpdate({ height: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#912923] focus:border-transparent"
            min="10"
            max="200"
          />
        </div>
      );

    default:
      return <p className="text-gray-500">Unknown block type</p>;
  }
}
