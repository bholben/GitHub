(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['org'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n<li><a href=\"https://github.com/"
    + escapeExpression(((helper = (helper = helpers.login || (depth0 != null ? depth0.login : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"login","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + escapeExpression(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\" alt=\"group\"></a></li>\n\n";
},"useData":true});
templates['repo'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "\n<li>\n  <div class=\"repo-info\">\n    <h3><a href=\""
    + escapeExpression(((helper = (helper = helpers.html_url || (depth0 != null ? depth0.html_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"html_url","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a></h3>\n    <p>"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n    <small>Updated "
    + escapeExpression(((helper = (helper = helpers.updated_at || (depth0 != null ? depth0.updated_at : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"updated_at","hash":{},"data":data}) : helper)))
    + "</small>\n  </div>\n  <div class=\"repo-stats\"><span>"
    + escapeExpression(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"language","hash":{},"data":data}) : helper)))
    + "</span>\n    <a href=\"https://github.com/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.owner : depth0)) != null ? stack1.login : stack1), depth0))
    + "/GitHub/stargazers\"><i class=\"octicon octicon-star\"></i><span>"
    + escapeExpression(((helper = (helper = helpers.stargazers_count || (depth0 != null ? depth0.stargazers_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"stargazers_count","hash":{},"data":data}) : helper)))
    + "</span></a>\n    <a href=\"https://github.com/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.owner : depth0)) != null ? stack1.login : stack1), depth0))
    + "/GitHub/network\"><i class=\"octicon octicon-git-branch\"></i><span>"
    + escapeExpression(((helper = (helper = helpers.forks_count || (depth0 != null ? depth0.forks_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"forks_count","hash":{},"data":data}) : helper)))
    + "</span></a>\n  </div>\n</li>\n\n";
},"useData":true});
templates['repoForked'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "\n<li>\n  <div class=\"repo-info\">\n    <h3><a href=\""
    + escapeExpression(((helper = (helper = helpers.html_url || (depth0 != null ? depth0.html_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"html_url","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a></h3>\n    <div class=\"forked-from\"><i class=\"octicon octicon-repo-forked\"></i> forked from <a href=\"#\">"
    + escapeExpression(((helper = (helper = helpers.full_name || (depth0 != null ? depth0.full_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"full_name","hash":{},"data":data}) : helper)))
    + "</a></div>\n    <p>"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n    <small>Updated "
    + escapeExpression(((helper = (helper = helpers.updated_at || (depth0 != null ? depth0.updated_at : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"updated_at","hash":{},"data":data}) : helper)))
    + "</small>\n  </div>\n  <div class=\"repo-stats\"><span>"
    + escapeExpression(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"language","hash":{},"data":data}) : helper)))
    + "</span>\n    <a href=\"https://github.com/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.owner : depth0)) != null ? stack1.login : stack1), depth0))
    + "/GitHub/stargazers\"><i class=\"octicon octicon-star\"></i><span>"
    + escapeExpression(((helper = (helper = helpers.stargazers_count || (depth0 != null ? depth0.stargazers_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"stargazers_count","hash":{},"data":data}) : helper)))
    + "</span></a>\n    <a href=\"https://github.com/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.owner : depth0)) != null ? stack1.login : stack1), depth0))
    + "/GitHub/network\"><i class=\"octicon octicon-git-branch\"></i><span>"
    + escapeExpression(((helper = (helper = helpers.forks_count || (depth0 != null ? depth0.forks_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"forks_count","hash":{},"data":data}) : helper)))
    + "</span></a>\n  </div>\n</li>\n\n";
},"useData":true});
templates['userSidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "\n<div class=\"identity\">\n  <a href=\"https://github.com/account\"><img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.avatar_url : stack1), depth0))
    + "\" alt=\"avatar\"></a>\n  <h1>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h1>\n  <div>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.login : stack1), depth0))
    + "</div>\n</div>\n\n<ul class=\"contact-info\">\n  <li><i class=\"octicon octicon-organization\"></i>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.company : stack1), depth0))
    + "</li>\n  <li><i class=\"octicon octicon-location\"></i>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.location : stack1), depth0))
    + "</li>\n  <li><i class=\"octicon octicon-mail\"></i><a href=\"mailto:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.email : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.email : stack1), depth0))
    + "</a></li>\n  <li><i class=\"octicon octicon-clock\"></i>Joined on "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.created_at : stack1), depth0))
    + "</li>\n</ul>\n\n<ul class=\"stats\">\n  <li><a href=\"https://github.com/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.login : stack1), depth0))
    + "/followers\"><div>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.followers : stack1), depth0))
    + "</div><div>Followers</div></a></li>\n  <li><a href=\"https://github.com/stars\"><div>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.stars : depth0)) != null ? stack1.length : stack1), depth0))
    + "</div><div>Starred</div></a></li>\n  <li><a href=\"https://github.com/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.login : stack1), depth0))
    + "/following\"><div>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.following : stack1), depth0))
    + "</div><div>Following</div></a></li>\n</ul>\n\n";
},"useData":true});
templates['userTopbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n<li><a href=\""
    + escapeExpression(((helper = (helper = helpers.html_url || (depth0 != null ? depth0.html_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"html_url","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + escapeExpression(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\" alt=\"avatar\"><span class=\"username\">"
    + escapeExpression(((helper = (helper = helpers.login || (depth0 != null ? depth0.login : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"login","hash":{},"data":data}) : helper)))
    + "</span></a></li>\n<li><a href=\"#\"><i class=\"octicon octicon-plus menu-down\"></i></a></li>\n<li><a href=\"https://github.com/notifications\"><i class=\"octicon octicon-inbox\"></i></a></li>\n<li><a href=\"https://github.com/settings/profile\"><i class=\"octicon octicon-gear\"></i></a></li>\n<li><a href=\"https://github.com\"><i class=\"octicon octicon-sign-out\"></i></a></li>\n\n";
},"useData":true});
})();