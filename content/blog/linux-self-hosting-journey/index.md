---
title: "The Switch To Linux And The Beginning Of My Self-Hosting Journey"
description: "How I got into Linux and how that eventually led me to get into self-hosting."
keywords: ["Self Hosting", "Linux", "Homelab", "VM", "GPU Passthrough"]
date: 2026-01-24
---

I made the full switch into Linux in 2023 since I started following YouTubers like [Luke Smith](https://www.youtube.com/@LukeSmithxyz) and [Mental Outlaw](https://www.youtube.com/MentalOutlaw) to name a few and then got into the rabbit hole of self-hosting on a budget therefore it is safe for me to say that I am somewhat experienced in this practice so I will walk you in this post on my setups over those 3 years, what I learned and what are my plans for the future.

## Linux As My Main OS

Back then I only had a desktop that I bought the year before and was using Windows 10 on it for gaming and work since at that time I was working with Microsoft software. Here are its specs (the only thing that remained till now is the GPU and case as I replaced everything else):

- Intel Core i5 10400.
- 16 GB DDR4 RAM.
- NVIDIA GeForce RTX 3050 8GB VRAM.
- 1 TB SSD.

Here is a picture of my desktop where I first bought it (apologies about the image quality):

![Picture of my desktop in 2023](./2023-desktop.jpg)

For me the main reason for making the switch to Linux is that I wanted to learn it hands on and dedicate my computer for software development, I started out with Debian 11 as my first distro.
I wasn't doing too much gaming but I came up with a solution for some of the games I was playing with friends that had Anti-Cheat and that was a VM with GPU passthrough thanks to QEMU/KVM which was built in and allowed me to have a config in such a way that Windows and the Anti-Cheat software can't figure that they are running in a VM.

Here are guides I used back in 2024 when I updated my VM to use Windows 11 through Qemu/KVM and GPU Passthrough:

- [Installing KVM And QEMU](https://sysguides.com/install-kvm-on-linux)
- [Installing Windows 11 On VMs](https://sysguides.com/install-a-windows-11-virtual-machine-on-kvm)

Other reasons that are still as important are ownership and privacy: I get to use my OS without having to have an account tied to the developers and customize it to my heart's content all with minimal resource consumption. There are still issues with driver and software compatibility but it is getting better in the recent years thanks to projects like [Wine](https://www.winehq.org/) and [Proton](https://github.com/ValveSoftware/Proton).

## Self-Hosting

Previously, I had my website deployed on Vercel since back then I made it using Next.js but as I got deeper into the optimization meme I recreated my website in [Hugo](https://gohugo.io/) which worked out pretty well and I am now more satisfied with its performance. Naturally, since I migrated away from Next.js I decided to get my own VPS and deploy the website there. I would say I got an overpowered one for my uses but I gained the capability to have more stuff in there like some of my personal projects and my own email through open source tools (check Luke Smith's [emailwiz](https://github.com/LukeSmithxyz/emailwiz) repo). Here is the VPS specs which I got from Hostinger through a YouTuber's affiliate link:

- AMD EPYC 9354P 8 Cores.
- 32 GB DDR4 RAM.
- 400 GB NVMe.
- 32 TB Bandwidth.

Having to manage a server comes with learning more tools related to System Administration like Nginx, Certbot, GitHub Actions, Systemd services, setting up SSH and firewall rules, blocking unwanted traffic through [Crowdsec](https://github.com/crowdsecurity/crowdsec). This made me get a better hands on understanding on how different components work in Linux since nothing is abstracted away like it was with Vercel and had to configure almost everything by hand. Here are some guides that helped me setup my website on my VPS:

- [VPS Setup And Website Deployment](https://www.youtube.com/watch?v=DmbBgXK8M5M)
- [Based Website Analytics Written In C](https://curiouscoding.nl/posts/goaccess-setup/)

And here is a sneak peek at my latest analytics stats:

![GIF of my website analytics](./analytics.gif)
