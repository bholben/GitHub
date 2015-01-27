
// Change template engine settings to use {{ }} syntax.
_.templateSettings = { interpolate: /\{\{(.+?)\}\}/g };


// // Pull in the avatar image.
// $('#avatar').attr('src', user.avatar_url);

// Fill in topbar details.
$('header .right').append(_.template($('#userTopbarTemplate').html())(user));

// Fill in sidebar details.
$('aside').prepend(_.template($('#userSidebarTemplate').html())({user: user, stars: stars}));

// Populate the organizations list on the sidebar.
var orgList = $('aside #organizations');
orgs.forEach(function (org) {
  orgList.append(_.template($('#orgTemplate').html())(org));
});

// Populate the repos list in the main page.
var repoList = $('section.main .repo-list');
repos.forEach(function (repo) {
  repoList.append(_.template($('#repoTemplate').html())(repo));
});

