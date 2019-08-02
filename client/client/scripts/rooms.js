// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},

  addTo: function(msgs) {
    for (var i = 0; i < msgs.length; i++) {
      if (!this._data[msgs[i].roomname]) {
        this._data[msgs[i].roomname] = true;
      }
    }
  },

  add: function(name) {
    this._data[name] = true;
  },

  retrive: function() {
    return this._data;
  }

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};