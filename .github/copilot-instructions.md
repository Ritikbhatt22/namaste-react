# Copilot Instructions for NamasteDev (namaste-react)

## Project Overview
- This is a React single-page application using Parcel as the build tool and Tailwind CSS for styling.
- Routing is managed via `react-router-dom`.
- The app fetches restaurant data from Swiggy's public API and displays it in various components.
- The codebase is organized into `src/components` (UI and logic) and `src/utils` (custom hooks, constants, mock data).

## Key Architectural Patterns
- **Component Structure:** Major UI features are split into components (e.g., `Header`, `Body`, `ResturantCard`, `ResturantMenu`).
- **Custom Hooks:** Data fetching and online status are handled via hooks in `src/utils` (e.g., `useResturantMenu.js`, `useOnlineStatus.js`).
- **Higher-Order Components:** Example: `withPromotedLabel` in `ResturantCard.js` wraps cards to add a "Promoted" label conditionally.
- **Category Accordions:** `ResturantMenu.js` displays menu categories as accordions, using React state for open/close logic.

## Developer Workflows
- **Start Dev Server:** `npm start` (runs Parcel on `index.html`)
- **Build for Production:** `npm run build`
- **Run Tests:** `npm test` (uses Jest; tests not present by default)
- **Debugging:** Use browser devtools and Parcel's HMR for fast feedback.

## Project-Specific Conventions
- **API Data Shape:** Restaurant and menu data is deeply nested; always check for existence before accessing properties.
- **Conditional Rendering:** Use shimmer loading states (`Shimmer.js`) for async data.
- **Tailwind Usage:** Most styling is done inline with Tailwind classes. Some legacy CSS may exist in `Header.css`.
- **Promoted Restaurants:** The `promoted` property in restaurant data triggers the HOC label.
- **Accordion Menus:** Categories in `ResturantMenu.js` are rendered as accordions, one open at a time.

## Integration Points
- **External APIs:** Swiggy API for restaurant/menu data (see `fetchData` in `Body.js` and `useResturantMenu.js`).
- **Routing:** All navigation uses `react-router-dom`'s `Link` and `useParams`.
- **Parcel:** Handles bundling, HMR, and static asset management.

## Examples
- **Promoted Card:**
  ```js
  // In Body.js
  return restaurant.promoted
    ? <ResturantCardPromoted key={resID} resturantData={restaurant} />
    : <ResturantCard key={resID} resturantData={restaurant} />;
  ```
- **Accordion Category:**
  ```js
  // In ResturantMenu.js
  <button onClick={() => setOpenIndex(isOpen ? null : idx)}>{title}</button>
  {isOpen && <ul>...</ul>}
  ```

## Key Files
- `src/components/Body.js` (main restaurant list, search/filter logic)
- `src/components/ResturantCard.js` (restaurant card, HOC for promoted label)
- `src/components/ResturantMenu.js` (menu, category accordion)
- `src/utils/useResturantMenu.js` (menu data fetching)
- `src/utils/useOnlineStatus.js` (online status detection)

---

If any conventions or workflows are unclear, please provide feedback so this guide can be improved for future AI agents.
