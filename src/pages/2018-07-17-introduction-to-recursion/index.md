---
path: '/introduction-to-recursion'
date: '2018-07-17'
title: 'Introduction To Recursion'
topic: 'Computer science'
description: 'I vividly remember the day in college where my Introduction to Data Structures professor introduced the concept of recursion. And my brain promptly exploded.'
---

I vividly remember the day in college where my Introduction to Data Structures professor introduced the concept of recursion. And my brain promptly exploded.

This was such a radical idea and I felt like a potato with legs trying to figure out what the hell was going on.

Yes, recursion can be an absolute headache to think about… but once you draw it out, the solution becomes a lot clearer. So today, I’m going to break down a simple recursion problem in the hopes that you too can master this complex subject.

# What Is Recursion?

Recursion is [“a method of solving a problem where the solution depends on solutions to smaller instances of the same problem (as opposed to iteration)](<https://en.wikipedia.org/wiki/Recursion_(computer_science)>).”

## Recursion Example #1: The Taco Stand

Suppose you’re waiting in line to buy a taco, but unfortunately you can’t see how many people are in line in-front of you. You could walk to the front of the line and count the number of people (iterative). This is a pain in the ass because it requires you to leave your spot in line, and you’re hangry.

Instead, you could ask the person in front of you how many people are in line before them. They don’t have the answer, so they ask the person before them how many people are in-front of them in line.

This pattern continues until the question reaches the front of the line and finally the person being asked says “there are zero people in front of me.” Each person in line will then turn around and tell their neighbor the number of people before them, plus one. This continues until the final answer reaches you.

The JavaScript code might look something like this:

```javascript
function findPlaceInLine(numberOfPeopleInLine) {
  if (numberOfPeopleInLine === 1) {
    return 0
  }
  return 1 + findPlaceInLine(numberOfPeopleInLine - 1)
}
```

And refactored for succinctness:

```javascript
function findPlaceInLine(numberOfPeopleInLine) {
  return numberOfPeopleInLine === 1
    ? 0
    : 1 + findPlaceInLine(numberOfPeopleInLine - 1)
}
```

You might be wondering… okay but both of these solutions require you to go through the entire line to get an answer, so there is no benefit to using recursion here.

You are absolutely right. But there are use-cases where recursion can greatly surpass an iterative solution.

## Recursion Example #2: The Address Book

Let’s say you’re getting married. You’ve sent out all of your invitations, and received all of the responses back except one: Aunt Sharon.

Aunt Sharon is notorious for being shady… so you decide to call her up and demand to know her response.

You pull out your address book and have two choices. You could start at the first page and flip through every single page until you find her contact information. This could be extremely time consuming if Aunt Sharon’s last name begins with a Z; or it could be efficient if her last name begins with an A. Eh… I don’t feel like hedging my bets (even though I know Aunt Sharon’s last name… work with me here.)

Instead, you decide to flip to the middle of the book and use the “Binary Search Algorithm” to look her up.

I’m not going to delve too deeply into algorithms, but the premise of the Binary Search Algorithm is that it grabs the middle element in a sorted array and compares the target value to the middle element. If the target value and middle element are equal, return the middle element (woohoo!) If the target is lower than the middle, recurse on the lower half of the array, otherwise recurse on the upper half (and discard the middle element).

Since Aunt Sharon’s last name is Flaky, and since there are 26 letters of the alphabet, we start at the letter “M” (I rounded down since there are an even number of letters). Since “F” comes before M, we do the same thing but using the letters A to L as the new “array”. The process looks something like this:

```
letters = [A - Z]
target = F
middle = Mtarget < M
// recurse on lower halfletters = [A - L]
middle = F
target = middle
FOUND!
```

By using recursion, we found Aunt Sharon’s name extremely quickly! Unfortunately the crazy woman forgot she bought tickets to “Kitty-Expo” for the same day, so she won’t be attending your nuptials.

If this example saved us precious minutes on a small-scale, imagine how much computing time could be saved on a larger scale.

Of course, there are instances where recursion proves problematic (stack overflow), but that’s a topic for another day.

# Cracking The Recursive Coding Question

A lot of angst from completing coding interviews is the dreaded recursion question. So I’m going to walk you through the solution to a common interview question.

This is a problem taken from the coding site [Hacker Rank](https://www.hackerrank.com/challenges/the-power-sum/problem).

The question prompts:

_Find the number of ways that a given integer, X, can be expressed as the sum of the Nth powers of unique, natural numbers._

Um… what??

Let’s take a couple of examples:

1. If X = 10 and N = 2, find all combinations of unique squares that add up to 10. There is only one unique solution to this, and that is 1² + 3².
2. 100 = (10²) = (6² + 8²) + (1² + 3² + 4² + 5² + 7²).

Okay let’s get started.

Firs thing, let’s create the function skeleton:

```javascript
function powerSum(X, N,number {

}
```

- X is the target value we’re looking for
- N is the exponent we’re multiplying by
- number is the value we’re raising to the power of N

_Note that X and number will change values as the recursion progresses, but N will remain constant._

Okay, so what’s the first thing we need?

**The first thing you need to have in a recursive function is a base case.** If you don’t have a base case (a condition that, when met, will trigger the recursion to bubble back up), you’ll get a stack overflow error.

In this situation we will have 3 checks:

- Is the value of number to the power of N less than X?
- Is the value of number to the power of N equal to X?
- Is the value of number to the power of N greater than X?

Let’s outline the procedure for each of the three cases. For simplicity’s sake I will call the value of num to the power of N powerOfNum.

_Is the value of number to the power of N less than X?_

If powerOfSum < X, we need to recurse on the left and right side.

- On the left side, we call powerOfSum with X = 10, N = 2, and number = 2.
- On the right side, we call powerOfSum with X having the value of X minus the powerOfNum variable we declared above (num to the power of N), N stays 2, and number = number + 1;

Is the value of number to the power of N equal to X?

If the value of `powerOfNum` is equal to X, return 1 because we’ve got a sum of squares that add up to the target!

Is the value of number to the power of N greater than X?

In this case, we don’t have a sum of squares that are equal to the target, so just return 0.

Great! So let’s write the code.

```javascript
function powerSum(X, N, number) {
  let powerOfNum = Math.pow(number, N)
  if (powerOfNum < X) {
    return powerSum(X, N, number + 1) + powerSum(X - powerOfNum, N, number + 1)
  } else if (powerOfNum === X) {
    return 1
  } else {
    return 0
  }
}
```

This is a little hard to digest, so here is an illustration of the recursion tree for X = 10 and N = 2. You can see here that with X = 10, there is only one solution.

![Recursion](https://miro.medium.com/max/2852/1*LjXs5-lOObVh4P9noP0lMg.png)

And here is what the flow looks like:

![Recursion](https://miro.medium.com/max/2852/1*C_BG1dqp6oBRhkXQVGI_Ow.png)

And if all else fails, brute force it.

# Conclusion

I don’t claim to be a recursion expert, but thinking of the complex topic in this way helped to make it a bit more understandable.

If you liked this article, my awesome analogies, or my superb diagram-making skills, feel free to give me a clap or two and follow me!

Thanks for reading!
