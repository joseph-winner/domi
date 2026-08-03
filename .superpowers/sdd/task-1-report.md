# Task 1 Report: Official Social Links and Stat-Card Border

## Implementation

- Updated `layout/Footer.js` to use `FaXTwitter`, `FaYoutube`, `FaLinkedinIn`, and `FaInstagram` from `react-icons/fa6`.
- Replaced the footer's placeholder social destinations with the four supplied official URLs. Both footer social-link renderings now use `target="_blank"` and `rel="noreferrer"`.
- Added the same icon imports and exact social-link data to `app/contact/page.js`.
- Added a labelled, flex-wrapped "Follow Doctors On Mission" row immediately after the contact reach-card list. Each control has `href`, `aria-label`, `target="_blank"`, and `rel="noreferrer"`; styling uses the existing brand colour variables.
- Removed only `border border-[color:var(--line)]` from the homepage impact-card class in `components/homepage/HeroSection.jsx`.

## Test-Driven Development and Validation

The task brief specifies no component-test runner. I followed the applicable validation workflow by recording the required pre-edit lint baseline before changing production code, then rerunning the specified checks after the edit.

### Pre-edit baseline

`npm run lint`

- Exited with 58 errors and 41 warnings (99 problems), all in pre-existing project code.
- Representative existing failures include React hook naming rules in multiple pages, React compiler rules in admin pages, the existing internal anchor error in `components/homepage/HeroSection.jsx`, and synchronous state updates in `context` files.

### Final validation

`npm run lint`

- Still reports the same baseline: 58 errors and 41 warnings (99 problems). The requested project-wide zero-error expectation cannot be met without altering unrelated existing code, which was explicitly out of scope.

`rg -n "DoctorsMission/status/2074434034881400981|doctorsonmissioninternational|doctors-on-mission-international|doctors_on_mission_int|border border-\\[color:var\\(--line\\)\\] bg=\\[#faf9f6\\]" layout/Footer.js app/contact/page.js components/homepage/HeroSection.jsx`

- Found all four supplied URLs in both `layout/Footer.js` and `app/contact/page.js`.
- Found no occurrence of the removed impact-card border class.

Additional checks:

- `git diff --check` reported no whitespace errors for the scoped source changes.
- Focused ESLint still reports pre-existing hook naming errors in `app/contact/page.js`, the pre-existing internal-anchor error in `HeroSection.jsx`, and the existing footer image warning; it reports no social-link-specific errors.

## Files Changed

- `layout/Footer.js`
- `app/contact/page.js`
- `components/homepage/HeroSection.jsx`
- `.superpowers/sdd/task-1-report.md`

## Self-review

- Confirmed all four official destinations are exact and use the requested Fa6 brand icons.
- Confirmed both footer locations and every contact social control open externally with `noreferrer`.
- Confirmed the contact controls are accessible through labels and a visible group label.
- Confirmed only the specified border utilities were removed from the stat-card class.
- Preserved pre-existing, unrelated user changes and did not stage or commit anything.

## Concerns

- Repository-wide lint is blocked by 58 pre-existing errors. These were present before this task and are outside the requested scope.
