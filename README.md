# Modern Animated Portfolio Website

A professional, responsive portfolio website with modern animations and a clean design. This project uses HTML, CSS, and JavaScript along with several third-party libraries to create a visually appealing and interactive experience.

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Dark Mode Aesthetic**: Elegant dark background with gradient accents
- **Animated Elements**:
  - Smooth entrance animations using AOS library
  - Typing effect in the hero section with Typed.js
  - Animated counters in the About section
  - Progress bars for skills visualization
  - Hover effects for projects and certifications
  - Smooth scroll and section reveal animations
  - Background particles animation
- **Interactive Components**:
  - Mobile-friendly navigation
  - Working contact form with validation
  - Scroll to top button with animation
  - Optional background music toggle
  - Ripple effect on buttons

## Demo

You can see a live demo of this portfolio by opening the `index.html` file in your browser.

## Setup and Installation

1. Clone or download this repository
2. Open `index.html` in your browser
3. Customize the content to make it your own!

## Customization

### Changing Personal Information

- Edit the text content in `index.html` to reflect your personal details
- Replace the placeholder images in the `src/assets/` directory with your own
- Update project descriptions, skills percentages, and other content

### Changing Colors

The color scheme is controlled by CSS variables in the `:root` selector at the top of `src/styles.css`. You can modify these values to change the color scheme throughout the entire site:

```css
:root {
    --primary-color: #6C63FF;  /* Change this for main accent color */
    --secondary-color: #00C9A7; /* Change this for secondary accent color */
    --dark-bg: #121212; /* Main background color */
    --darker-bg: #090909; /* Secondary background color */
    /* Other color variables... */
}
```

### Changing Animations

Most animations are controlled via JavaScript in the `src/main.js` file. You can adjust timing, effects, and more by editing these settings.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll library
- [Typed.js](https://github.com/mattboldt/typed.js/) - Text typing animation
- [Particles.js](https://vincentgarreau.com/particles.js/) - Background particle animation
- [Font Awesome](https://fontawesome.com/) - Icon set

## Credits

- Fonts: [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)
- Icons: [Font Awesome](https://fontawesome.com/)

## License

This project is available for personal and commercial use with attribution.

---

Made with ❤️ by [Your Name] 