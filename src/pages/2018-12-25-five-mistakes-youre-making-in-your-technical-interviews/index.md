---
path: '/five-mistakes-youre-making-in-your-technical-interviews'
date: '2018-12-25'
title: '5 Mistakes You Are Making In Your Technical Interview And How To Avoid Them'
author: 'Emma Wedekind'
description: 'Technical interviews are the most nerve-wracking experiences in any engineers career. Often, you are so worried about impressing the interviewers that you forget to relax and be yourself.'
---

![People at table](https://images.unsplash.com/photo-1536139825125-2026747cd156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)

Technical interviews are the most nerve-wracking experiences in any engineer's career. Often, you're so worried about impressing the interviewers that you forget to relax and be yourself.

So today let's delve into five mistakes you may be making in your interviews, and how to avoid them!

# 1. You don't ask any questions

How often have you encountered this scenario:

_You're sitting in the chair across from your interviewers. They ask you to solve an algorithmic coding question. You have absolutely no idea where to start._

This scenario, sadly, is not uncommon; we've all been in this situation. But the biggest mistake you can make is to not ask any questions.

If you don't thoroughly understand the problem, or you're uncertain if particular limitations exist... ask!

Most interviewers are rooting for you; they want you to succeed! By asking questions about the problem, you not only show that you're thinking about all aspects of the issue, but you're giving the interviewer a chance to help you. Interviewers will often times provide hints, or help guide you, if you ask the right questions.

Let's take another scenario:

_Your interview is wrapping up. You think it went great! The interviewers then ask if you have any questions for them. You say no, and go on your merry way._

Never, ever leave an interview without asking the interviewers a question. I typically have one to three questions ready to ask for every interview.

When you leave an interview without asking any questions, it signals to the interviewers that you're either not invested in this position, or you were so confident that you didn't feel the need to do any research.

Companies like to see that you've taken time to research them (even if you only spent five minutes Googling.)

Here are some questions you may want to ask:

- I saw that your company recently acquired X; how will this impact Y?
- What is the work/life balance?
- What opportunities do you provide for furthering your skill sets and education? i.e. Books, conference allowances, access to online educational platforms.
- What does your typical day look like?
- Why did you choose to work for the company?
- What is your favorite thing about working here?

# 2. You solve for the most optimized solution first

Many candidates make the assumption that they have to provide the most optimized, performant solution to an algorithmic coding question. And while this is true, to a certain extent, it doesn't have to be your first solution.

It is totally fine to start with a brute-force solution, and work your way to an optimized one.

Let's take an example.

Let's say you were asked to return the number of pairs of letters in an array.

Since you have no idea where to begin, let's go ahead and create a brute-force solution.

![Coding example 1](https://thepracticaldev.s3.amazonaws.com/i/90c1gt2sxpj6xv3gdv8j.png)

What is this example doing?

- We've created an object, called alphabetDictionary which holds each letter of the alphabet, and a number, initialized to 0, which indicates how many times we've encountered this letter in the array.
- Next, we iterate through the length of the array and for each letter, increment the value in the alphabetDictionary.
- Third step is to iterate through the alphabetDictionary and see how many times each letter was found. If the letter was found an even amount of times, divide it by two (to get the correct number of pairs) and add that to the numPairs variable. If the letter was found more than twice, but isn't an even number, subtract one off of the total count (to make it even), then divide by two (to get the number of pairs) and add it to the numPairs variable.
- Then, just return numPairs.

This is extremely verbose, but it works! Let's see if we can get a more elegant solution.

Since we don't care which letters were found in pairs, we can initialize alphabetDictionary to an empty object. Thus, we only add a value if the letter was found.

![Code example 2](https://thepracticaldev.s3.amazonaws.com/i/fcdbysmq4kp8c46h9ghi.png)

It's important to note that both of these algorithms have exactly the same runtime O(n), however we were able to make the second snippet a bit more elegant.

You can use the technique of enhancing your brute-force method to come up with the most optimized coding solution.

# 3. You work through problems in your head

When you're deriving a solution for a coding example, it's imperative that you talk through your thought process. The interviewer cannot possibly read your mind; it's up to you to communicate your thoughts.

Even if you're unsure of the solution, talk through all of the things you do know. What are you missing?

By talking through these points you're more likely to find a viable solution, and the interviewer gets some insight into how you problem solve.

The interviewer cares more about your ability to problem solve than they do about you achieving the 100% correct solution.

# 4. You aren't honest about your experience with certain technologies

Many candidates, upon reading a job application requesting knowledge of specific technologies or languages, will buff up their technical experience.

Never list a technology, framework, or language that you could not answer technical interview questions about.

If an interviewer asks you "Have you worked with React?" and you say "Yes I have", you'd better be able to answer questions about the library.

There is no quicker way to shoot yourself in the foot than by listing proficiency of a technology you have baseline knowledge of.

Instead, you're welcome to say "I've taken a few introductory React courses, but haven't worked with it in any professional setting. It's something I truly would like to learn."

This shows your willingness to learn new skills, while being realistic about your current skillset. Interviewers will appreciate your self-awareness.

# 5. You prefer to BS your way through a problem than admit you don't know the answer

If you don't know the answer to a theoretical question, don't BS your way through it. One of the quickest ways you can show your interviewer respect is by being considerate of their time. If you don't know the answer, it's okay to admit it.

Instead of pretending to know the answer, I like to respond with: "To be honest, I'm not sure, but if I had to make an educated guess, I would say..." This shows the interviewer that you're trustworthy and honest.

Honesty is always the best policy.

---

Technical interviews don't have to be scary. If you prepare and give it your all, you will succeed. Take each question one by one and don't get overwhelmed. Remember to breathe and start by breaking it down into manageable chunks and you'll be on your way to landing that developer job!
