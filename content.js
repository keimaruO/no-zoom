function disableZoom() {
  let viewportMeta = document.querySelector('meta[name="viewport"]');
  if (viewportMeta) {
    if (!/user-scalable=no/.test(viewportMeta.content)) {
      viewportMeta.content += ", user-scalable=no";
    }
  } else {
    viewportMeta = document.createElement('meta');
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1, user-scalable=no";
    document.getElementsByTagName('head')[0].appendChild(viewportMeta);
  }
}

// Run the function to disable zooming.
disableZoom();
