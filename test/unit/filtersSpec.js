'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {
  beforeEach(module('c2capp.filters'));

  describe('substr', function() {
    it('should follow js substr() function', inject(function(substrFilter) {
      expect(substrFilter('abcdef', 2)).toEqual('cdef');
      expect(substrFilter('abcdef', 2, 2)).toEqual('cd');
      expect(substrFilter('abcdef', 'plop', 2)).toEqual('abcdef');
      expect(substrFilter('abcdef', 2, 'plop')).toEqual('cdef');
    }));
  });
});
