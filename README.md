# Intelion - Modern Landing Page

A modern, interactive landing page built with React, TailwindCSS, and Framer Motion. Features a dark theme with glass morphism effects and gradient accents.

![Intelion Landing Page](preview.png)

## Features

- 🎨 Modern UI/UX with glass morphism effects
- 🌈 Beautiful gradient color schemes
- 🎭 Smooth animations using Framer Motion
- 📱 Fully responsive design
- ⚡ No build process required
- 🎯 SEO optimized

## Project Structure


intelion-landing-page/
├── index.html
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── Features.js
│   ├── Services.js
│   ├── Contact.js
│   ├── Footer.js
│   └── ScrollProgress.js
├── styles/
│   ├── main.css
│   ├── header.css
│   ├── hero.css
│   ├── features.css
│   ├── services.css
│   ├── contact.css
│   └── footer.css
├── app.js
└── README.md


## Quick Start

1. Clone the repository:
bash
git clone https://github.com/yourusername/intelion-landing-page.git
cd intelion-landing-page


2. Open the project in your preferred code editor.

3. Start a local server:

Option 1: Using Python
bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000


Option 2: Using Node.js
bash
# Install http-server globally if you haven't already
npm install -g http-server

# Start the server
http-server


Option 3: Using VS Code
- Install the "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

4. Open your browser and navigate to:
- Python: `http://localhost:8000`
- Node.js: `http://localhost:8080`
- VS Code Live Server: `http://localhost:5500`

## Technology Stack

- **React 18** - UI Library
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Font Awesome** - Icons

## Project Features

### 1. Modern Design
- Glass morphism effects
- Gradient color schemes
- Dark theme
- Animated components

### 2. Components
- Responsive header with mobile menu
- Animated hero section
- Feature cards with hover effects
- Service showcases
- Contact form with validation
- Footer with social links
- Scroll progress indicator

### 3. Performance
- Production-ready React build
- Optimized animations
- Responsive images
- Efficient CSS using Tailwind

## Customization

### Changing Colors

The main gradient colors are defined in `styles/main.css`:

css
/* Blue to Purple Gradient */
.bg-gradient-blue-purple {
    background: linear-gradient(to right, #2563eb, #7c3aed);
}

/* Orange to Pink Gradient */
.bg-gradient-orange-pink {
    background: linear-gradient(to right, #f97316, #ec4899);
}


### Modifying Content

Update the content in respective component files:
- Hero content: `components/Hero.js`
- Features: `components/Features.js`
- Services: `components/Services.js`
- Contact: `components/Contact.js`

### Adding New Sections

1. Create a new component in the `components` folder
2. Add corresponding styles in the `styles` folder
3. Import and add the component to `app.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

- Images: [Unsplash](https://unsplash.com)
- Icons: [Font Awesome](https://fontawesome.com)
- Fonts: [Inter](https://fonts.google.com/specimen/Inter)

## Support

For support, email support@intelion.com or open an issue in the repository.
