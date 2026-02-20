# Ali Bashar Alabid - 3D Digital Museum Portfolio

Production-ready Next.js portfolio designed as a 3D digital museum.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Three.js with React Three Fiber
- @react-three/drei
- Framer Motion

## Features
- WASD movement + mouse look (pointer lock)
- Interactive 3D project panels with hover glow
- Project modal with full details and tech stack
- 3D Awards Wall and Certificates display
- Dark futuristic museum styling with:
  - Neon blue lighting accents
  - Reflective floor
  - Fog effect
  - Spotlights
  - Smooth modal transitions
- Centralized projects data in `data/projects.ts`

## Project Structure
```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  AwardsWall.tsx
  CertificatesDisplay.tsx
  FirstPersonController.tsx
  MuseumScene.tsx
  OverlayHUD.tsx
  ProjectModal.tsx
  ProjectPanel.tsx
data/
  profile.ts
  projects.ts
public/
  images/
    placeholder_3d_monastery.jpg
    placeholder_virtual_tour.jpg
    placeholder_library_system.jpg
    placeholder_nfc.jpg
    placeholder_mosul_app.jpg
    placeholder_ai.jpg
    placeholder_rig.jpg
    placeholder_default.svg
types/
  project.ts
```

## Run Locally
1. Install Node.js 20 LTS or newer.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000`.

## Production Build
```bash
npm run build
npm run start
```

## Deploy
### Vercel (recommended)
1. Push this project to GitHub.
2. Import repository into Vercel.
3. Keep default Next.js build settings.
4. Deploy.

## Replacing Placeholder Images
Replace the files in `public/images/` while keeping the same filenames used in `data/projects.ts`:
- `placeholder_3d_monastery.jpg`
- `placeholder_virtual_tour.jpg`
- `placeholder_library_system.jpg`
- `placeholder_nfc.jpg`
- `placeholder_mosul_app.jpg`
- `placeholder_ai.jpg`
- `placeholder_rig.jpg`

If any image is missing, UI falls back to `placeholder_default.svg`.
