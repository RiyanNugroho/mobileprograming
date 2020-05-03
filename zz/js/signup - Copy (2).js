$$(document).on('page:init', '.page[data-name="signup"]', function () {
//var $$ = Dom7;

	$$('#reg-btn').on('click', function(){
	  var form = app.form.convertToData('#reg-form');
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
	
});
