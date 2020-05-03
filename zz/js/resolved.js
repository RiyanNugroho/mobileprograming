$$(document).on('page:init', '.page[data-name="resolved"]', function () {
	
	$$('#resolved-btn').on('click', function(){
	  var form = app.form.convertToData('#resolved-form');
	  alert(JSON.stringify(form));
	});
	
	$$("#login-btn").on('click', function() {
		app.views.main.router.navigate('/login/', {reloadCurrent: true, transition: 'f7-push'});
		return;
	});

	$$("#logout-btn").on('click', function() {
		app.views.main.router.navigate('/', {reloadCurrent: true, transition: 'f7-push'});
		return;
	});
	
	$$("#submit-btn").on('click', function() {
		app.dialog.alert('Ooops... The page is under construction', 'CLASS MOBILE - panpan');
		return;
	
	});
	
	$$('#list-resolved').html(view.html);
});
