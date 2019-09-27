---
path: '/a-guide-to-css-flexbox'
date: '2017-07-28'
title: 'A Guide To CSS Flexbox'
topic: 'CSS'
description: 'Flexbox, or CSS3 Flexible Box, is a super lightweight way to lay out UI components on a web page. Not only is it easy (and fun) to learn, but it makes designing for responsive screen sizes painless.'
---

Flexbox, or CSS3 Flexible Box, is a super lightweight way to lay out UI components on a web page. Not only is it easy (and fun) to learn, but it makes designing for responsive screen sizes painless.

Here is a cheatsheet for using Flexbox, and some fun diagrams to illustrate the concepts.

Once you get the hang of it, Flexbox will be your new best friend.

---

# Flexbox Terminology

![Flexbox terminology](https://miro.medium.com/max/2366/1*ubDrM-3m22gLF_pZ4DCdMw.png)

**Main axis**: This is the primary axis along which flex items are distributed. This will change depending upon the value of flex-direction.

**Main-start and Main-end**: Flex items are placed within a container beginning at main-start and resting at main-end.

**Main-size**: A flex item’s width or height is the main size. This depends upon which is the main direction. The main size property will either be ‘width’ or ‘height’.

**Cross axis**: This is the axis that is perpendicular to the main axis. The direction depends on the main axis direction.

**Cross-start and Cross-end**: Items are placed beginning at the cross-start side of the flex container and move towards the cross-end side.

**Cross-size**: The width or height of a flex item, which again depends on the main direction. This property will be either ‘width’ or ‘height’.

---

# Flex Container Properties

**display**: Defines a flex container. It can be inline, or block, depending on the value.

```css
.container {
  display: flex | inline-flex;
}
```

**flex-direction**: Establishes the main-axis, defining the direction flex items are placed in your flex container.

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

![Flex direction](https://miro.medium.com/max/3316/1*-vAZs39DYVosdxg5hlJEgQ.png)

**flex-wrap**: Normally, flex items will attempt to fit onto one line. This can be changed such that flex items start wrapping to a new line when the width decreases.

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

![Flex wrap](https://miro.medium.com/max/4612/1*RdW4fVOIGAVkal11-KDAEw.png)

**flex-flow**: This is a combined version of flex-direction and flex-wrap, which together define the flex container’s main and cross axes. The default value is `row nowrap`.

```css
flex-flow: {flex-direction} | {flex-wrap};
```

**justify-content**: This defines the alignment of flex items along the main axis. It helps the developer distribute the extra white space.

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around
    | space-evenly;
}
```

![Justify content](https://miro.medium.com/max/2152/1*Cwx2-2qIgt1b-CXGjzxxdw.png)

**align-items**: This defines how flex items should be laid out along the cross-axis.

```css
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

![Align items](https://miro.medium.com/max/2152/1*zCSlxdeqBMvzhfUxfEWMPw.png)

**align-content**: This aligns a flex container’s internal boundaries when there is extra white space in the cross-axis. This won’t affect the content when there is one single line.

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around;
}
```

![Align content](https://miro.medium.com/max/2634/1*lyQlT_RR5HjsToLe0cz3Zw.png)

---

# Flex Item Properties

**order**: By default, items are laid out in the order in which they appear. However, you can control the order the items appear in by giving them an order value.

```css
.item {
  order: {integer};
}
```

![Order](https://miro.medium.com/max/2634/1*-qNTRjoNMuOqYkDArFYbLg.png)

**flex-grow**: Describes how the flex items will grow. This property will accept a value that serves as a proportion. This indicates how much of the available space inside the flex container each item should take up. By default, all flex items have a flex-grow set to 1. IF a child has a flex-grow of 2, the remaining space will take up twice as much space as the others.

```css
.item {
  flex-grow: {number};  // default = 0
}
```

![Flex grow](https://miro.medium.com/max/1952/1*zXs-V06KqnT69Q5LAgJKuw.png)

**align-self**: Allows items to override the default alignment.

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

![Align self](https://miro.medium.com/max/1952/1*DDkMvTfeG7NzI4BbFEgISA.png)

**flex-shrink**: Defines the ability for a flex item to shrink.

```css
.item {
  flex-shrink: {number};
}
```

**flex-basis**: Defines the default size of an element prior to distributing the remaining space. It can be a length (3rem, etc.) or a keyword. The auto keyword means “use my width and height for this value”. The content keyword means “check out my content and size appropriately.”

```css
.item {
  flex-basis: {length} | auto;
}
```

**flex**: Shorthand for flex-grow , flex-shrink , and flex-basis . The second and third parameters aren’t required.

```css
.item {
  flex: none | [ {flex-grow} {flex-shrink} || {flex-basis}];
}
```

---

# Practice

If you’d like to practice Flexbox, here are some fun games to teach you the concepts.

- [Flexbox Froggy](http://flexboxfroggy.com/)
- [Flexbox Defense](http://www.flexboxdefense.com/)
- [Webflow](https://preview.webflow.com/preview/flexbox-game?preview=d1a26b027c4803817087a91c651e321f&m=1)
