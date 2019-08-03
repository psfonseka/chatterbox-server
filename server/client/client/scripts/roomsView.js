// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  _currentRoom: 'lobby',

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //let roomList = {};
    let msgs = Messages.retrieve();
    Rooms.addTo(msgs);
    RoomsView.render();
    RoomsView.$button.on('click', RoomsView.handleClick);
    //RoomsView.$select.on('click', RoomsView.handleChange);
    $(document).on('change', 'select', RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    this.$select.html('');
    let html = '';
    let roomList = Rooms.retrive();
    for (let i in roomList) {
      let $room = $('<option></option>;');
      $room.text(i);
      $room.appendTo(this.$select);
    }
    //this.$select.append(html);
  },

  renderRoom: function(room) {
    Rooms.add(room);
    RoomsView.render();
  },

  changeRoom: function(value) {
    this._currentRoom = value;
    App.fetch();
  },

  getRoom: function(value) {
    return this._currentRoom;
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room .
    //var rooms = document.getElementById("rooms");
    //var rooms = document.getElementsByTagName('select');
    //var result = rooms.options[rooms.selectedIndex].text;
    var room = $(this).find('option:selected')[0].text;
    RoomsView.changeRoom(room);
    //console.log(result);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    let msg = $('input:text').val();
    //console.log(msg);
    RoomsView.renderRoom(msg);
  }

};
