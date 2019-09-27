---
path: '/four-types-of-web-app-security-risks'
date: '2017-07-24'
title: 'Four Types Of Web App Security Risks'
author: 'Emma Wedekind'
description: 'In today’s day and age, establishing preventative measures to combat Internet trolls is a must. This post is intended to give you a high-level overview of four security breaches that can happen, and how to prevent them.'
---

Often, creating a new web app is exciting — you get to choose the tech stack you want, you get to play around with the design of your app, and you have zero defects (if only it stayed that way). Most likely, web app security is not the first thing on your mind.

In today’s day and age, establishing preventative measures to combat Internet trolls is a must. This post is intended to give you a high-level overview of four security breaches that can happen, and how to prevent them.

# User-input Validation

Typically, when implementing a form in your web app, you’ll add some form (no pun-intended) of validation to ensure the correct information is being given. Yet, most people don’t realize that forgetting input validation can make your web app susceptible to an attack.

Here are a few examples from the W3C of how omitting input validation can come back to haunt your dreams:

- If you allow “seemingly-harmess” elements, such as the `<img>` element, limit the attributes only to the ones which are needed. Once you allow any attributes to be set on these elements, an attacker could use the onload attribute, for example, to run a script.
- If you allow URLs to be provided, links for example, the scheme of each URL must be explicitly safelisted. (To learn how to create a URL scheme, head over to this awesome article by [CSS-Tricks](https://css-tricks.com/create-url-scheme/).The most common type of URL scheme attack is the “javascript:” scheme, but user agents have implemented others.
- Allowing a `<base>` element to be inserted means that any `<script>` elements with relative paths can be hijacked, thus leading form submissions to be redirected to a hostile site. (Not sure what the base element is? Head over to [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)).

# Cross-site Scripting

Cross-site scripting, or XSS, enables attackers to inject client-side scripts into web pages. This type of attack can have devastating results, by exploiting a vulnerability of a web app to deliver a malicious script to the victim’s browser. The most acknowledged vessel for XSS is JavaScript, as it’s imperative to most web apps today.

To execute an XSS attack, the attacker must find a way to inject their payload into the targeted web page. For the attack to be successful, the website needs to directly include user input in its pages. The attacker is then free to insert a string that will be used within the web page, and treated as code by the browser.

Let’s illustrate a simple example:

```
print "<html">
print "<h1>My blog post</h1>"
print database.blogPost
print "</html>"
```

The pseudo back-end code above displays a blog post on a web page. Nothing too fancy going on here. This code is vulnerable to an XSS attack, because the attacker can publish a blog post containing a malicious payload such as `<script>attackVisitor();</script>`. When users visit this blog post, they will see the following web page:

```
<html>
<h1>My blog post</h1>
<script>attackVisitor();</script>
</html>
```

The `attackVisitor()` function will execute, and the user will be helpless to stop it.

You can learn more about about XSS [here](https://www.acunetix.com/websitesecurity/cross-site-scripting/).

# SQL Injections

An SQL Injection (SQLi) refers to an injection of code where an attacker can insert malicious SQL statements that control a web application’s database server. In a nutshell, this is bad news.

Using SQLi, an attacker can weasel their way through your authentication mechanisms and access the entirety of your database. Attackers can also add, modify, and delete records within your database, destroying your data integrity.

To implement an SQLi, an attacker must first find a vulnerability in the form of an input, within your web app, that is included within an SQL query. The attacker can then insert a malicious payload that will be included as part of this SQL query and alter the database. Let’s take a look at a pseudocode example.

```
# Define the POST variables
username = request.POST['username]
password = request.POST['password]

# Vulnerable SQL query
sql = "SELECT id FROM users WHERE username='" + username + "' AND password='" + password + "'"

# Execute the sql statement
database.execute(sql)
```

This pseudocode is an example of authenticating a user with a username and password against a database with a table called users and a username and password column.

An attacker can easily inject a payload such as ‘password’ OR 1=1. This would result in the following SQL query:

```
SELECT id FROM users WHERE username=’username’ AND password=’password’ OR 1=1
```

This will result in the authentication being bypassed.

But how can we protect against SQLi attacks?! The answer is SQL parameters. SQL parameters are values that can be added to an SQL query at execution time in a controlled manner. The SQL engine verifies each parameter to ensure its validity for the column. Parameters are denoted by the @ symbol.

```
name = getRequestString("CustomerName");
address = getRequestString("Address");
city = getRequestString("City");sql = "INSERT INTO Customers (CustomerName,Address,City) Values(@0,@1,@2)";db.Execute(sql,name,address,city);
```

You can learn more about SQLi attacks [here](https://www.owasp.org/index.php/SQL_Injection_Prevention_Cheat_Sheet).

# Clickjacking

Also known as “UI redress attacks”, clickjacking is the act of concealing a button or link, through transparent or opaque layers, to trick users into clicking on a link unintentionally. The attacker is said to be “hijacking” clicks meant for their page, and routing them to another page.

Let’s illustrate an example. Suppose you visit a web page that has a button that says “Click here to win a free vacation!” Wow, what a great deal! I’ve been needing a vacation! Wrong. The hijacker has implemented an iframe containing your email account and lined up the “Delete all messages” button directly on top of the free vacation button. Thus, when I attempt to claim my trip to Hawaii, I am really deleting all messages in my email inbox. Well, crap.

There are two main ways to defend against clickjacking:

- Employ defensive code in the UI to ensure that the current frame is the most top-level window
- Send the appropriate X-Frame-Options HTTP response headers that instruct the browser not to allow framing from other domains.

You can check out the [Clickjacking Cheatsheet](https://www.owasp.org/index.php/Clickjacking_Defense_Cheat_Sheet) to learn more.

# Conclusion

Although we’d like to believe that everyone is here for the right reasons, there will always be script kiddies looking to destroy your morale. Although this isn’t a comprehensive list of possible attacks, it’s at least a primer into the minds of these awful, Internet trolls. Point in case: protect your web apps, or you will be hacked, and you will miss out on your free vacation to Hawaii.
