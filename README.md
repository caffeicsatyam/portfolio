# ✦ Satyam Chaturvedi — Personal Portfolio ✦

A premium personal showcase designed around a highly distinct, immersive visual theme: **The Dark Terminal × Bioluminescent Garden**. 

Built purely using vanilla HTML5, custom SVG math, and hardware-accelerated CSS animations.

---

## 🌿 The Design Philosophy

This portfolio is an artistic study in contrast: **the absolute rigidity of a developer's machine layout colliding with the soft, organic flow of glowing wild nature.**

It explores the visual tension between:
*   **Structured Grids:** Monospace fonts, strict wireframes, retro console carets, and sharp container geometries.
*   **Fluid Ecosystems:** Curved hanging vectors, growing leaves, and bio-luminescent filaments that softly breathe and react to human interaction.

---

## ✨ Immersive Visual Highlights

### 1. The Bioluminescent Flora System
High-fidelity custom-drawn SVGs are injected directly into the DOM, growing organically out of the viewport margins and page container boundaries:
*   **Ambient Corner Streetlamps:** Two massive, curved art-deco streetlamps frame the bottom corners of the viewport. Their glowing filaments smoothly brighten and dim, acting as gentle ambient anchors.
*   **Wild Base Sprouts:** Sprouting directly out of the "soil" at the foot of each streetlamp are glowing wild flowers. They pulse at desynchronized rates (`3.2s` and `2.5s`) to mimic natural, asynchronous biological breathing.
*   **Climbing Card Vines:** Each project showcase card features a climbing glowing vine hugging its borders. Delicate branches and offset leaves sprout outward into negative layout space, decorated with tiny pulsing neon buds.

### 2. Reactive Light & Physics
*   **Hardware-Accelerated Spotlight:** An overlaying spotlight gradient tracks the user's cursor dynamically. Powered by `requestAnimationFrame`, it glides flawlessly across the dark grid lines, illuminating content cards and text as the mouse travels.
*   **Desynchronized Frequencies:** No two lights pulse at the exact same frequency. The main lamps, the base sprouts, and the card vines breathe on offset wave loops, preventing the interface from feeling static or mechanical.

### 3. Sleek Neo-Terminal Layout
*   Clean terminal headings with custom blinking carets.
*   Ultra-premium, low-contrast dark HSL grays and custom slate grid lines.
*   Beautiful typography featuring **JetBrains Mono**, **Inter**, and **Hanken Grotesk** paired with Google Material Icons.

---

## 🎨 Palette & Aesthetic Tuning

The visual atmosphere is fully defined by custom HSL tokens in [src/style.css](file:///c:/Users/MSI/Desktop/Portfolio/src/style.css). The colors can be customized to shift the entire portfolio's mood (e.g. into deep neon violet, radioactive amber, or cybernetic emerald):

```css
:root {
  /* Ambient glowing color */
  --primary: #ffffff; 
  
  /* Near-black viewport slate background */
  --background: #0b0b0b; 
  
  /* Terminal surfaces */
  --surface: #111111; 
  
  /* Mechanical wireframe borders */
  --outline-variant: #333333; 
}
```