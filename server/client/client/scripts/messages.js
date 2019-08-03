// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {
  
  _data: [],

  addTo: function(values) {  
    this._data = values;
    for (let i = 0; i < this._data.length; i++) {
      this._data[i].text = this._data[i].text || '';
      this._data[i].username = this._data[i].username || '';
      this._data[i].roomname = this._data[i].roomname || '';
    }
  },

  retrieve: function() {
    return this._data; //Returns array
  }

  // TODO: Define how you want to store your messages.
  //_data: Parse.readAll((data) => {return data; })
  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

};