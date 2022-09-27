# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Intro component with sign up form solution](#frontend-mentor---intro-component-with-sign-up-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./images/desktop-screenshot.png)
![](./images/desktop-active-screenshot.png)
![](./images/mobile-screenshot.png)

### Links

- Solution URL: [Frontendmentor.io](https://www.frontendmentor.io/solutions/intro-component-with-signup-form-using-tailwind-css-UqDgyzP5rU)
- Live Site URL: [fsuropaty.github.io](https://fsuropaty.github.io/Intro-component-with-sign-up-form-challenge/)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/) - for Styling

### What I learned

I learned a lot about form validation using JS and how to add a class especially Tailwind CSS class to a tag

```js
function isInvalid(input, message) {
  const formControl = input.parentElement;
  const error = formControl.querySelector("p");
  const icon = formControl.querySelector("img");

  input.placeholder = "";
  error.className = "error";
  icon.className = "error-icon";
  input.classList.add("error-field");
  error.innerText = message;
}
```

### Useful resources

- [W3Schools](https://www.w3schools.com) - Pretty much your guidebook in website development
- [MDN](https://developer.mozilla.org) - W3Schools but from Mozilla.
- [Tailwind CSS](https://tailwindcss.com) - Essentials Docs
- [Codepen.io](https://codepen.io) - Helped me a lot how to do a form validation

## Author

- Website - [fsuropaty](https://www.fsuropaty.github.io)
- Frontend Mentor - [@fsuropaty](https://www.frontendmentor.io/profile/fsuropaty)

## Acknowledgments

Thanks to Florin Pop for the awesome [form validation tutorial](https://www.youtube.com/watch?v=rsd4FNGTRBw&t=1389s) it helped me a lot.
