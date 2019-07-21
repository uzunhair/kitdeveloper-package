const { EOL } = require('os');

module.exports = function baseContent(entity, naming) {
  return [
    `.${naming.stringify(entity)} {`,
    '    ',
    '}',
    '',
  ].join(EOL);
};
