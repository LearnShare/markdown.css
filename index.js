const fs = require('fs');

const MarkdownIt = require('markdown-it');
const HighLightJS = require('highlight.js');

// template of index.html
const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>markdown.css</title>
  <link rel="stylesheet" href="./node_modules/highlight.js/styles/default.css">
  <link rel="stylesheet" href="./base.css">
  <link rel="stylesheet" href="./markdown.css">
</head>
<body>
<article>
$content$
</article>
</body>
</html>
`;

const MD = new MarkdownIt({
  html: true,
  highlight: (content, lang) => {
    if (lang
        && HighLightJS.getLanguage(lang)) {
      try {
        return HighLightJS.highlight(lang, content).value;
      } catch (error) {
        console.log(error);
      }
    }

    return '';
  },
});
MD.use(require('markdown-it-sub'));
MD.use(require('markdown-it-sup'));
MD.use(require('markdown-it-deflist'));
MD.use(require('markdown-it-task-lists'));

const build = (mdDir, htmlDir) => {
  try {
    const content = fs.readFileSync(mdDir, {
      encoding: 'utf8',
    });
    const mdContent = MD.render(content);
    const htmlContent = template.replace('$content$', mdContent);

    fs.writeFileSync(htmlDir, htmlContent, {
      encoding: 'utf8',
    });
  } catch (error) {
    console.log(error);
  }
};

build('./markdown.md', './index.html');
