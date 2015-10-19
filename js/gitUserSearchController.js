githubUserSearch.controller('GitUserSearchController', ['$resource',function($resource) {

  var access_token; 
  var searchResource = $resource('https://api.github.com/search/users?access_token=' + access_token);
  var self = this;

  self.doSearch = function (){

    self.searchResult = searchResource.get(
        { q: self.searchTerm }
    );

  };

}]);
