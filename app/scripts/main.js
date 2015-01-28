
// Change template engine settings to use {{ }} syntax.
_.templateSettings = { interpolate: /\{\{(.+?)\}\}/g };

// Fill in topbar details.
$('header .right').append(_.template($('#userTopbarTemplate').html())(user));

// Fill in sidebar details.
user.created_at = moment(user.created_at).format('MMM DD, YYYY')
var userStars = {user: user, stars: stars};
$('aside').prepend(_.template($('#userSidebarTemplate').html())(userStars));

// Populate the organizations list on the sidebar.
var orgList = $('aside #organizations');
orgs.forEach(function (org) {
  orgList.append(_.template($('#orgTemplate').html())(org));
});

// Populate the repos list in the main page.
var repoList = $('section.main .repo-list');
repos = _.sortBy( repos, 'updated_at' ).reverse();
repos.forEach(function (repo) {
  repo.updated_at = moment(repo.updated_at).fromNow()
  if (repo.fork) {
    repoList.append(_.template($('#repoForkedTemplate').html())(repo));
  } else {
    repoList.append(_.template($('#repoTemplate').html())(repo));
  }
});

