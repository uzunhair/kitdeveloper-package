const { EOL } = require('os');

module.exports = function baseContent(entity, naming) {

  const fileName = naming.stringify(entity);
  const pageName = fileName[0].toUpperCase() + fileName.substring(1);

  return [
    'extends ../../layout/page',
    '',
    'block variables',
    `    - var variable = ${fileName}`,
    '',
    'block head',
    '',
    'block content',
    `    h3 ${pageName}`
  ].join(EOL);
};