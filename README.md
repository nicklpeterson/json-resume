### Check out my Resume 
- Web: https://resume.nickpeterson.me/
- pdf: https://resume.nickpeterson.me/nick-peterson.pdf

I'm using a [Nunjucks](https://mozilla.github.io/nunjucks/) template to generate html from my json resume config and [Puppeteer](https://pptr.dev/) to convert the html to a pdf. Both are deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

#### Build new HTML and PDF files 

This command builds new html and pdf resumes from the content in the `resume.json` file.

```zsh
pnpm build
```


