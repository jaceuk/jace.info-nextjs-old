---
title: 'Visual CSS debugging'
date: '2022-06-25'
excerpt: 'This quick tip will make debugging CSS in the browser allot easier.'
tags: ['CSS']
---

Debugging CSS can be time consuming and often involves stepping through divs in devtools to find out where the problem lies however this quick tip will make things allot easier.

This will add an outline around each element.

```css
* {
  outline: 1px solid red !important;
}
```

This will add an opaque background to each element.

```css
* {
  background-color: rgb(255, 0, 0, 0.05) !important;
}
```

No more wading through apparently endless divs!
