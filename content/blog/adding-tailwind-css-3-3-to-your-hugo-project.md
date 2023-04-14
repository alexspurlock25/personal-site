---
title: Adding Tailwind CSS 3.3 to your Hugo project
description: This blog will teach the reader how to install and configure a Hugo
  project to use tailwindcss.
keywords:
  - tailwindcss
  - Hugo
  - Tailwind CSS 3
  - tailwind and hugo
date: 2023-04-07T01:34:23.589Z
---
Welcome to my first post, friends! Let's get started.

For some reason, I was having confusion as to why there was any difficulty adding Tailwind CSS to my Hugo project (this website). Now, I want to share my findings because I made some very silly mistakes that I want you to avoid! This will be quick.

You need ***npm*** - you already have this most likely. 

In your root project folder, run the following commands:

```shell
npm init -y
npm install -D tailwindcss
npx tailwindcss init
```

The `-y` is to let ***npm*** generate a default config. Hugo won't use anything that comes along with this in any way. Next, we're simply installing Tailwind CSS and initializing a `tailwind.config.js`.

In your `tailwind.config.js` file, you need to have this

```javascript
/ **@type {import('tailwindcss').Config} */
module.exports = {
  content: ["./themes/**/*.{html,js}"], // themes/ is where you will do most of the styling in context of Hugo
  // was -> content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Note the `content` key. Most of the time, we we would want this to be pointing to the `themes/` folder. However, I know that we can opt-out of using themes. In that case, point to where your folder of static html files are. It's probably the `layout/` folder at the root.

Create `input.css` file in `themes/{theme name}/static/css/` and add the following lines:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Add the following line to your `config.toml`. Hugo sees this as `themes/{theme name}/css/output.css`. Again, be aware that your project structure maybe different.

```toml
custom_css = "css/output.css"
```

Link `output.css`. Put this in the `<head>`.
```html
<link rel="stylesheet" href='{{ relURL .Site.Params.custom_css }}'>
```

Add these two lines to your ***npm*** scripts in `package.json` because you will be running these commands a lot. Note the `-watch` command. This will rebuild the `output.css` every time you add/change a css propoerty in your html files.

```json
"scripts": {
  "tw": "npx tailwindcss -i ./themes/{theme name}/static/css/input.css -o ./themes/{theme name}/static/css/output.css --watch",
  "hugo": "hugo serve -D"
}
```

With this, we can simply run 

```shell
npm run tw
```

and in a different tab, window, or tile shell:

```shell
npm run hugo
```

Now, every time you add an inline tailwind style to a div, for example, you will see that first, Tailwind CSS will auto rebuild the output css file, and then Hugo rebuilds the site every time it sees the output css file changing! Cool!

Go and make something cool!