const chai = require('chai');
const assert = chai.assert;
const Translator = require('../components/translator.js');
let translator = new Translator();

suite('Unit Tests', () => {
  suite('American English To British English', () => {
    const test1 = 'Mangoes are my favorite fruit.';
    const test2 = 'I ate yogurt for breakfast.';
    const test3 = "We had a party at my friend's condo.";
    const test4 = 'Can you toss this in the trashcan for me?';
    const test5 = 'The parking lot was full.';
    const test6 = 'Like a high tech Rube Goldberg machine.';
    const test7 = 'To play hooky means to skip class or work.';
    const test8 = 'No Mr. Bond, I expect you to die.';
    const test9 = 'Dr. Grosh will see you now.';
    const test10 = 'Lunch is at 12:15 today.';

    test(`Translate "${test1}" to British English`, () => {
      assert.equal(translator.americanToBritish(test1), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
    });

    test(`Translate "${test2}" to British English`, () => {
      assert.equal(translator.americanToBritish(test2), 'I ate <span class="highlight">yoghurt</span> for breakfast.');
    });

    test(`Translate "${test3}" to British English`, () => {
      assert.equal(translator.americanToBritish(test3), 'We had a party at my friend\'s <span class="highlight">flat</span>.');
    });

    test(`Translate "${test4}" to British English`, () => {
      assert.equal(translator.americanToBritish(test4), 'Can you toss this in the <span class="highlight">bin</span> for me?');
    });

    test(`Translate "${test5}" to British English`, () => {
      assert.equal(translator.americanToBritish(test5), 'The <span class="highlight">car park</span> was full.');
    });

    test(`Translate "${test6}" to British English`, () => {
      assert.equal(translator.americanToBritish(test6), 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
    });

    test(`Translate "${test7}" to British English`, () => {
      assert.equal(translator.americanToBritish(test7), 'To <span class="highlight">bunk off</span> means to skip class or work.');
    });

    test(`Translate "${test8}" to British English`, () => {
      assert.equal(translator.americanToBritish(test8), 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
    });

    test(`Translate "${test9}" to British English`, () => {
      assert.equal(translator.americanToBritish(test9), '<span class="highlight">Dr</span> Grosh will see you now.');
    });

    test(`Translate "${test10}" to British English`, () => {
      assert.equal(translator.americanToBritish(test10), 'Lunch is at <span class="highlight">12.15</span> today.');
    });
  });

  suite('British English To American English', () => {
    const test11 = 'We watched the footie match for a while.';
    const test12 = 'Paracetamol takes up to an hour to work.';
    const test13 = 'First, caramelise the onions.';
    const test14 = 'I spent the bank holiday at the funfair.';
    const test15 = 'I had a bicky then went to the chippy.';
    const test16 = "I've just got bits and bobs in my bum bag.";
    const test17 = 'The car boot sale at Boxted Airfield was called off.';
    const test18 = 'Have you met Mrs Kalyani?';
    const test19 = "Prof Joyner of King's College, London.";
    const test20 = 'Tea time is usually around 4 or 4.30.';

    test(`Translate "${test11}" to American English`, () => {
      assert.equal(translator.britishToAmerican(test11), 'We watched the <span class="highlight">soccer</span> match for a while.');
    });

    test(`Translate "${test12}" to American English`, () => {
      assert.equal(translator.britishToAmerican(test12), '<span class="highlight">Tylenol</span> takes up to an hour to work.');
    });

    test(`Translate "${test13}" to American English`, () => {
      assert.equal(translator.britishToAmerican(test13), 'First, <span class="highlight">caramelize</span> the onions.');
    });

    test(`Translate "${test14}" to American English`, () => {
      assert.equal(translator.britishToAmerican(test14), 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
    });

    test(`Translate "${test15}" to American English`, () => {
      assert.equal(translator.britishToAmerican(test15), 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
    });

    test(`Translate "${test16}" to American English`, () => {
      assert.equal(translator.britishToAmerican(test16), 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.');
    });

    test(`Translate "${test17}" to American English`, () => {
      assert.equal(translator.britishToAmerican(test17), 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
    });

    test(`Translate "${test18}" to American English`, () => {
      assert.equal(translator.britishToAmerican(test18), 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
    });

    test(`Translate "${test19}" to American English`, () => {
      assert.equal(translator.britishToAmerican(test19), '<span class="highlight">Prof.</span> Joyner of King\'s College, London.');
    });

    test(`Translate "${test20}" to American English`, () => {
      assert.equal(translator.britishToAmerican(test20), 'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
    });
  });

  suite('Highlight Translation', () => {
    const test21 = 'Mangoes are my favorite fruit.';
    const test22 = 'I ate yogurt for breakfast.';
    const test23 = 'We watched the footie match for a while.';
    const test24 = 'Paracetamol takes up to an hour to work.';

    test(`Highlight translation in "${test21}"`, () => {
      assert.equal(translator.americanToBritish(test21), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
    });

    test(`Highlight translation in "${test22}"`, () => {
      assert.equal(translator.americanToBritish(test22), 'I ate <span class="highlight">yoghurt</span> for breakfast.');
    });

    test(`Highlight translation in "${test23}"`, () => {
      assert.equal(translator.britishToAmerican(test23), 'We watched the <span class="highlight">soccer</span> match for a while.');
    });

    test(`Highlight translation in "${test24}"`, () => {
      assert.equal(translator.britishToAmerican(test24), '<span class="highlight">Tylenol</span> takes up to an hour to work.');
    });
  });
});
