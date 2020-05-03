$$(document).on('page:init', '.page[data-name="dashboard"]', function () {
	$$("#welcome-title").html("Welcome " + user.firstName + " " + user.lastName);

	$$("#ewallet-btn").on('click', function() {
		app.views.main.router.navigate('/issue/', {reloadCurrent: true, transition: 'f7-push'});
		return;
	});
	
	$$("#trx-btn").on('click', function() {
		app.views.main.router.navigate('/resolved/', {reloadCurrent: true, transition: 'f7-push'});
		return;
	});

	$$("#outlet-btn").on('click', function() {
		app.views.main.router.navigate('/user/', {reloadCurrent: true, transition: 'f7-push'});
		return;
	});

	$$("#logout-btn").on('click', function() {
		app.loginScreen.destroy(app.views.main.router.navigate('/', {reloadCurrent: true, transition: 'f7-push'}));
		return;
	});
		
	$$("#approved-btn").on('click', function() {
		app.views.main.router.navigate('/approved/', {reloadCurrent: true, transition: 'f7-push'});
		return;
	});

	$$("#poin-btn").on('click', function() {
		app.views.main.router.navigate('/poin/', {reloadCurrent: true, transition: 'f7-push'});
		return;
	});

	$$("#search-issue-btn").on('click', function() {
		app.views.main.router.navigate('/search-issue/', {reloadCurrent: true, transition: 'f7-push'});
		return;
	});

	$$("#history-btn").on('click', function() {
		app.views.main.router.navigate('/report/', {reloadCurrent: true, transition: 'f7-push'});
		return;
	});

	$$("#logout-btn").on('click', function() {
		app.loginScreen.destroy(app.views.main.router.navigate('/', {reloadCurrent: true, transition: 'f7-push'}));
		return;
	});

	$$("#setting-btn").on('click', function() {
		app.dialog.alert('Ooops... The page is under construction', 'Alert!');
		return;
	
	});

	$$("#notification-btn").on('click', function() {
		app.dialog.alert('Ooops... The page is under construction', 'Alert!');
		return;
	
	});

	// // Login
	// $$('.open-login').on('click', function () {
	//   app.dialog.login('Enter your username and password', function (username, password) {
	//     app.dialog.alert('Thank you!<br>Username:' + username + '<br>Password:' + password);
	//   });
	// });

});
