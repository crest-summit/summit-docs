$('body').scrollspy({
    target: '.bs-sidebar',
});

/* Toggle the `clicky` class on the body when clicking links to let us
   retrigger CSS animations. See ../css/base.css for more details. */
$('a').click(function(e) {
    $('body').toggleClass('clicky');
});

/* Prevent disabled links from causing a page reload */
$("li.disabled a").click(function() {
    event.preventDefault();
});

$("a[href^='#']").click(function(e) {
  e.preventDefault();
  var l = this;
  $.smoothScroll({
    offset:-60,
    scrollTarget: l.hash
  });
});
