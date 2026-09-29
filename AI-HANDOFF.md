# DB Window Tint & Car Audio: deployment handoff

Prepared September 29, 2026. This is a self-contained continuation brief for an assistant helping the shop's recipient launch the existing website. The prior conversation is not needed. Begin work when the recipient requests the launch; this document contains no credentials and does not establish access to any account.

## The task

Launch the existing site using the recipient's **GitHub + Vercel** accounts. Preserve the approved dark automotive design, red accents, typography, photos, responsive layout, gallery, and project-message planner. Do not rebuild it in another framework or move it to a different hosting provider unless the recipient requests that.

The requested outcome is a working public website owned and maintained through the recipient's accounts, with a clear method for future updates. The shop's custom domain is not yet known. A verified Vercel URL is a useful launch milestone while domain setup is pending; report that distinction accurately.

## Source and entry points

- Source/template: https://github.com/NorthStarDigitalLLC/db-window-tint-website
- Approved appearance: https://www.northstardigitalweb.com/db-window-tint/
- Owner handoff page: https://www.northstardigitalweb.com/db-window-tint/transfer/
- GitHub/Vercel setup: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNorthStarDigitalLLC%2Fdb-window-tint-website
- This brief as plain text: https://raw.githubusercontent.com/NorthStarDigitalLLC/db-window-tint-website/main/AI-HANDOFF.md

The full handoff ZIP includes the source, this brief, README, starter message, deployment configuration, and a SHA-256 file manifest. The older `DB-Window-Tint-Website.zip` is only the 16-file static website backup; it is not the full AI handoff. You may use the attached source or obtain it from the public template. Compare any existing recipient work before replacing it.

**NorthStar's repository and domain are the source and demo, not the recipient's production destination.** Do not push recipient changes back to the template, redeploy the NorthStar homepage, or change NorthStar DNS. Create or reuse the recipient's own repository and Vercel project. Do not create duplicate copies if they already started setup.

## What is already built

Plain HTML, CSS, and browser JavaScript. There is no framework, package manager, backend, database, server-side form, environment secret, or OpenAI API key required.

| File | Purpose |
| --- | --- |
| `index.html` | Shop content, contact details, hours, and page structure |
| `styles.css` | Desktop/mobile styling and local font declarations |
| `app.js` | Hero selector, gallery/filter/modal, message planner, clipboard fallback |
| `assets/` | Six WebP vehicle photos, five WOFF2 font files, and two font licenses |
| `vercel.json` | Static deployment settings |
| `.vercelignore` | Keeps handoff documents out of the published site |
| `HANDOFF-MANIFEST.json` | Included-file checksums; verify before changing packaged files |

