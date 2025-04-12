# My Personal Website

This repo contains the source code for [my personal website](https://hazemkrimi.tech/) madee using Hugo.

## Requirements To Run Locally

1. Install [Hugo](https://gohugo.io/installation/).

2. Clone the repo:

```
git clone https://github.com/hazemKrimi/personal-website
cd personal-website
```

3. To run the webserver that reloads on saved changes run the following command:

```
hugo server
```

## Deployment

I am using `nginx` with `certbot` as a seemless webserver with an SSL certificate to get HTTPS. Here is how I setup the deployment assuming you already have `nginx` and `certbot` installed:

1. Create a file to to be the webserver config under `/etc/nginx/sites-available` with its content being what is in `deploy/nginx.conf` of the repo. (You will need to use your own domain)

2. Symlink the config into `/etc/nginx/sites-enabled`:

```
sudo ln -s /etc/nginx/sites-available/<webserver-config> /etc/nginx/sites-enabled/<webserver-config>
```

3. Restart `nginx` and its service if you're using `systemd`:

```
sudo nginx -t
sudo systemctl restart nginx
```

4. Run `certbot` to get an SSL certificate for your domain:

```
sudo certbot --nginx
```

5. If you forked this repo you can use the actions workflow that I am using but you will need to add an SSH private key as an action secret. You will find this setting under repo settings > security > secrets and variables > actions. You will add your key as `DEPLOY_SSH_KEY` in repository secrets.

6. If you are not using GitHub Actions or not deploying on a VPS you probably know what you are doing but you can still refer to the [Hugo Deployment Guides](https://gohugo.io/host-and-deploy/).
