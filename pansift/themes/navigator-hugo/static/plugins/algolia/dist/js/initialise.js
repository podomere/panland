(function ($) {
  if(document.getElementById("aa-input-nav-container") !== null){
    //if ($('#aa-input-container').length) {
      var al_client = algoliasearch('AJV2LM71WS', 'e8e0b30c4c2c7736513e195d1a91d0f9');
      var al_index = al_client.initIndex('Agent_production');
      //initialize autocomplete on search input (ID selector must match)
    }
})(jQuery);
