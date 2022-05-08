# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

Desktop

<img src="/images/desktop-screenshot.JPG" width="400" height="800">

Mobile

<img src="/images/mobile-screenshot.JPG" width="400" height="400">

### Links

- Solution URL: https://github.com/cove86/faq-accordion
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- HTML5 markup
- CSS custom properties
- Flexbox


### What I learned

I had not previously coded an accordion in any of the tutorials/courses I have completed up until this point so I had to look up how to create this. I would say I learned more doing this than any previous challenge. I feel more confident in the way I structure elements in the html and have a greater understanding of how each one relates to each other especially with the parent/sibling/child relationship and how to traverse the DOM to get to each one.

Although I'm sure there is a better way of doing this I was quite happy I worked out the below.

```js
const infoTextEl = clicked.parentElement.nextElementSibling.children[0];
}
```

### Useful resources

- https://www.w3schools.com/howto/howto_js_accordion.asp - Really good guide on how to create an accordion.
- https://zellwk.com/blog/dom-traversals/ - This is an amazing article which helped me finally understand DOM traversal. This went straight in my bookmarks for future reference

## Author

- Frontend Mentor - https://www.frontendmentor.io/profile/cove86
- Twitter - https://twitter.com/Cove1986

