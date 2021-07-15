(function ($) {
  if(document.getElementById("aa-input-nav-container") !== null){
    //if ($('#aa-input-container').length) {
      var al_client = algoliasearch('AJV2LM71WS', '5e6f9e73a96000a01f3f272b8509c15e');
      var al_index = al_client.initIndex('Agent_production');
      //initialize autocomplete on search input (ID selector must match)
    }
})(jQuery);
