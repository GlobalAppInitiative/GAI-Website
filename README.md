GAI-Website
===========

This is the repository for the public GAI website. It will ultiamtely be live at [http://globalappinitiative.org](http://globalappinitiative.org), for now it will be hosted as a subdomain of the .com version (which currently just redirects to the .org): (coming soon)

Tasks & Milestones
===========

- *Relaucnh kickoff:* Meet to discuss goals and motivate starting!
- *Front Page (First week):* After first week of development, get the style down sufficiently enough to build just the home page. The CSS and general skills used up to that point can be used on other pages moving forward.
- *Prototype all pages (second week):* Sans content, just create the pages with the proper footer/header already setup. Build the tree of content, nail down what a generic page looks like
- *Fill out the content:* For each page prototyped, create the actual content for that page. 
- *Continued development:* Up to this point, draft 1 of the new website will be complete. It will be rough, and it won't have fanciful things, but it will be the start of a website that anyone can help improve. Focus after this: getting forms generated, cleaning up UI, getting project pages up, better methods for updating content.


Getting started
===========

In a terminal, run the following to clone the repository:

```
git clone https://github.com/GlobalAppInitiative/GAI-Website.git
```

For SEO and general good practice, we will only be using relative links that are root-relative. That is, all internal website links will begin with "/", e.g. "/img/favicon.png" instead of "img/favicon.png". This means that just opening any html page will not work unless it is via a server. To run a local server to view the site, run the following in a terminal for example:

```
cd GAI-Website # make sure you run it from the root level of the repository
python -m SimpleHTTPServer
```
Now on your brower, go to [http://0.0.0.0:8000](http://0.0.0.0:8000) to view the local website properly.


For the time being, we are using html, CSS, and javascript **only** in order to keep the bar to entry for further developing the website as low as possible, and to encourage more people to learn and get involved.


Git tips

Before starting to work on the repo after awhile
```
git pull
```

When pushing your changes (do it often!)
```
git add -u # add all changed files
git add file.html # explicitly add new files
git status # check changes, see what you're actually committing!

git commit -m "describe changes here"
git push origin master # or just git push
```

Reset to master if things get weird
```
git fetch origin
git reset --hard origin/master
```
