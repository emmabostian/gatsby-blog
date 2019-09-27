---
path: '/design-systems-foundations'
date: '2019-07-17'
title: 'Design Systems: Foundations'
topic: 'Design systems'
description: 'The web was built as a set of interconnected pages, and blossomed from how content was historically consumed: through books. Since books format content in a series of pages, it was only natural for web pages to leverage the familiar paradigm. Thus, web pages were born.'
---

The web was built as a set of interconnected pages, and blossomed from how content was historically consumed: through books. Since books format content in a series of pages, it was only natural for web pages to leverage the familiar paradigm. Thus, web pages were born.

Other technology terminology stems from printed books: bookmarks and pagination are two such examples. And while the traditional concept of web pages worked for decades, we’ve quickly realized that this paradigm is no longer viable for building sustainable web applications.

Many companies are in the throes of a paradigm shift towards more modular web applications through the use of reusable components. And while modular web applications are more scalable and testable, they can also provide some challenges.

Building component libraries is good practice, so long as all teams within an organization are developing and consuming one library; unfortunately this often isn’t the case. More likely you’ll see multiple teams building the same component in different places; this is a catalyst for application inconsistency.

This is where design systems shine.

Design systems allow teams throughout an organization to define their own identity and bake it into accessible and consistent components. These are subsequently consumed by product teams and can have an invaluable impact on the success of a product.

Let’s delve into some of the foundational knowledge of design systems, and learn how your team can adopt them to build accessible, scalable, and consistent products.

# What Is A Design System?

A design system is a set of reusable standards and components which reinforce a brand’s identity. These standards and components allow teams to efficiently build user interfaces with respect to accessibility, performance, consistency, and brand.

While the industry hasn’t officially defined a design system, in general it’s comprised of three facets: a design language, a component library, and a style guide. We’ll dive into each of these areas in-depth a bit later.

# Benefits Of A Design System

There are many benefits of establishing a design system. Here are some of the benefits.

## Accessibility

Design systems bake accessibility into the design language and component library, ultimately ensuring that every customer can use your product, or products, and achieve the same results.

Through the design language we can ensure that the color palette has sufficient contrast, the typography scale is legible, and the content is digestible.

These design language patterns are the foundation for building the component library, which ensures we leverage semantic HTML elements. And when HTML isn’t sufficient, we incorporate WAI-ARIA to fill in the gaps.

Accessibility is no longer an after-thought.

## Trickle-Down Style Updates

When a design pattern is updated, developers no longer have to struggle to update the components in multiple places. Design systems provide one source-of-truth for components and patterns. Thus, styles must only be updated in one place. The changes are then propagated to products with just a quick update to the library package version.

## Responsiveness

Component libraries are built to be responsive. They account for varying screen resolutions and viewports.

## Consistency

Arguably one of the most vital benefits of a design system is consistency. As the number of teams working on a product scales, the UI remains consistent.

## Easy On-Boarding

Having a design system significantly reduces the on-boarding time of new team members by providing one source-of-truth for them to learn. By providing comprehensive documentation in one easy-to-find location, we reduce the overwhelm of staring a new job.

Additionally, developer and designers can easily collaborate cross-team when there is one component library being used.

## Improved Development Speed

Once the component library has had a stable release, development speed will be drastically improved.

Developers will no longer be burdened with building components from scratch and ensuring that they’re accessible and responsive. They will simply be able to import and leverage these components.

# Drawbacks Of A Design System

While there are many benefits of a design system, there are also some drawbacks. Below are some of the most common.

## Time Consumption

Design systems aren’t built overnight. Often they take many months to years to build a stable version.

Additionally, design systems are never “done.” There will be points within a system life cycle where the focus is primarily on maintenance instead of active development. And while these periods of maintenance take less designer and developer resources, the ultimate reality is that design systems are products, not projects; they must be nurtured to survive.

## Large, Up-Front Commitment

For a system to succeed, there must be an up-front investment of designers and developers. Often a lack of dedicated resources leads to system failure.

## Product Team Buy-In

Product teams are a design system’s primary stakeholders. Without their buy-in and support a system cannot succeed.

# Who Is Building Design Systems?

There are many revered companies adopting the paradigm of design systems. The benefits of systems are being more widely acknowledged, causing industry leaders to pave the way for adoption.

Below are some of the most widely known design systems being developed.

## Mailchimp

Mailchimp is a popular tool for marketing email campaigns. They have developed a comprehensive [design system](https://ux.mailchimp.com/patterns/color).

They’ve even published a separate [content style guide](https://styleguide.mailchimp.com/) to help their employees build products with the persona of Mailchimp.

![Mailchimp color](https://miro.medium.com/max/3422/1*6it8yZpb4K5kt4u0pw4yYw.png)

## Material Design

Google [Material Design](https://material.io/design/) is one of the most notable systems to date. Not only does the style guide include foundation such as color and iconography, but their [component library](https://material.io/develop/) serves iOS, web, Android, and Flutter.

![Material Design](https://miro.medium.com/max/3422/1*QayqhTIbeNgXCX2eMddCxA.png)

## IBM Carbon

[IBM Carbon](https://www.carbondesignsystem.com/) is another revered design system. They provide components in React, Vue, Angular, and of course, vanilla JavaScript.

![IBM Carbon](https://miro.medium.com/max/3416/1*kv-2MEKe0y21LJ5z5j3JDg.png)

## Atlassian

[Atlassian’s design system](https://www.atlassian.design/guidelines/brand/color) is housed within a beautiful style guide. They provide many resources for brand, identity, and iconography.

![Atlassian](https://miro.medium.com/max/3412/1*q1CK-2wA1UWxt7WIUrIQEw.png)

I hope part one served as a solid foundation of design systems. Part two will cover Design Language in-depth. Feel free to let me know what you think about design systems down below.
