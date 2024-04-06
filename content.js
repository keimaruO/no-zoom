document.addEventListener('DOMContentLoaded', function() {
    var metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'user-scalable=no');
    } else {
      metaViewport = document.createElement('meta');
      metaViewport.setAttribute('name', 'viewport');
      metaViewport.setAttribute('content', 'user-scalable=no');
      document.head.appendChild(metaViewport);
    }
  });
