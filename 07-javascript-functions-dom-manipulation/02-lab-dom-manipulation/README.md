#### Reka's Notes:
Seems like elements modified via JS will not be added to original html file.

Quotation marks not needed when referring to a page element that has been declared as a variable.

```js
document.body
```
only comes into the picture when we are appending or removing chil elements.


# DOM Manipulation Part 1

Open index.html in the browser. Then, open the console and make the following changes to the box directly from the console:

1. Using `getElementById` to select __box1__, change the following style properties of the box:
    * height: 100px
    * width: 750px
    * background colour: purple
2. Now use `querySelector` to select the __box2__ by ID and add the class "box-cool" to the element (no need to write your own CSS for it).
3. Next, use whatever selector you wish to change the link URL from https://google.com to https://smartly.io. Click the link to test it!
4. Now, use `querySelectorAll` to select __both boxes__ and change their background colour to be "paleturquoise".

Was there anything you did differently for the 3rd step compared to the first 2? What was it, and why was it needed?

# DOM Manipulation Part 2

Continue with the same index.html and write code in console directly to make these changes:

1. Add a `<footer>` element to the bottom of the page. It should say "Powering Beuatifully Effective Ads".
2. Add a 4th item to the "Why Smartly.io" list that has the content "Scale".
3. Delete the existing `<footer>`.
4. This time, add a new `<footer>` that looks like this HTML:

```html
<footer>
  <a href="https://smartly.io">Start</a> creating Beautifully Effective Ads today.
</footer>
```
