(function () {

  window.c2corg = window.c2corg || {};

  window.c2corg.camera = {

    max_thumb_size: 100,

    createThumbnail: function(file, callback) {
      var img;
      
      // Load image
      img = new Image();

      img.onerror = img.onabort = function() {
        // Image failed to load
        callback({success: false});
      };

      img.onload = function() {
        var canvas, context, data, scale, width, height;
        var mime = 'image/jpeg';

        // Compute thumbnail size
        scale = c2corg.camera.max_thumb_size / Math.max(img.width, img.height);
        width = Math.round(img.width * scale);
        height = Math.round(img.height * scale);

        // Compute thumbnail with canvas
        canvas = document.createElement('canvas');
        canvas.style.display = 'none';
        document.body.appendChild(canvas);
        context = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        context.drawImage(img, 0, 0, width, height);
        try {
          data = canvas.toDataURL(mime, .5);
        } catch(e) {
          try {
            data = canvas.toDataURL(mime);
          } catch(E) {
            data = 'data:image/gif;base64,R0lGODlhGQALAKEAAAAAAP///wAAAAAAACH5BAEKAAIALAAAAAAZAAsAAAIpFI6pe8YPo2ShnhqQvTtlkH3hBUIiuGFjp5FjWZ4KRsY1O+W65OyLUAAAOw==';
          }
        }

        // Remove canvas from DOM to free up memory
        // and execute callback with thumbnail data uri
        canvas.parentNode.removeChild(canvas);
        callback({success: true, datauri: data});
      };

      img.src = file;
    },

    onCaptureFail: function(message) {
      alert('Failed because: ' + message);
    },

    onCaptureSuccess: function(file) {
      this.createThumbnail(file, function(res) {
        if (res.success) {
          // display thumbnail
          $('#images').append('<img src="' + res.datauri + '" />');
        } else {
          this.onCaptureFail('could not resize image');
        }
      });
    },

    capturePhoto: function() {
      // for testing without phonegap
      if (!!navigator.camera) {
        // Take picture using device camera and retrieve image file location
        navigator.camera.getPicture(this.onCaptureSuccess, this.onCaptureFail,
          { quality: 80,
            sourceType: navigator.camera.destinationType.FILE_URI,
            destinationType: navigator.camera.PictureSourceType.CAMERA });
      } else {
        this.onCaptureSuccess('assets/img/mouchillon.jpg');
      }
    }
  };

  // Wait for Cordova to connect with the device
  document.addEventListener("deviceready", onDeviceReady, false);

})();

// Cordova is ready to be used
function onDeviceReady() {
  //$('#cpButton').attr('disabled', false);
  console.log("device ready");

}