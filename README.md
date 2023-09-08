# FAQ dropdown using React and Tailwind
This is a fully functional *Accordian* Component with `React.js` and `TailwindCSS`.

In the world of web development, Accordions or collapsible panels are interactive UI components which allow for expandable and collapsible sections of the contents on a webpage.

Typically, Accordions consist of a set of components like questions and answers which when clicked would reveal the associated content under the question. They provide an organized as well as a compact way to display large amounts of information in a concise manner and also they provide enhanced user experience by allowing the users to focus only on specific sections of interest and avoid overwhelming them with excessive content.

In the present article, we created an **FAQ** section employing `React.js` and `TailwindCSS` using the Accordian principles.

## Bootstrapping the application

```bash
$ mkdir accordian-demo; cd accordian-demo

# create vite based project
$ npm create vite@latest .

# install node libraries
$ npm install
```

## Tailwind Configuration

`TailwindCSS` will be used to provide the required styling. The official documentation for [Tailwind CSS][Tailwind] provides the required details for setting up the project for required framework.

```bash
# install tailwind dependency
$ npm install -D tailwindcss postcss autoprefixer

# create the tailwind configuration
$ npx tailwindcss init -p
```

### Copy the below contents to the configuration file `tailwind.config.js`.
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add the Tailwind directives into css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Install animation library
Install the `framer-motion` library for providing animation to the dropdows

```bash
$ npm install framer-motion
```

### Install prop types for handling the type specification requirements of JSX

```bash
$ npm install prop-types
```

and handle the proprty type specification for components as under

```js
import PropTypes from 'prop-types';

Accordian.propTypes = {
  id: PropTypes.number,
  question: PropTypes.string,
  answer: PropTypes.string,
};
```

## Run the code

Trigger the build and run process using the below:

```bash
$ npm run dev

> accordian-demo@0.0.0 dev
> vite


  VITE v4.4.9  ready in 244 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
5:14:30 PM [vite] hmr update /src/components/Accordian.jsx, /src/index.css
5:17:01 PM [vite] hmr update /src/components/Accordian.jsx, /src/index.css (x2)
5:17:33 PM [vite] hmr update /src/App.jsx, /src/index.css
```

Now open the link `http://localhost:5173` in browser.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

[Tailwind]: https://tailwindcss.com/docs/guides/vite
