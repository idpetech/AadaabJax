# AadaabJax — Static Site Bundle

This bundle contains a simple responsive static site for **AadaabJax** (poetry + videos + culture gallery).

## Files
- index.html — Homepage
- poetry.html — Poetry & Videos page
- gallery.html — Culture Gallery
- styles.css — Styles
- script.js — Placeholder scripts (chat integration stub)
- assets/ — sample images (place your images here)
- README.md — This file

## How to deploy (Netlify - fastest)
1. Sign up at https://www.netlify.com
2. Drag and drop the contents of this folder into Netlify's Sites dashboard (or push to Git and connect)
3. Netlify provides automatic HTTPS and a global CDN.

## How to deploy (AWS S3 static hosting)
1. Create an S3 bucket, enable static website hosting, upload files
2. Configure public read permissions (or CloudFront + OAI for production)
3. Optional: use Route53 or another DNS for custom domain

## Fonts / Urdu support
- The sample CSS references 'Noto Nastaliq Urdu' in the `.urdu` block.
- For best Urdu typography, host a Nastaleeq font in `assets/` and add a `@font-face` rule in styles.css:
  ```
  @font-face {
    font-family: 'MyNastaleeq';
    src: url('assets/YourNastaleeq.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  ```
  Then update `.urdu{ font-family: 'MyNastaleeq', serif; }`

## Placeholder video embeds
Replace `VIDEO_ID` in index.html and poetry.html with your YouTube or other embed IDs.

## Chat / MCP integration (future)
- script.js includes a `sendChatMessage()` stub that POSTs to `/api/chat`.
- When you are ready, implement a small serverless function (Netlify Functions, AWS Lambda) that proxies chat messages to your MCP server or an LLM endpoint.
- See `CLAUDE_PROMPT_AND_DEPLOY.md` in this bundle for a ready prompt for Claude/Cursor to extend the site and add a chat widget.

