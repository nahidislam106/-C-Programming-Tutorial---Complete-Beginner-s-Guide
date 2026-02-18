# C Programming Tutorial - Next.js Version

A modern, responsive web application built with Next.js 14 showcasing a complete C programming tutorial with 90+ examples.

## 🚀 Features

- **Modern Next.js 14** with App Router
- **TypeScript** for type safety
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Collapsible Sidebar** - Easy navigation through chapters
- **Smooth Scrolling** - Enhanced user experience
- **Active Section Highlighting** - Always know where you are
- **90+ Code Examples** - Learn by doing

## 📦 Installation

1. Navigate to the project directory:
```bash
cd nextjs-tutorial
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
nextjs-tutorial/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── page.module.css     # Page styles
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Header component
│   ├── Header.module.css
│   ├── Sidebar.tsx         # Sidebar navigation
│   ├── Sidebar.module.css
│   ├── MainContent.tsx     # Main content area
│   ├── MainContent.module.css
│   ├── Footer.tsx          # Footer component
│   └── Footer.module.css
├── public/                 # Static files
├── package.json
├── tsconfig.json
└── next.config.mjs
```

## 🎨 Features

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile devices
- Collapsible sidebar for desktop
- Touch-friendly navigation

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation support
- Screen reader friendly

### Performance
- Server-side rendering with Next.js
- Optimized code splitting
- Fast page loads
- Smooth animations

## 🛠️ Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **CSS Modules** - Scoped styling
- **React Hooks** - State management

## 📝 Customization

You can easily customize:
- Color scheme in `globals.css` (CSS variables)
- Content in `components/MainContent.tsx`
- Navigation items in `components/Sidebar.tsx`
- Styling in respective `.module.css` files

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- Build: `npm run build`
- Deploy the `.next` folder

## 📄 License

Free to use for educational purposes.

## 🤝 Contributing

Feel free to open issues or submit pull requests!

## 📧 Support

For questions or support, please open an issue in the repository.

---

**Made with ❤️ for aspiring programmers**
