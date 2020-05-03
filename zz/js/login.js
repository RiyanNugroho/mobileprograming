$$(document).on('page:init', '.page[data-name="login"]', function () {
//var $$ = Dom7;

	$$("#login-btn").on('click', function() {
		var form = app.form.convertToData('#login-form');
		
		const username = 'admin';
		const password = 'admin123';

		if (form.username == username && form.password == password) {
			app.views.main.router.navigate('/dashboard/', {reloadCurrent: true, transition: 'f7-push'});
			return;
		}else{
			app.dialog.alert('Username & password is wrong');
			return;
		}

		if (form.username == null || form.username.trim() == '') {
			app.dialog.alert('Username is empty', 'Alert!', function() {
			});
			return;
		}
		
		if (form.password == null || form.password.trim() == '') {
			app.dialog.alert('Password is empty', 'Alert!', function() {
			});
			return;
		}
		/*
		alert('data to post: ' + JSON.stringify(form));
		app.request.postJSON('hola', form, function(data) {
			app.dialog.alert('posted data: ' + form, 'CLASS MOBILE - panpan');
			return;
		});
		*/
		// dummy

		// user.username = form.username;
		// user.password = form.password;
		// user.firstName = 'Admin';
		// user.lastName= 'Gokill';
		// user.idNo = '1117090095';
		
		// app.views.main.router.navigate('/dashboard/', {reloadCurrent: true, transition: 'f7-push'});
		
	});
	
	$$("#reg-btn").on('click', function() {
		app.views.main.router.navigate('/signup/', {reloadCurrent: true, transition: 'f7-push'});
		return;
	
	});
	
	$$("#forgot-password").on('click', function() {
		app.views.main.router.navigate('/forgotpass/', {reloadCurrent: true, transition: 'f7-push'});
		return;
	
	});
	
	$$("#logout-btn").on('click', function() {
		app.views.main.router.navigate('/', {reloadCurrent: true, transition: 'f7-push'});
		return;
	});
	
	$$("#language-btn").on('click', function() {
		app.dialog.alert('Ooops... The page is under construction', 'Alert!');
		return;
	
	});
	
	$$("#search-report-btn").on('click', function() {
		app.dialog.alert('Ooops... The page is under construction', 'Alert!');
		return;
	
	});

});
