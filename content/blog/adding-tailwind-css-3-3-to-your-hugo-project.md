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
For some reason, I was having confusion as to why there was any difficulty adding tailwindcss to my Hugo project (this website). Now, I want to share my findings because I made some very silly mistakes that I want you to avoid! This will be quick.

You need ***npm*** - you already have this most likely. You know, from the time you tried to use Gatsby to create a blog site and miserably failed because of all of those dependency issues? NOO? I guess that was just me... (I am very trumotaised).

In your root project folder, run the following:

```shell
npm init -y
```

The `-y` is to let npm generate a default config. Hugo does not use this in any way, by the way.

Next,

```shell
npm install -D tailwindcss
npx tailwindcss init
```

Here, we're simply installing tailwindcss and initializing a tailwind.config.js.

In your tailwind.config.js file, you need to have this

```javascript
/ **@type {import('tailwindcss').Config} */
module.exports = {
  content: ["./themes/**/*.{html,js}"], /\*\* themes/ is where you will do most of the styling in context of Hugo* /
  // was -> content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: \[],
}
```

Look closer at the `content` key. That needs to point to the right directory. Point it to your theme folder!

Now, this is all under the assumption that you have Hugo themes that you want to personalize and customize. If you have your own 'theme', this also works. However, if you have your html layout files in some other folder, like the layout in the root, you have to point your tailwind.config.js to that folder.

Create `input.css` file in `themes/{theme name}/static/css/` and add the following lines:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Add these two lines to your npm scripts in `package.json` because you will be running these commands a lot. Note the \`-watch\` command. This will rebuild the \`output.css\` everytime you add/change a css propoerty in your html files.

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

Now, every time you add an inline tailwind style to a div, for example, you will see that first, Tailwind will auto rebuild the output css file, and then Hugo rebuilds the site every time it sees the output css file changing! Cool!


One last thing You have to link the output.css to your html files. Do this in your head.html partial file.
Something like so:

```html
<link rel="stylesheet" href='{{ relURL .Site.Params.custom_css }}'>
```

Finally, add the path of the css file in your config.toml

```toml
custom_css = "css/output.css"
```

You don't have to specify the whole path. Hugo knows that `css/` is stored in the `static/` folder.
Go and make something cool!