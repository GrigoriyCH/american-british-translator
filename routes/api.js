'use strict';

const Translator = require('../components/translator.js');

module.exports = function(app) {
  const translator = new Translator();
  // Translation API route
  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body;
      // Validate required fields
      if (text === '') return res.json({ error: "No text to translate" });
      if (!locale || text == null) return res.json({ error: "Required field(s) missing" });
      // Determine translation direction
      let translation;
      switch (locale) {
        case 'british-to-american':
          translation = translator.britishToAmerican(text);
          break;
        case 'american-to-british':
          translation = translator.americanToBritish(text);
          break;
        default:
          return res.json({ error: 'Invalid value for locale field' });
      }
      // Check if any translation occurred
      translation = translation === text ? "Everything looks good to me!" : translation;
      // Return original and translated text
      res.json({ text, translation });
  });
};