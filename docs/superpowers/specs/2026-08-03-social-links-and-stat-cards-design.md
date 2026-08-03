# Social links and homepage stat-card cleanup

## Scope
- Hard-code the supplied X, YouTube, LinkedIn, and Instagram profile URLs in the shared footer.
- Use their corresponding `react-icons` brand icons and open external destinations in a new tab safely.
- Add the same four icon links to the contact page under the "Reach us directly" panel.
- Remove the border from the three impact cards immediately below the homepage hero. Preserve their layout, background color, padding, corner radius, and hover behavior.

## Implementation
- `layout/Footer.js`: replace placeholder social entries with the four supplied destination URLs and `react-icons/fa6` brand icons. The existing two footer icon locations will render the same data.
- `app/contact/page.js`: define the same permanent social-link list and render an accessible row of branded icon links below the existing contact cards.
- `components/homepage/HeroSection.jsx`: delete only the border utility from the stat-card class list.

## Validation
- Run `npm run lint`.
- Inspect the changed files to verify every supplied URL, all four icons, external-link attributes, and the removed stat-card border.

## Amendment
- Include Facebook using https://www.facebook.com/people/Doctors-on-Mission-International/61573255932279/# in the same permanent social-link sets.