Vercel configuration: Framework **Other** (`framework: null`), root directory **./**, output directory **.**, empty install and build commands. Production branch **main**. No environment variables are required. Keep assets relative so the site works at the root of the recipient's domain. The NorthStar demo has a special `/db-window-tint/` base path and `noindex`; those settings are deliberately absent from the standalone source. Do not copy them into production.

The message planner prepares text for review, opens the visitor's texting app with a draft, or copies the text. It does not send automatically, reserve an appointment, take payment, or store a submission. Do not add a backend to make deployment possible; none is needed.

## Start with the receiving environment

1. Read this brief and inspect the source. Check what file, browser, shell, GitHub, and Vercel tools the current session actually has. Do not assume it inherits the previous assistant's sessions or privileges.
2. Determine the recipient's GitHub account, intended Vercel account/team, and whether the project already exists. Use authenticated account state where available; ask only for details that remain missing. Continue independent preparation while the recipient signs in.
3. Have the recipient complete sign-in, MFA, OAuth consent, and billing steps directly when required. Never request pasted passwords/tokens. Do not copy NorthStar credentials or reuse a different user's account.
4. Vercel Hobby is for personal, non-commercial use under the documentation checked at preparation time. This shop needs a commercial-compatible plan such as Pro. Verify current terms and have the recipient approve any purchase; this handoff does not approve charges, trials, subscriptions, or domain purchases.
5. If the current ChatGPT session cannot perform deployment, identify the actual missing capability and provide the minimal assisted path through the setup link. Do not imply that an ordinary text-only session has tools or that installing an app alone guarantees hosting access. Follow current permissions rather than trying to bypass a sign-in or security prompt.

## Deployment path

Use the existing GitHub/Vercel setup button if browser access is available. It copies the public source into the recipient's GitHub account and creates the connected Vercel project. Confirm the selected owner/team before submitting. Let the recipient finish any account or plan step.

Alternatively, create a repository from the template in the recipient's GitHub account and import that repository into Vercel. Choose one route; do not run both. With CLI/API access, use the same ownership and configuration, and authenticate through the supported connection. Do not manually initialize a duplicate deployment when a valid connected project already exists.

Keep the provided static configuration. Inspect the actual build result; a pushed commit alone is not proof of a successful deployment. Verify the recipient's production branch and Vercel Git integration so future `main` updates publish automatically.

If the recipient supplies an owned domain, add it to their Vercel project and use the exact records Vercel returns. Preserve existing MX/TXT/email records. Do not replace an unrelated live site, move an existing domain, or purchase a domain without specific authorization. Verify HTTPS and the chosen hostname. If the domain is not available, publish to the provided `.vercel.app` address and clearly list domain setup as outstanding.

## Verify before calling it launched

Record actual results for the new deployment, not just the prior demo:

- Public HTTPS page returns the shop's page without requiring a Vercel login; CSS, JavaScript, photos, and fonts load from the new site.
- No unexpected browser errors, missing files, broken relative paths, or NorthStar base path. No accidental `noindex` from the demo.
- Desktop around 1440px and mobile at 390px/320px remain usable without horizontal page overflow. Phone and project actions remain reachable after scrolling.
- Hero "Next ride" changes photo, caption, and counter across six photos.
- Gallery All has six photos; Cars and Trucks/SUVs each have three. Open a photo; test next/previous and Escape, and check focus returns appropriately.
- Select tint, audio, and both; enter a vehicle and optional note. Confirm the generated draft matches. Empty/whitespace vehicle input is rejected. Editing inputs after preparing a draft hides the stale draft.
- The SMS and phone links target the confirmed shop number. Clipboard copy works on HTTPS or exposes the manual fallback. Inspect these links without sending test texts or making calls unless the recipient asks.
- Navigation anchors, directions link, FAQ, and mobile controls work. Check the copy and layout with the actual business details.
- Confirm the GitHub repository and Vercel project belong to the recipient. Confirm automatic production deployment through project settings/build metadata; do not make meaningless customer-visible edits just to trigger a test.

Prior validation: the demo and extracted standalone package passed local asset and font checks, JavaScript syntax, desktop/mobile layouts, gallery/modal interactions, planner behavior, and browser-error checks. The Vercel setup entry page correctly recognized this public source repository. **The recipient's own accounts, deployment, and domain have not been created or verified by the prior assistant.**

## Business content and known limits

Business name used: DB Window Tint & Car Audio. Public directories use DB Window Tint. Address: 1001 Wiles Road, Anderson, SC 29625. Phone: (864) 556-2700. Listed hours in the site: Monday-Friday 9 AM-4 PM, Saturday 9 AM-2 PM, Sunday closed; the site says to call to confirm. Ask the owner for corrections rather than inventing details. Car audio was included from the commissioning user's firsthand description.

The actual photos, phone/address/hours, and short attributed review came from https://carhq.org/car-repair-near-me/db-window-tint/. The address was corroborated at https://preferredmechanic.com/window-tinting-places/anderson-anderson-sc/ and https://firmania.com/anderson/window-tinting. The original photographer and reuse permission were not verified; the owner should confirm use of these photos. The DB wordmark is a new design concept, not a verified original logo. Keep the bundled font licenses. No specific product brand, warranty, price, certification, or aggregate star rating has been invented.

## Finish and future maintenance

Return the verified public URL, recipient repository URL, Vercel project reference, current production commit, concise test results, and any genuine unresolved item. Distinguish deployment completion from unfinished domain/account actions. Save a small deployment record in the recipient's workspace without credentials. If work spans sessions, record exact progress and the next action so another assistant can continue without redoing setup.

Keep future edits in the recipient's repository. Preserve this site's approved design unless asked to change it. If you discover a deployment defect, make the smallest relevant fix, verify it, and explain it. Avoid adding analytics, paid services, AI features, new forms, or a visual editor during this launch.

## Official references

- ChatGPT desktop tools and setup: https://learn.chatgpt.com/docs/app
- Vercel setup button: https://vercel.com/docs/deploy-button
- Vercel Git integration: https://vercel.com/docs/git
- Static build configuration: https://vercel.com/docs/builds/configure-a-build
- Vercel plan restrictions: https://vercel.com/docs/plans/hobby
- GitHub templates: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template
