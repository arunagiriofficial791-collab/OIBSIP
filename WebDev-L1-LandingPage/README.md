# FocusFlow - Smart Study Planner Landing Page

> A modern, responsive, and aesthetic landing page built for **FocusFlow**, a fictional study-planner web and mobile application designed to help students organize coursework, master time management, and eliminate academic burnout.

This project is built purely using **semantic HTML5** and **vanilla CSS3** with **no JavaScript** and **no external CSS frameworks or libraries**.

---

## 📌 Project Overview

**FocusFlow** addresses the everyday challenges students encounter: juggling multiple deadlines, unorganized study notes, and constant digital distractions. The landing page showcases the app's key features, cognitive-science-backed study methods (like the Pomodoro Technique and spaced repetition), social proof from real learners, and direct contact options.

---

## ✨ Features Implemented

1. **Sticky Navigation Bar:**
   - Remains fixed at the top of the viewport when scrolling (`position: sticky`).
   - Clean brand identity with vector logo and navigation links (*Home*, *Features*, *About*, *Reviews*, *Contact*).
   - "Get Started" call-to-action button.
   - Smooth page scrolling (`scroll-behavior: smooth`).

2. **Hero Section:**
   - High-impact headline with an eye-catching gradient text effect.
   - Descriptive subheadline outlining the core value proposition.
   - Dual Call-to-Action (CTA) buttons (*"Start Planning Free"* & *"Learn More"*).
   - Social proof metrics (50k+ students, 4.9/5 rating, 94% grade improvement).
   - **Pure CSS UI Mockup**: An interactive-looking study dashboard card featuring a live Pomodoro countdown, subject-tagged priority queue, progress bars, and streak counter—created entirely with CSS without external images.

3. **Core Features Section (Cards Grid):**
   - 6 structured feature cards in an auto-fitting CSS Grid layout.
   - Features include: *Smart Timetable Generator*, *Integrated Pomodoro Timer*, *Productivity Analytics*, *Spaced Repetition Prompts*, *Exam Countdown*, and *Priority Matrix Planner*.
   - Subtle hover animations (`transform: translateY(-5px)`) and distinct themed icon badges.

4. **About & Methodology Section:**
   - Explains the philosophy behind FocusFlow (active recall, spaced repetition, time-blocking).
   - Visual checklist highlighting user benefits.
   - Step-by-step numbered breakdown cards (*01 Plan Your Semester*, *02 Lock In Deep Work*, *03 Celebrate Real Progress*).

5. **Testimonials Section (Student Reviews):**
   - 3 authentic student review cards from diverse academic backgrounds (Medicine, High School AP, Computer Science).
   - Star rating indicators (`★★★★★`) and custom CSS avatar initials.

6. **Call to Action (CTA) Banner:**
   - High-contrast indigo gradient card prompting users to start for free with zero setup friction.

7. **Contact & Community Section:**
   - Left column: Direct email support card, physical address info, and student community Discord prompt.
   - Right column: Accessible contact form with clean input fields and HTML5 validation (`required` fields for Name, Email, Subject, and Message).

8. **Footer:**
   - Brand logo & mission statement.
   - Multi-column quick links (Navigation, Study Resources).
   - Social media icon buttons (Twitter/X, GitHub, LinkedIn, Instagram).
   - Copyright notice and semantic attribution.

---

## 🎨 Design System & Color Palette

All styling variables are centrally defined in the `:root` pseudo-class in `style.css` for consistent, maintainable theming:

| Token | Value / Purpose |
| :--- | :--- |
| `--color-primary` | `#4f46e5` (Deep Indigo - Primary Brand) |
| `--color-primary-hover` | `#4338ca` (Indigo Hover State) |
| `--color-primary-light` | `#eef2ff` (Soft Indigo Tint for Badges) |
| `--color-bg` | `#f8fafc` (Slate 50 - Page Background) |
| `--color-surface` | `#ffffff` (Card & Container Surface) |
| `--color-border` | `#e2e8f0` (Subtle Dividing Borders) |
| `--color-text-main` | `#0f172a` (Slate 900 - Headings & High Contrast) |
| `--color-text-muted` | `#475569` (Slate 600 - Body & Paragraphs) |
| `--color-success` | `#16a34a` (Green Checkmarks & Streaks) |

### Typography
- **Primary Font**: `'Plus Jakarta Sans'`, with a clean system font fallback stack (`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`).
- Clear typographic hierarchy:
  - Hero Display: `3.25rem` (scaled to `1.95rem` on mobile)
  - Section Titles (`h2`): `2.25rem`
  - Card Titles (`h3`): `1.25rem`
  - Body Text: `1rem` (16px base, `1.6` line-height)
  - Small / Badges: `0.75rem` - `0.875rem`

---

## 📱 Responsive Layout & Mobile Friendliness

- **Universal Box Model**: Applied `box-sizing: border-box` globally to ensure exact padding and border calculations with **zero overlapping elements**.
- **Modern Layouts**: Built entirely using **CSS Flexbox** and **CSS Grid** with responsive rules (`repeat(auto-fit, minmax(...))`).
- **Breakpoints**:
  - `@media (max-width: 992px)`: Stacks two-column sections into vertical layouts for tablets and small laptops.
  - `@media (max-width: 768px)`: Reorganizes navigation items, adjusts hero metrics, and wraps feature cards into a clean single column.
  - `@media (max-width: 480px)`: Expands action buttons to full-width and optimizes spacing for one-handed mobile navigation.
- **No Horizontal Scroll**: `overflow-x: hidden` and max-width containers ensure no awkward side-scrolling on narrow screens.

---

## 📂 Project Directory Structure

```text
OIBSIP/
└── WebDev-L1-LandingPage/
    ├── index.html       # Semantic HTML5 markup with accessible tags
    ├── style.css        # Vanilla CSS3 styling, variables & media queries
    └── README.md        # Project documentation and guide
```

---

## 🚀 How to Run the Project

Since this project uses only static HTML5 and CSS3, no installation or build steps are required.

### Option 1: Direct File Open (Easiest)
1. Navigate to the project folder:
   ```text
   d:\OIBSIP\WebDev-L1-LandingPage\
   ```
2. Double-click `index.html` (or right-click -> **Open with** -> select any browser such as Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari).

### Option 2: Using VS Code Live Server Extension
1. Open the `WebDev-L1-LandingPage` folder in **Visual Studio Code**.
2. Right-click `index.html` in the file explorer.
3. Select **"Open with Live Server"**.
4. The page will open automatically at `http://127.0.0.1:5500/index.html`.

### Option 3: Using a Simple Local Server (Optional)
If you have Python installed, you can start a local server from the terminal:
```bash
# In the WebDev-L1-LandingPage folder:
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 📜 Compliance & Best Practices

- **Zero JavaScript**: Runs 100% on declarative HTML and CSS.
- **No External Frameworks**: Pure hand-crafted CSS without Bootstrap, Tailwind, or jQuery.
- **Semantic HTML**: Appropriate use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` elements.
- **Accessible Design**: Meaningful `aria-label` attributes, high color contrast ratios, and clear focus states for keyboard navigation.
- **Clean & Well-Commented**: Code is thoroughly documented with section dividers to make it easy for beginners and reviewers to navigate.
