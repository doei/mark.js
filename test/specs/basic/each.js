'use strict';
describe('basic mark with each callback', function() {
  var $ctx, eachCalled;
  beforeEach(function(done) {
    loadFixtures('basic/main.html');

    eachCalled = [];
    $ctx = $('.basic');
    new Mark($ctx[0]).mark('lorem ipsum', {
      'diacritics': false,
      'separateWordSearch': false,
      'each': function(el, originalData) {
        eachCalled.push(originalData);
      },
      'done': function() {
        done();
      }
    });
  });

  it('should call the each callback for each marked element', function() {
    expect(eachCalled.length).toBe(4);
    expect(eachCalled.every(od => od === 'lorem ipsum')).toBe(true);
  });
});
