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
