---
title: "You Don't Always Need Docker!"
description: "Why using docker and other abstractions hinders your ability to learn about system administration, performance and security and makes you use services that are expensive solutions for your small or personal projects."
date: 2025-04-16
---

## What Even Was My Problem With Docker?

My problem with Docker and the insights I am coming up with in this post came when I was working on this project called [Touch Programming](https://github.com/hazemKrimi/touch-programming) which is in a gist a small web application that gets AI generated code (more plagiarized than generated) in a programming language chosen by the user then the frontend uses that code for a typing test.

The AI part is basically an API taking the language name from the frontend and then feeding that to an "engineered" prompt which itself is fed to an LLM managed by [Ollama](https://ollama.com) through [LangChainGo](https://tmc.github.io/langchaingo/docs) (I was learning Golang through this project). Here is a small diagram showecasing the architecture:

![Touch Programming Architecture Diagram](./touch-programming-architecture-diagram.png)

I was not able to deploy the whole stack in a single dockerfile so I tried using docker compose and multiple dockerfiles for each part of the stack and that also was not successful. The problem was connecting the API to Ollama since they are deployed in separate containers.

I admit that I have skill issues when it comes to Docker and I could have made it work if I put more time into it but I had this idea pop up: "Since this is a small personal project why not deploy it directly?". And then I discovered [Dreams of Code Video on deployment without Docker](https://www.youtube.com/watch?v=DmbBgXK8M5M) and used it as a reference.

This resolved the issue I had connecting the API to Ollama since I only had to install the model on my instance and run the API executable that is compiled. And even more I got to learn about how t to create servers and proxies using Nginx, how to run executables as services using Systemd and even automate the deployment process using GitHub Actions.

## There Are Too Much Abstractions!

My deployment process is not fully straight forward since I had to manage and secure my VPS through limiting privileges to users, Create Nginx configs and Systemd service units and place them in the appropriate location with the correct user ownership along other stuff I needed to do to eventually make the deployment automatic whenever I push a change to my Git repo.

Through my decision to deploy directly in the host OS of my VPS I discovered that I am lacking fundamental knowledge when it comes to Linux and system administration which made me not understand the value of Docker and why it came to be and made me usually use it in cloud services that abstract away the prep work you need to do to deploy you programs.

Docker and cloud services and now AI have their merits especially in their ease of use and ease of learning but relying on them solely produces mediocre software engineers who get stuck more quickly and more frequently and more importantly produce unperformant and unsecure programs.  

## How To Get The Ability To Cope With The Abstractions?

In my opinion abstractions are still good but developers need to know the underlying infrastructure and the problems that where the reasons for introducing those abstractions. And one of the ways to get the proper knowledge is to build stuff from scratch and to try the old and not conventional anymore ways to deploy your programs.

This will make us able to understand how these tools work and even how to improve upon them and bring new solutions that improve the process of software engineering.
