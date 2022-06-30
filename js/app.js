---
---

particlesJS.load(
  'particles-js',
  '{{ site.url }}{{ site.baseurl }}/js/particles.json',
  function () {
    console.log('particles.js loaded - callback');
  }
);


$('.carousel[data-type="multi"] .item').each(function() {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	for (var i = 0; i < 3; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}

		next.children(':first-child').clone().appendTo($(this));
	}
});

function openTarget() {
  var hash = location.hash.substring(1);
  if(hash) var details = $(`#${hash} details`)[0]
  if(details) details.open = true;
}
window.addEventListener('hashchange', openTarget);
openTarget();