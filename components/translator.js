const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

// Translator class for American-British text conversion
class Translator {
    // Convert American to British English
    americanToBritish(text) {
        const words = { ...americanOnly, ...americanToBritishSpelling };
        const titles = americanToBritishTitles;

        return this.translate(text, words, titles, 'americanToBritish');
    }
    // Convert British to American English
    britishToAmerican(text) {
        const words = { ...britishOnly, ...this.objectFlip(americanToBritishSpelling) };
        const titles = this.objectFlip(americanToBritishTitles);

        return this.translate(text, words, titles, 'britishToAmerican');
    }
    // Main translation function
    translate(text, words, titles, direction) {
        const lowerText = text.toLowerCase();
        let result;
        const timeRegex = /\b([01]?[0-9]|2[0-3])([:.])([0-5][0-9])\b/g;
        // Replace titles
        Object.entries(titles).forEach(([key, value]) => {
            if (lowerText.includes(key)) {
                result = text.replace(new RegExp(key, "gi"), `<span class="highlight">${this.capitalize(value)}</span>`) || text;
            }
        });
        result = result || text; // Default to original if no change
        // Convert time format
        const times = lowerText.match(timeRegex);
        if (times) {
            times.forEach(time => {
                const convertedTime = direction === 'americanToBritish'
                    ? time.replace(':', '.')
                    : time.replace('.', ':');
                result = result.replace(time, `<span class="highlight">${convertedTime}</span>`) || text;
            });
        }
        // Replace word differences
        Object.entries(words).forEach(([key, value]) => {
            if (new RegExp(`${key} `, "gi").test(lowerText) ||
                new RegExp(`${key}[^A-Za-z]`, "gi").test(lowerText) ||
                new RegExp(`${key}$`, "gi").test(lowerText)) {

                result = result.replace(new RegExp(key, "gi"), `<span class="highlight">${value}</span>`) || text;
            }
        });
        
        return result || text;
    }
    // Flip keys and values in an object
    objectFlip(obj) {
        return Object.entries(obj).reduce((acc, [key, value]) => {
            acc[value] = key;
            return acc;
        }, {});
    }
    // Capitalize first letter of a word
    capitalize(word) {
        return word[0].toUpperCase() + word.slice(1);
    }
}

module.exports = Translator;