
// Fill in topbar details.
$('header .right').append(Handlebars.templates.userTopbar(user));

// Fill in sidebar details.
user.created_at = moment(user.created_at).format('MMM DD, YYYY');
var userStars = {user: user, stars: stars};
$('aside').prepend(Handlebars.templates.userSidebar(userStars));

// Populate the organizations list on the sidebar.
var orgList = $('aside #organizations');
orgs.forEach(function (org) {
  orgList.append(Handlebars.templates.org(org));
});

// Populate the repos list in the main page.
var repoList = $('section.main .repo-list');
repos = _.sortBy( repos, 'updated_at' ).reverse();
repos.forEach(function (repo) {
  repo.updated_at = moment(repo.updated_at).fromNow();
  repoList.append(Handlebars.templates.repo(repo));
});

