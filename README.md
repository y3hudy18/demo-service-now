
# Lit Vite Card Component

A reusable, accessible, and responsive card component built with **Lit** and **Vite**.

## 📦 Project Setup

1. **Clone the Repository:**

```bash
git clone <repository-url>
cd my-lit-card
```

2. **Install Dependencies:**

```bash
yarn install
```

---

## ⚙️ Running the Project

1. **Start the Development Server:**

```bash
yarn dev
```

This will launch the app at:  
👉 **http://localhost:5173/**

2. **Build the Project:**

```bash
yarn build
```

The production-ready files will be in the **`dist/`** folder.

---

## 📁 Project Structure

```
my-lit-card
├── src
│   ├── components
│   │   └── card.component.ts  # Lit card component
│   └── main.ts                # Entry point
└── index.html                 # HTML to display the component
```

---

## 🏆 Key Features

- 📱 **Responsive:** Supports **small (320px)**, **medium (640px)**, and **large (1440px)** viewports.  
- ♿ **Accessible:** Includes proper ARIA roles, labels, and semantic HTML for screen readers.  
- ❤️ **Interactive:** Clickable heart icon for favorites and a "more options" button.  
- ⚡ **Fast:** Powered by **Vite** for instant hot-reloading.  

---

## 🚦 How to Use the Card Component

In your HTML file, use the `<app-card>` custom element like this:

```html
<app-card 
  heading="Card Title"
  description="A simple card description."
  ctaText="Learn More"
  secondaryCtaText="Details"
  additionalInfo="Additional Info"
  hasMedia="true">
</app-card>
```

---

## 🛠️ Troubleshooting

If you run into issues:

1. **Clear Dependencies:**

```bash
rm -rf node_modules yarn.lock
yarn install
```

2. **Check Logs:**  

```bash
yarn dev
```

---

## 📬 Contact

For questions or improvements, feel free to contact yehudy.f.barrantes@accenture.com! 🚀  
