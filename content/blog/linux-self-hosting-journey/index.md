---
title: "The Switch To Linux And The Beginning Of My Self-Hosting Journey"
description: "How I got into Linux and how that eventually led me to get into self-hosting."
keywords: ["Self Hosting", "Linux", "Homelab", "VM", "GPU Passthrough"]
date: 2026-01-24
draft: true
---

I made the full switch into Linux in 2023 thanks to following YouTubers like [Luke Smith](https://www.youtube.com/@LukeSmithxyz) and [Mental Outlaw](https://www.youtube.com/MentalOutlaw) to name a few and then got into the rabbit hole of self-hosting on a budget therefore it is safe for me to say that I am somewhat experienced in this practice so I will walk you in this post on my setups over those 3 years, what I learned and what are my plans for the future.

## Linux As My Main OS

Back then I only had a desktop that I bought the year before and was using Windows 10 on it and using it for gaming and work since at that time I was working with Microsoft software. Here are its specs (the only thing that remained till now is the GPU and case as I replaced everything else going forward):

- i5 10400.
- 16 GB DDR4 RAM.
- NVIDIA GeForce RTX 3050 8GB VRAM.
- 1 TB SSD.

Here is a picture of my desktop where I first bought it (apologies about the image quality):

![Picture of my desktop in 2023](./2023-desktop.jpg)

For me the main reason for making the switch to Linux is that I wanted to learn it hands on and dedicate my computer for software development, I started out with Debian 11 as my first distro.
I wasn't doing too much gaming but I came up with a solution for some of the games I was playing with friends that had Anti-Cheat and that was a VM with GPU passthrough thanks to QEMU/KVM which was built in and allowed me to have a config in such a way that Windows and the Anti-Cheat software can't figure that they are running in a VM.
