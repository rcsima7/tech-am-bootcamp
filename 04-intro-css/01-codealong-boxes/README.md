# Code along boxes

For this code along, we will use demo.html and main.css in this folder.

You will be creating a bunch of divs:

```
<div class="box-demo">box demo</div>
```

Set a background-color and border on each div so you can see it's behavior.

```
.box-demo{
  background-color:yellow;
  border:1px solid black;
}
```

### Display Inline

Create a series of divs as above and add the class `inline-demo`. In your CSS file set these divs to display inline.

Open the chrome console and see these elements change as you apply padding and margin on them.

In your CSS file, give these divs a width. Do they take up the width?

Resize the width of the screen and see how the boxes flow around the screen and wrap.

How do these divs wrap when you have a long string inside with no spaces? i.e.: `983749012739407129034719023740912837017230971209347129038740192837490128739047182390871290387401923874091287340981723498`

### Display Inline Block

Create a series of divs as above and add the class `inline-block-demo`. In your CSS file set these divs to display inline-block.

Resize the width of the screen and see how the boxes flow around the screen.

In your CSS file, give these divs a width. Do they take up the width? 

Next, try and set the width to a percentage value, like 80%. What happens?

What happens when you put these elements around other inline elements?

```
====== inline element ======
====== inline element ======
====== inline element ======
=== inline-block element ===
=== inline-block element ===
====== inline element ======
=== inline-block element ===
```

### Display Block

Create a series of divs as above and add the class `block-demo`. In your CSS file set these divs to display block.

Resize the width of the screen and see how the boxes flow around the screen.

In the chrome console, explicitly set the width of the block elements to less than 100%. See what happens when you make them narrower and narrower.

What happens when you put these narrow elements around other kinds of display elements?

```
====== inline element ======
====== inline element ======
====== block  element ======
====== block  element ======
====== block  element ======
====== inline element ======
=== inline-block element ===
=== inline-block element ===
====== inline element ======
=== inline-block element ===
```