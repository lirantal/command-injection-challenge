---
type: lesson
title: Process Exec Payloads
focus: /api-timezone.js
terminal:
  panels:
    - 'terminal'
    - 'output'
  activePanel: 1
  allowRedirects: true
---

# Welcome to your first Command Injection lesson!

Hey there, and welcome to the Command Injection challenge  👋!

In this lesson, the goal is to teach you how dangerous it can be to execute commands in a shell without proper security controls. You will learn how to exploit a vulnerable application by injecting commands into the shell.

## Your mission

Look at the provided `./api-timezon.js` file that would typically be used in a Node.js web application route to retrieve timezone information from a third-party remote service. The code is vulnerable to command injection, can you figure out a query payload that will execute a command on the server?

Happy hacking!
