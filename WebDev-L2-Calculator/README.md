# WebDev-L2-Calculator 🧮

A modern, responsive browser calculator web application built with **HTML5**, **CSS3**, and **Vanilla JavaScript**.

Developed as part of the **Oasis Infobyte Web Development and Designing Internship (OIBSIP)** — **Level 2, Task 1**.

---

## ✨ Features

- **Dual-Line Display**: Shows the previous operation/operand in a secondary expression line and the active input or result on the primary display.
- **Full Arithmetic Operations**: Addition (`+`), Subtraction (`−`), Multiplication (`×`), and Division (`÷`).
- **Additional Handy Actions**: Clear (`C`), Backspace (`⌫`), Percentage (`%`), and Sign Toggle (`±`).
- **Safe Division by Zero**: Displays a clean `"Cannot divide by zero"` error message without crashing the browser or breaking calculator state.
- **Operator Chaining**: Seamlessly chains continuous calculations (e.g. `5 + 3 × 2 = 16`) without requiring a manual reset.
- **Zero `eval()` Implementation**: Built purely using structured state variables, functions, and conditional `switch` statements for top security and standards compliance.
- **Pure `addEventListener` Binding**: No inline `onclick` attributes used; clean event delegation architecture.
- **Modern Responsive UI**: Built using **CSS Grid** for the keypad, CSS Custom Properties (Variables) for color palettes, and glassmorphic styling.
- **Keyboard Navigation Support**: Use desktop keys (`0-9`, `+`, `-`, `*`, `/`, `Enter` / `=`, `Backspace`, `Escape`) with interactive button press animations.

---

## 📁 Project Structure

```text
WebDev-L2-Calculator/
├── index.html     # Semantic HTML5 markup with accessible display & keypad grid
├── style.css      # CSS3 styles, CSS variables, glassmorphism, & CSS Grid layout
├── script.js      # Vanilla JavaScript application logic and event handling
└── README.md      # Project documentation and guide
```

---

## 🚀 How to Run Locally

1. **Clone or Open the Repository**:
   Navigate to the `WebDev-L2-Calculator` directory.

2. **Open in Browser**:
   - Double-click `index.html` to open it directly in any modern web browser (Google Chrome, Microsoft Edge, Firefox, Safari, Brave).
   - Alternatively, right-click `index.html` and select **"Open with Live Server"** in VS Code.

---

## ⌨️ Keyboard Shortcuts Reference

| Key | Calculator Function |
| :--- | :--- |
| `0` - `9` | Input Digits |
| `.` | Decimal Point |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `Enter` or `=` | Calculate Result (Equals) |
| `Backspace` | Delete Last Digit (⌫) |
| `Escape` or `C` | Clear All (C) |
| `%` | Calculate Percentage |

---

## 🛠️ Built With

- **HTML5**: Semantic tags, accessible ARIA attributes.
- **CSS3**: CSS Grid, Flexbox, Custom Properties (Variables), Backdrop Blur.
- **Vanilla JavaScript (ES6+)**: Event Delegation, DOM Manipulation, Clean Arithmetic Logic without `eval()`.
