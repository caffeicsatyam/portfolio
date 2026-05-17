# ✦ Satyam Chaturvedi — Personal Portfolio ✦

A premium, interactive developer portfolio built with a **Dark Terminal × Bioluminescent Garden** aesthetic. Built with standard HTML5, Vanilla CSS, and modular high-performance JavaScript (no bulky frameworks).

---

## 🌿 Visual & Aesthetic Highlights

### 1. The Bioluminescent Flora System
Organic, animated SVGs grow dynamically out of the site's structural boundaries, contrasting beautifully with the sleek terminal boxes:
*   **Ambient SVG Streetlamps:** Two custom-designed, large curved vector streetlamps flank the bottom margins of the screen, housing glowing filaments that smoothly breathe using custom `@keyframes`.
*   **Wild Base Sprouts:** Growing directly from the base of the streetlamps are wild bioluminescent flowers that pulse asynchronously to simulate organic nature.
*   **Climbing Card Vines:** Every project card features a custom climbing branch with sprouting leaves and offset glowing buds, creating a gorgeous framing layer in the negative grid space.

### 2. Cursor-Tracking Spotlight Glow
*   An ultra-smooth, mouse-tracking spotlight glow overlay (`div` element) executed via a high-frequency `requestAnimationFrame` render loop to prevent browser-native lag.
*   The spotlight casts a soft, dynamic aura over the HSL-tailored dark grid background as you move your mouse.

### 3. Responsive Art-Deco Terminal Styling
*   Clean terminal headers with custom blinking caret indicators.
*   Elegant border shapes and glassmorphism hover animations on project cards, links, and forms.
*   Fully optimized custom typography featuring **JetBrains Mono**, **Inter**, and **Hanken Grotesk** paired with modern Google Material Symbols.

---

## ⚙️ Core Technical Features

*   **Stateless Pre-Filled Contact Workflow:** A secure, local contact form in `contact.html` that sanitizes and packages client inputs (`Name`, `Email`, `Subject`, `Message`) into a dynamically generated `mailto:` request, opening the user's native email application cleanly without requiring server-side storage.
*   **Global Layout Consistency:** Interactive features, spotlight overlays, and dynamic background grids remain fully persistent and responsive across all pages (`index.html`, `projects.html`, `links.html`, `contact.html`).
*   **Zero-Dependency Engine:** 100% written in vanilla HTML/CSS/JS for blazing-fast page loads and flawless cross-browser execution.

---

## 📂 Codebase Architecture

```bash
├── index.html        # Home / Landing Hero screen
├── projects.html     # Works Showcase with Climbing Vines
├── links.html        # Developer Social Directory & Tree
├── contact.html      # Mailto-powered Secure Contact Form
├── src/
│   ├── main.js       # Spotlight, streetlamps, vines, navigation and form engine
│   └── style.css     # Central design system, HSL color tokens and grid layout
└── README.md         # Documentation
```

---

## 🚀 Getting Started

Since the project is built purely with web-native technologies, there are zero build pipelines or dependency installations required.

### Local Development
To launch the portfolio locally, you can open the `index.html` file directly in any modern browser, or spin up a simple static server:

```bash
# Using Python
python -m http.server 8000

# Using Node (npx)
npx serve .
```
Access the project at `http://localhost:8000` or `http://localhost:3000`.

---

## 🎨 Theme & Customization
To adjust the primary accent colors, fonts, or margins, simply modify the HSL variables declared in the `:root` scope of [src/style.css](file:///c:/Users/MSI/Desktop/Portfolio/src/style.css):

```css
:root {
  --primary: #ffffff;
  --background: #0b0b0b;
  --surface: #111111;
  --outline-variant: #333333;
  /* ... HSL tokens ... */
}
```