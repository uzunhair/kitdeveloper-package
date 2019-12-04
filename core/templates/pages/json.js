const { EOL } = require('os');

module.exports = function baseContent(entity, naming) {
  const fileName = naming.stringify(entity);
  const pageName = fileName[0].toUpperCase() + fileName.substring(1);

  return [
    '{',
    `  "pageTitle": "${pageName}",`,
    `  "pageDesc": "${pageName} page desc",`,
    `  "pageLink": "${fileName}.html"`,
    '}',
  ].join(EOL);
};
