'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('c2c app', function() {

  beforeEach(function() {
    browser().navigateTo('../../index.html');
  });

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe('/home');
  });

  describe('home', function() {

    beforeEach(function() {
      browser().navigateTo('#/home');
    });

    it('should render view1 when user navigates to /home', function() {
      expect(element('[ng-view] p:first').text()).toMatch(/Home stuff/);
    });

  });

  describe('gps', function() {
    
    beforeEach(function() {
      browser().navigateTo('#/gps');
    });

    it('should render view1 when user navigates to /gps', function() {
      expect(element('[ng-view] p:first').text()).toMatch(/GPS stuff/);
    });
  
  });

  describe('images', function() {
    
    beforeEach(function() {
      browser().navigateTo('#/images');
    });

    it('should render view1 when user navigates to /images', function() {
      expect(element('[ng-view] p:first').text()).toMatch(/Images stuff/);
    });
  
  });

  describe('sync', function() {
    
    beforeEach(function() {
      browser().navigateTo('#/sync');
    });

    it('should render view1 when user navigates to /sync', function() {
      expect(element('[ng-view] p:first').text()).toMatch(/Sync stuff/);
    });
  
  });

  describe('home', function() {
    
    beforeEach(function() {
      browser().navigateTo('#/home');
    });

    it('should render view1 when user navigates to /view1', function() {
      expect(element('[ng-view] p:first').text()).toMatch(/Home/);
    });
  
  });
});
