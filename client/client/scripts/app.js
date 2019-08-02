// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.initialFetch();
    //console.log(Messages.retrieve());
    //console.log(Messages._data);
    App.stopSpinner();
    setInterval(function() { App.fetch(); }, 10000);
    //this.msg = null;
    //console.log(this.msg.retrieve());
    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  initialFetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      //console.log(data.results);
      Messages.addTo(data.results);
      //console.log(Messages._data);

      MessagesView.render();
      RoomsView.initialize();

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.

      callback(data);

      //return temp;
    });

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      //console.log(data.results);
      Messages.addTo(data.results);
      //console.log(Messages._data);

      MessagesView.render();

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.

      callback(data);

      //return temp;
    });

  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
