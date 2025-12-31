# Admin Dashboard Guide - Pages vs Sections

## Overview

The dashboard has been updated to clearly distinguish between **Pages** (routes) and **Sections** (homepage components), plus a new **Blog Management System**.

## Key Concepts

### 1. **Homepage Sections** (Components)

These are reusable components that appear on the homepage. They can be reordered using the Page Order feature.

**Examples:**

- Hero Section
- About Section
- Missions Section
- Services Section
- Programs Section
- Medical Camp Section
- Works Section
- Fundraising Section
- Video Section
- Footer
- Navbar

**Location in Admin:** `/admin/dashboard/[section-name]`
**Location in Code:** `components/homepage/`

### 2. **Static Pages** (Routes)

These are individual page routes that have their own URLs and are NOT part of the homepage.

**Examples:**

- About Page (`/about`)
- Contact Page (`/contact`)
- Gallery Page (`/gallery`)
- Programs Page (`/programs`)
- Support Page (`/support`)
- Volunteer Page (`/volunteer`)
- Join Team Page (`/jointeam`)
- Press Page (`/press`)
- Reports Page (`/report`)

**Location in Code:** `app/[page-name]/page.js`

### 3. **Blog System**

A complete blog management system with:

- Create, edit, and delete blog posts
- Featured posts
- Categories/tags
- Author information
- Published/draft status
- Dynamic blog detail pages with slugs

**Location in Admin:** `/admin/dashboard/blogs`
**Blog Detail Pages:** `/blog/[slug]`

## How to Use

### Managing Homepage Sections

1. Go to the Dashboard
2. Find the "Homepage Sections" panel
3. Click on any section to edit its content
4. Use "Manage Order" to reorder sections on the homepage

### Managing Blog Posts

1. Go to "Blog Posts" in the sidebar or dashboard
2. Click "New Blog Post" to create a new post
3. Fill in:
   - Title (auto-generates URL slug)
   - Excerpt
   - Category/Tag
   - Author information
   - Featured image
   - Full content
   - Publishing settings (Published/Draft, Featured)
4. Save the post
5. View it on `/blog` page
6. Click "Read more" to see full post at `/blog/[slug]`

### Managing Static Pages

Static pages are listed in the dashboard for reference. To edit their content, you'll need to edit the corresponding file in `app/[page-name]/page.js`.

## File Structure

```
app/
├── page.js                      # Homepage (uses DynamicHomePage)
├── blog/
│   ├── page.js                  # Blog listing page
│   └── [slug]/
│       └── page.js              # Dynamic blog detail page
├── about/
│   └── page.js                  # Static about page
├── contact/
│   └── page.js                  # Static contact page
└── admin/
    └── dashboard/
        ├── page.js              # Dashboard overview
        ├── blogs/
        │   ├── page.js          # Blog list
        │   └── [id]/
        │       └── page.js      # Blog editor
        ├── hero/
        │   └── page.js          # Hero section editor
        ├── about/
        │   └── page.js          # About section editor
        └── [other sections]/
            └── page.js

components/
├── homepage/
│   ├── DynamicHomePage.jsx      # Homepage section renderer
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   └── [other sections]
└── admin/
    ├── AdminSidebar.jsx
    └── [other admin components]

lib/
└── firestore.js                 # Firebase functions including blog CRUD
```

## Firebase Collections

### Content Collection

Stores homepage section content:

- `content/hero`
- `content/about`
- `content/missions`
- etc.

### Blogs Collection

Stores all blog posts:

```javascript
{
  title: "Blog Title",
  slug: "blog-title",
  excerpt: "Short description...",
  content: "Full blog content...",
  category: "Field Story",
  author: "Dr. John Doe",
  authorRole: "Surgeon",
  readTime: "5 min read",
  featuredImage: "/img/blog.jpg",
  published: true,
  featured: false,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Custom Sections Collection

Custom sections created through the page builder.

### Page Order Collection

Defines the order of sections on the homepage.

## New Features

### Blog System

- ✅ Full CRUD operations for blog posts
- ✅ Rich text content support
- ✅ Featured images
- ✅ Author attribution
- ✅ Categories/tags
- ✅ Published/draft status
- ✅ Featured posts
- ✅ Dynamic blog detail pages with SEO-friendly URLs
- ✅ "Read more" functionality

### Dashboard Improvements

- ✅ Clear separation of Pages vs Sections
- ✅ Visual categorization with icons
- ✅ Quick access to all content types
- ✅ Better navigation structure

## Tips

1. **Homepage Sections** are components that appear on the homepage and can be reordered
2. **Static Pages** are standalone routes with their own URLs
3. **Blog Posts** are dynamic content that can be added/edited through the admin panel
4. Use the "Manage Order" feature to rearrange homepage sections
5. Mark blog posts as "Featured" to display them prominently
6. Blog URLs are automatically generated from the title (e.g., "My Story" → `/blog/my-story`)
