# Task 2 Report: Add the official Facebook profile

## Scope completed

- Updated `layout/Footer.js` to import `FaFacebookF` from `react-icons/fa6` and add the official Facebook item to its existing `socials` array.
- Updated `app/contact/page.js` with the same import and social item.
- Used the exact supplied URL in both places:
  `https://www.facebook.com/people/Doctors-on-Mission-International/61573255932279/#`
- Preserved the existing mapped `target="_blank"` and `rel="noreferrer"` attributes in both files.
- Did not stage, commit, reset, checkout, stash, or modify unrelated source files.

## Test-first / focused validation

1. **Red check:** Before editing, ran:

   ```powershell
   rg -n "Doctors-on-Mission-International/61573255932279|FaFacebookF" layout/Footer.js app/contact/page.js
   ```

   It exited with code 1 because neither Facebook URL nor `FaFacebookF` was present.

2. **Green check:** After the minimal patch, reran the same command. It exited 0 and found both the import and official URL in each of the two files.

3. **Lint:** Ran `npm run lint`. It exited 1 with the known repository baseline of **58 errors and 41 warnings**. The output contained no Facebook-specific lint issue. Existing `layout/Footer.js` still has the prior `@next/next/no-img-element` warning.

## Concerns

- The full lint command remains non-green solely due to the pre-existing project baseline documented above; this task introduced no observed lint violations.
