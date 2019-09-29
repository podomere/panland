(function ($) {
  if(document.getElementById("aa-input-nav-container") !== null){
    //if ($('#aa-input-container').length) {
      var al_client = algoliasearch('AJV2LM71WS', 'afe14bbaabe07eb4792c82ca6bda3449');
      var al_index = al_client.initIndex('Canary');
      //initialize autocomplete on search input (ID selector must match)
    }
})(jQuery);
