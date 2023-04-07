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

For some reason, I was having confusion as to why there was any difficulty adding tailwind to my hugo project (this website). Now, I want to share my findings because I made some very silly mistakes that I want you to avoid! This will be quick.

I am assuming that you already have a hugo project, duh! Why else would you be here?

You need npm - you already have this most likely. You know, from the time you tried to use Gatsby to create a blog site and misrably failed because of all of those dependcey issues? NOO? I guess that was just me... (I am very trumotaised).

Anyway, have npm handy.

Then, in your root Hugo project folder, run this: 

```shell
npm init -y
```

The `-y` is inportant because npm will generate a default `package.json` file for you without have you be asked a billion questions. Hugo does not use this in anyway. We just want to use npm to install a tailwind.

NOW you're asking "WTF??? I am trying to get away from the package managment! This will break my side with crazy dependecy issues like those other JavaScript frameworks! (Cough, cough, *Gatsby*)"

Well, my friend. We're only installing one package! And I will gerantee that the audit report will say `0 velnarabilities`.

Next, straight from the tailwind install guide

```shell
npm install -D tailwindcss
npx tailwindcss init
```

Here, we're simply installing tailwindcss and initializing a `tailwind.config.js`.

The next part is *VERY* important. I messed this up because my eyesight is as good as my grandma's. 

In your `tailwind.config.js` file, you need to have something like this

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Do not stop looking!!! Look closer at the `content` key. That needs to point to the right directory. Point it to your `themes` folder! Do it! Do it now!

For example:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./themes/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Now, this is all under assumption that you have hugo themes that you want to persolize. If you have your own 'theme', this also works. However, if you have your files in some other folder, like `layout` in the root, you have to point your `tailwind.config.js` to that folder. That's where you'll be adding inline styles.

Anyway, that part is done. Next you will need to add an input for your inline css styles!

Create `input.css` file in `themes/{theme name}/static/css/` and the following lines:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Next, run this in your terminal in root directory o fyour hugo project (where `tailwind.config.js` is)
```shell
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```
Add this line also to your npm scripts because you will be running this command a lot. Below is an example,

```json
  "scripts": {
    "tw": "npx tailwindcss -i ./themes/{theme name}/static/css/input.css -o ./themes/{theme name}/static/css/output.css --watch",
    "hugo": "hugo serve -D"
  },

```
With this, we can simply run 
```shell
npm run tw
```
Then,
```shell
hugo serve -D
\\ or if you copied above you can do npm run hugo
```

Now, every time you add an inline tailwind style, you will see that hugo rebuilds the site every time you change something! Cool. 

Go and make something cool!