(function ($) {
  if(document.getElementById("aa-input-nav-container") !== null){
    //if ($('#aa-input-container').length) {
      var al_client = algoliasearch('AJV2LM71WS', 'afe14bbaabe07eb4792c82ca6bda3449');
      var al_index = al_client.initIndex('Skill');
      //initialize autocomplete on search input (ID selector must match)

      function al_autocomplete(){
        autocomplete('#aa-search-nav',
        { hint: true }, {
          source: autocomplete.sources.hits(al_index, {hitsPerPage: 7}),
          //value to be displayed in input control after user's suggestion selection
          displayKey: 'name',
          //hash of templates used when rendering dataset
          templates: {
            //'suggestion' templating function used to render a single suggestion
            suggestion: function(suggestion) {
              return '<span>' +
                suggestion._highlightResult.name.value +'</span><span class="label label-success pull-right">Available</span>';
            }
          }
          }).on('autocomplete:selected', function(event, suggestion, dataset) {
          location.href = "/#pracsims";
        });;
      }
      al_autocomplete();
    }
})(jQuery);
