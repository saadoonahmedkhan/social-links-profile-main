const height = $(document).height();
const width = $(document).width();
if (width === 320 ||width<=500) {
  $("main").css({
    'height': `${height -(height * 0.3)}px`,
    'width': `${width -(width * 0.3)+width * 0.05}px`
  });
}
if (width >=500 ) {
    $("main").css({
      'height': 'auto',
      'width': 'auto'
    });
  }