'use strict';

const _         = require('lodash'),
      data      = require('./static/data.json')

let facts = () => {

  /**
   * Check that the data exists.
   */
  if (!_.isObject(data) && !_.isNil(data)) {
    console.log(chalk.bgRed(`Couldn't load data.`));
    return;
  }

  let uniqueArray = _.uniq(data.facts),
      randomItem  = _.sample(uniqueArray),
      wordLimit   = 7,
      sentences   = _.chunk(_.words(randomItem, /[^, ]+/g), wordLimit),
      text        = '';

  /**
   * Break up the string into sentences.
   */
  _.forEach(sentences, (sentence, index) => {
    text += `${_.join(sentence, ' ')}${sentences.length - 1 == index ? '' : '\n'}`;
  });
  return text;
};

// Default Export
module.exports = facts;
