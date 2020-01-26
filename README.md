This is a community led site to showcase awesome cheasheets created from egghead courses.

<div align="center">
  <img
    height="300"
    width="300"
    alt="Awesome Cheatsheets Logo"
    src="https://raw.githubusercontent.com/laurosilvacom/awesomecheatsheets/master/static/icon.png"
    align="center"
  />
</div>

## How to contribute

We are actively looking for contributors and maintainers, so you are more than welcome. Some core principles that we will follow so that this repo doesn't get too wild.

- This repo hosts cheatsheets for egghead course only.
- One cheatsheet per course.
- One document for each lesson in the course.
  - Each lesson includes notes that follow the same structure of the lesson/transcript, additional rewrites, links to resources, and your personal take on the lesson.
- If a course has already been covered, feel free to submit additions. But please don't remove anything (unless we messed up or misunderstood something, or you consider important adding additional resources).

That's all I've got! Again, really happy you are thinking about helping out, who knows, the person who you might be helping is yourself in future!

## Quickstart

Get started by running the following commands:

```
$ git clone git@github.com:laurosilvacom/awesomecheatsheets.git
$ npm install
$ npm start
```

Visit `http://localhost:8000/` to view the app.

At the root of the folder `content`, add the index file for your cheatsheet. Next, create a folder with the same name. Inside your folder you’ll add a `.md` document for each lesson.

Link to the repository from `/content/index.md`.

Final step is to add force collapse. Go into `config.js` and add the name of your folder inside `collapsedNav`.

```json
"collapsedNav": [
			  "/GraphQL-Query-Language",
			  "/Composable-Gatsby-Themes"
    	],
```

## Questions

- If you see anything wrong or missing, please file an [issue](https://github.com/laurosilvacom/awesomecheatsheets/issues/new).
