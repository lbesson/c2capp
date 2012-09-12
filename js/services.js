'use strict';

angular.module('c2capp.services', []).
  // TODO test and co
  factory('camera', function() {
    var images = [];

    function onCaptureFail(message) {
      alert('Image capture failed: ' + message);
    }

    function onCaptureSuccess(imageURI) {
      console.log(imageURI);
      //var width, height;

      // add to the images list
      // images.push({
      //   title: '',
      //   src: imageURI,
      //   type: 0,
      //   categories: []
      // });
    }

    return {
      capture: function() {
        if (!!navigator.camera && !!navigator.camera.DestinationType) { // phonegap-ripple
          console.log(navigator.camera.DestinationType.FILE_URI);
          navigator.camera.getPicture(onCaptureSuccess, onCaptureFail, {
            quality: 80,
            sourceType: navigator.camera.DestinationType.FILE_URI,
            destinationType: navigator.camera.PictureSourceType.CAMERA
          });
        } else {
          onCaptureSuccess('img/mouchillon.jpg');
        }
      },
      images: images
    }
  }).
  // TODO to be tested 
  // look for $q (see asynchronous things) http://jsfiddle.net/4BVVQ/2/ ??
  // TODO check if implem with this.truc works better and also see
  // http://plunker.no.de/edit/j7cHwO
  factory('geolocation', function($rootScope) {
    var status = 'off',
        watchId = null,
        positions = [];

    function setStatus(s) {
      status = s;
    }

    return {
      start: function() {
        // don't start if already started
        if (status === 'on') return;

        // TODO stop watching if watchId not null?
        watchId = navigator.geolocation.watchPosition(
          function(position) {
            $rootScope.$apply(function() { // rootScope necessary?
              positions.push(position);
            });
          },
          // TODO
          function(error) {
            switch (error.code) {
              case error.POSITION_UNAVAILABLE:
              case error.TIMEOUT:
              case 'TIMEOUT': // ripple
                setStatus('ko')
                break;
              case error.PERMISSION_DENIED:
              default:
                if (watchId !== null) {
                  navigator.geolocation.clearWatch(watchId);
                  watchId = null;
                }
                setStatus('no');
                break;
            }
            $rootScope.$apply();
          },
          {
            maximumAge: 10000,
            enableHighAccuracy: true
          });
        status = 'on';
      },
      stop: function() {
        // TODO
        if (watchId !== null) {
          navigator.geolocation.clearWatch(watchId);
          watchId = null;
        }
        status = 'off';
      },
      // TODO we cannot return directly the var
      // the view won't be updated (there is probably
      // a cleaner way for doing that)
      status: function() {
        return status;
      },
      status2: status,
      positions: positions
    }
  });