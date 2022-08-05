# Workstaff Help Center

## Description

Documentation and blog website for the [workstaff.app](https://workstaff.app/) application, built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

To run the English (default) version, use
```zsh
npm run start
```

To run the French version, use
```zsh
npm run start -- --locale fr
```

## Usage

To add blog posts, add a blog post folder to the /blog directory with an index.mdx alongside the images to be used for that particular blog post.

For example:
"blog/year-month-day-blog_post_title"
then create an index.mdx file and copy the necessary image files inside.

For adding blog posts in French, do as mentioned above, but add the blog post folder in the "i18n/fr/docusaurus-plugin-content-blog/" directory. If there is no French language equivalent for a blog post, the original English version will be available. Use the same folder name to reference that it's a translation of a particular post.

For example:
"i18n/fr/docusaurus-plugin-content-blog/year-month-day-blog_post_title"

For a reference guide on markdown formatting, [click here](https://commonmark.org/help/).

For additional information on adding posts, [click here](https://docusaurus.io/docs/blog#adding-posts) for information on the front matter metadata fields, [click here](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter).

### Details to know

#### Image

For social media sharing, the image should be above 200 x 200, below 8MB and as close to the 1.91:1 aspect ratio as possible.

#### Text

To limit the amount of text appearing in the blog post preview, use 
```html
<!--truncate-->
```