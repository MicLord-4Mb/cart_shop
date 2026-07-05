# Cart Shop

A educational online store (shopping cart) project created to demonstrate and compare two approaches to building user interfaces in React: functional components with hooks and classic class-based components.

## Project Goal

The main objective of this application is to implement identical business logic (adding items to a cart, changing their quantity, and calculating the total price) using two different React paradigms. This allows for a direct side-by-side comparison of code cleanliness, state management ergonomics, and rendering optimization techniques.

## Features

* **Functional Components Section:** Uses a custom `useCart` hook to encapsulate the cart state logic and leverages `React.memo` for product card performance optimizations to prevent unnecessary re-renders.
* **Class Components Section:** Relies on local component state, standard lifecycle methods, and extends `React.PureComponent` to handle shallow prop comparison for rendering performance optimizations.
* **Proxy-based Action Logger:** In development mode, cart actions executed within the functional section are intercepted using the JavaScript Proxy API. This logs structured group metrics directly to the browser console including execution durations and passed arguments.
* **Real-time Price Calculations:** Automatically computes total item counters and aggregate order costs synchronously on state mutations.

## Tech Stack

* **React 19** (showcasing modern Hooks side-by-side with Legacy Class API structures)
* **TypeScript** (providing strict type safety configurations across state boundaries and data schemas)
* **Vite 8** (serving as a fast building toolchain and hot-reloading asset bundler)
* **Oxlint** (an ultra-fast linter solution targeted at static code health maintenance)

## Project Structure

```text
src/
├── components/
│   ├── atoms/          # Atomic components (e.g., Button)
│   ├── molecules/      # Simple compound layouts (e.g., CartListItem)
│   ├── organisms/      # Complex standalone modules (e.g., ProductCard, CartSummary)
│   ├── pages/          # Full page layouts assembling sections (e.g., CartPage)
│   └── templates/      # Structural scaffold abstractions (e.g., MainLayout, SectionWrapper)
├── data/               # Static demonstration arrays (e.g., sample products)
├── hooks/              # Isolated state hook engines (e.g., useCart)
├── types/              # Declarative TypeScript type interfaces
└── utils/              # Utility tools (e.g., Proxy-based loggers)

```

## Setup and Installation

Follow these steps to run the application locally:

1. Clone the repository

```bush
git clone [https://github.com/your-username/cart-shop.git](https://github.com/your-username/cart-shop.git)
cd cart-shop
```

2. Install dependencies

```bush
npm install
```

3. Start the local development server

```bush
npm run dev
```

Once initialized, the app server environment URL will print to your terminal window (typically hosted at http://localhost:5173).

4. Run static code analysis (Linter)

```bush
npm run lint
```

5. Build for production deployment

```bush
npm run build
```
