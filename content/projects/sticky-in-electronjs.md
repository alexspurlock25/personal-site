---
title: Password manager in ElectronJS and SQLite
description: A simple password and username manager built using ElctronJS and SQLite.
keywords:
  - javascript and sqlite
  - electrongjs and sqlite
  - password manager
  - username keeper
date: 2023-05-17
---
Sometime in 2020, after I received my Associate's in Information Technology from the University of Cincinnati, I become very sad about the job market during that time. Covid19 just sprung up, everyone was scared, and I only had an Associate's - no other tangible experience!

I begin thinking of side project ideas. And so, my wife suggested that I create a password manager. She wanted to use it. Well, I did make the app, but she did not use it. lol.

I wrote this app as a desktop app. Later I wanted to make it also available as a web app. However, those dreams died. I used ElectronJS because of this fact - it could easily be translated to a web app (I also had plans to have builds for other OSs). Hindsight 20/20, I should have created the web app first, then used electron as a window to the web app - would have been much easier. I believe there's an API for that.

Anyway, I used SQLite as a local database, storing user info in the user home directory. I did this in case there were more users on the same computer - they can't see each other's data. I never returned to the app, but I also had plans to encrypt the SQLite file and encrypt the passwords themselves. 

JQuery was heavily used for the cool little animations. I should have used native features so that JQuery's bloat was not attached to the app.

I used several other small libraries as well, For example, electron-settings, which kept local settings about the user's preferences on themes among other things.

I read somewhere that we should not waste our time returning to our old projects. Especially the projects that do not serve a real purpose. This is what I am doing here, as well.  There are many things that I would change if I had to rewrite this desktop app, but I simply do not have the time or interest to revisit this dinosaur.

[Check it out](https://github.com/alexspurlock25/sticky)! Do not download it, however. It is not a safe password manager and I no longer maintain it.