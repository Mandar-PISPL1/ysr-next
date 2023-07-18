const cheerio = require('cheerio');

export function extractMetaTags(htmlString) {
  const $ = cheerio.load(htmlString);
  const metaTags = $('meta');

  const tags = {};

  metaTags.each((index, element) => {
    const tagName = $(element).attr('name') || $(element).attr('property');
    const tagContent = $(element).attr('content');

    if (tagName && tagContent) {
      if (!tags[tagName]) {
        tags[tagName] = [];
      }
      tags[tagName].push(tagContent);
    }
  });

  return tags;
}

export function extractScriptTags(htmlString) {
  const $ = cheerio.load(htmlString);
  const scriptTags = [];

  $('script').each((index, element) => {
    const scriptContent = $(element).html();
    scriptTags.push(scriptContent);
  });

  return scriptTags;
}
