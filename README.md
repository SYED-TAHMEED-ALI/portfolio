# Syed Tahmeed Ali — Animated Portfolio

A dependency-free HTML/CSS/JavaScript portfolio based on the supplied CV and portrait. Includes animated portrait tilt, scrolling typography, scroll reveals, skill filters, motion controls, email link, copy-email action and downloadable original CV. No installation, API keys or build required.

## Pehle preview dekhein

ZIP extract karein. `index.html` ko Chrome/Edge mein open karein. Internet ki zaroorat nahi. Copy-email browser restrictions ki wajah se local file mode mein manual address dikha sakta hai; deployed HTTPS page par clipboard available hota hai.

## GitHub Pages par live karein

1. GitHub par sign in karke new public repository banayein. Naam `portfolio` rakh sakte hain.
2. Add file > Upload files. Extracted folder ke ANDAR ki files upload karein: index.html, style.css, script.js, assets folder, README.md and .nojekyll. ZIP khud upload na karein. index.html repository ke root mein hona chahiye.
3. Commit changes karein.
4. Repository Settings > Pages > Build and deployment mein Source: Deploy from a branch select karein.
5. Branch: main, Folder: /(root), phir Save.
6. Deployment complete hone par Settings > Pages mein live URL milega. Project repo ka format https://YOUR-USERNAME.github.io/portfolio/ hota hai.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Personalize

- Text, experience, education, email and CV download: index.html.
- Colors and responsive styles: style.css, starting with :root.
- Skills: skills array in script.js.
- Portrait: replace assets/portrait.jpg with your preferred picture, retaining the same filename.
- CV: replace assets/Syed_Tahmeed_Ali_CV.docx, retaining the filename or update its link.
- LinkedIn is included in the contact section. Add GitHub and real project links when available; no fake links or project claims are included.
- The original CV download includes the phone number from your supplied CV. The page itself displays your email and city.

## Files

index.html — content and structure
style.css — styling, animations, responsive layout
script.js — filters, scrolling, portrait interaction and email copying
assets/portrait.jpg — optimized supplied photo
assets/Syed_Tahmeed_Ali_CV.docx — original supplied CV
.nojekyll — disables Jekyll processing

The site uses system fonts and local assets. Animation respects reduced-motion preferences and can also be paused using the top-right control. Email opens the visitor's email app; there is no backend contact form.
