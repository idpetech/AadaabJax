# Prompt for Claude / Cursor: Build AadaabJax Full Static Site + Optional Chat Stub

Goal:
Produce a complete static website for "AadaabJax" — a modern Urdu cultural site focused on poetry, short-form video, and visual storytelling. The site should be responsive, accessible, and easy to deploy to Netlify, AWS S3, or Railway. Also include an optional chat widget integration placeholder for a future MCP-based poem analysis chatbot.

Requirements (deliverables):
1. A ready-to-deploy static site folder (zip) containing:
   - index.html (homepage with hero, featured video, poetry-of-the-week cards)
   - poetry.html (list of video embeds, poem texts with audio support)
   - gallery.html (image grid with captions)
   - styles.css (responsive, uses provided brand colors)
   - script.js (chat stub, analytics hooks)
   - assets/ (images, placeholder audio samples, fonts)
   - README.md with deployment steps & font instructions
   - OPTIONAL: a simple `netlify.toml` for Netlify deploy settings

2. The site must support Urdu text rendering and include instructions (or bundled web fonts) for Nastaleeq-style rendering.

3. Video embedding support for YouTube and TikTok (TikTok via oEmbed or iframe if supported).

4. Accessibility: semantic HTML, alt attributes, ARIA where appropriate.

5. SEO: meta tags, Open Graph tags for share previews.

6. Chat widget placeholder:
   - A compact floating chat button and modal UI.
   - Client-side JS to POST messages to `/api/chat`.
   - README instructions for wiring `/api/chat` to:
     a) a serverless function that proxies to the user's MCP server, or
     b) a Claude/Cursor/other LLM endpoint.
   - Keep the chat widget minimal and easy to remove.

7. Deployment instructions for Netlify, AWS S3, and Railway. Include steps for adding a custom domain and enabling HTTPS.

8. Optional: Add a simple admin workflow (a `data/` folder or JSON files) so the user can update poems/videos without rebuilding (for small-scale edits).

Design & Brand:
- Use the following brand colors:
  - Primary: #0A3A2A
  - Accent: #C9A227
  - Maroon: #7A1C1C
  - Cream background: #F3EFE2
- Typography:
  - English: Playfair Display (titles), Inter (body)
  - Urdu: recommend Noto Nastaliq Urdu or provide guidance to include a woff2 Nastaleeq font
- Provide 3 sample content items (videos / poems / images) as placeholders.

Extras:
- Provide a separate `claude-extend-instructions.md` describing how Claude should produce a ZIP and which files to include.
- Include a small `prompt` the user can paste to ask Claude to add an MCP-backed poem analysis chat endpoint (with sample API contract).

Deliver the site and a short README explaining how to host, replace placeholder content, and wire the chat later.

---

END OF PROMPT
