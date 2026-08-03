# Social Links and Stat Cards Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Display the four official social profiles in the footer and contact page, and remove the visible border from homepage impact cards.

**Architecture:** Keep the supplied profile URLs as local constants in the shared footer and contact page. Render each item through the existing map-based social-icon patterns, using brand icons from `react-icons`. Restrict the visual cleanup to the impact-card Tailwind class in `HeroSection`.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, `react-icons`, ESLint.

## Global Constraints

- Use exactly the supplied X, YouTube, LinkedIn, and Instagram URLs as permanent hard-coded destinations.
- Use `react-icons` brand icons; do not add dependencies.
- External social links open in a new tab and use `rel="noreferrer"`.
- Preserve layout and styling except for adding the social icon row and removing the stat-card border.

---

### Task 1: Wire official social links and remove the stat-card border

**Files:**
- Modify: `layout/Footer.js:1-160`
- Modify: `app/contact/page.js:3-332`
- Modify: `components/homepage/HeroSection.jsx:195-202`
- Test: none (the repository has no component-test runner configured)

**Interfaces:**
- Consumes: the installed `react-icons` package and existing Tailwind utility classes.
- Produces: accessible, externally linked X, YouTube, LinkedIn, and Instagram icon controls in both site locations.

- [ ] **Step 1: Confirm the current lint baseline**

Run: `npm run lint`

Expected: ESLint completes without errors, or any existing errors are recorded before the edit.

- [ ] **Step 2: Replace the footer social definition with official destinations and brand icons**

In `layout/Footer.js`, replace the social icon import and `socials` constant so it uses `FaXTwitter`, `FaYoutube`, `FaLinkedinIn`, and `FaInstagram` from `react-icons/fa6` and exactly this data:

```js
const socials = [
  { label: "X", href: "https://x.com/DoctorsMission/status/2074434034881400981", Icon: FaXTwitter },
  { label: "YouTube", href: "https://www.youtube.com/@doctorsonmissioninternational", Icon: FaYoutube },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/doctors-on-mission-international/?originalSubdomain=ug", Icon: FaLinkedinIn },
  { label: "Instagram", href: "https://www.instagram.com/doctors_on_mission_int/", Icon: FaInstagram },
];
```

Add `target="_blank"` and `rel="noreferrer"` to both social-link renderings in the footer.

- [ ] **Step 3: Add the same social controls to the contact page**

In `app/contact/page.js`, import the same four icons from `react-icons/fa6`, declare a `socials` array with the exact four objects from Step 2 before the return statement, then render it immediately after the `reachCards` list as a labelled, flex-wrapped row. Each control must set `href`, `aria-label`, `target="_blank"`, and `rel="noreferrer"` and preserve the contact-page palette using the existing brand colour variables.

- [ ] **Step 4: Remove only the homepage impact-card border**

In `components/homepage/HeroSection.jsx`, change the three-card class from:

```jsx
className="rounded-[16px] border border-[color:var(--line)] bg-[#faf9f6] p-8"
```

to:

```jsx
className="rounded-[16px] bg-[#faf9f6] p-8"
```

- [ ] **Step 5: Validate the final result**

Run: `npm run lint`

Expected: ESLint exits with code 0.

Run: `rg -n "DoctorsMission/status/2074434034881400981|doctorsonmissioninternational|doctors-on-mission-international|doctors_on_mission_int|border border-\[color:var\(--line\)\] bg=\[#faf9f6\]" layout/Footer.js app/contact/page.js components/homepage/HeroSection.jsx`

Expected: all four URLs appear in both `layout/Footer.js` and `app/contact/page.js`; the old stat-card border class has no match.

- [ ] **Step 6: Commit the scoped change**

```powershell
git add layout/Footer.js app/contact/page.js components/homepage/HeroSection.jsx docs/superpowers/specs/2026-08-03-social-links-and-stat-cards-design.md docs/superpowers/plans/2026-08-03-social-links-and-stat-cards-plan.md
git commit -m "feat: add official social links"
```

Expected: Git creates one commit containing the requested UI change and its approved planning documentation.

### Task 2: Add the official Facebook profile

**Files:**
- Modify: `layout/Footer.js`
- Modify: `app/contact/page.js`

**Interfaces:**
- Extends the existing `socials` arrays with one brand-icon item.

- [ ] **Step 1: Add Facebook to both social arrays**

Import `FaFacebookF` from `react-icons/fa6` in both files. Add this item to each existing `socials` array:

```js
{ label: "Facebook", href: "https://www.facebook.com/people/Doctors-on-Mission-International/61573255932279/#", Icon: FaFacebookF },
```

The existing mapped controls must retain their external-link attributes.

- [ ] **Step 2: Validate**

Run: `rg -n "Doctors-on-Mission-International/61573255932279|FaFacebookF" layout/Footer.js app/contact/page.js`

Expected: The Facebook URL and icon import appear in both files.

Run: `npm run lint`

Expected: the documented existing baseline of 58 errors and 41 warnings, with no Facebook-specific lint error.
