// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),
  _friends: {}, 

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on('click', MessagesView.handleClick);
  },

  render: function() {
    // TODO: Render _all_ the messages.
    this.$chats.html('');
    let html = '';
    for (let i = 0; i < Messages._data.length; i++) {
      let text = Messages._data[i].text || "";
      let username = Messages._data[i].username || "";
      let roomname = Messages._data[i].roomname || "";
      /*if (text) {
        Messages._data[i].text = JSON.stringify(text);
      } else {
        Messages._data[i].text = '';
      }
      if (username) {
        Messages._data[i].username = JSON.stringify(username);
      } else {
        Messages._data[i].username = '';
      }
      if (roomname) {
        Messages._data[i].roomname = JSON.stringify(roomname);
      } else {
        Messages._data[i].roomname = '';
      }*/
      if (roomname !== RoomsView.getRoom() || Messages._data[i].text === undefined || text.includes('script') || username.includes('script') || text.includes('<img')) {
        //console.log('We almost fell for it');
        } else {
      html += MessageView.render(Messages._data[i]);
      }
    }
    console.log(RoomsView.getRoom());
    this.$chats.append(html);
    for (let i in MessagesView.getFriends()) {
      if (i !== ''){
        $(".username:contains('" + i + "')").parent().css('background-color', 'yellow');
      }
    }
  },

  renderMessage: function(message) {
    this.$chats.prepend(MessageView.render(message));
    message.roomname = RoomsView.getRoom();
    Parse.create(message);
    //html += MessageView.render(message);

  },

  addFriend: function(name) {
    if (!this._friends[name]) {
      this._friends[name] = true;
    } else {
      delete this._friends[name];
    }
    this.render();
  },

  getFriends: function() {
    return this._friends;
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    let target = $(event.target);
    let parent = target.parent()[0];
    let child = $(parent).children('.username');
    let user = $(child[0]).text();
    MessagesView.addFriend(user);
    console.log(MessagesView.getFriends());
    console.log("message click");
  }

};