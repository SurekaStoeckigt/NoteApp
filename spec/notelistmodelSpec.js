(function(exports) {
  function notelistTest() {
    var notelist = new NoteList();

    assert.isTrue(notelist.list.length == 0);

  };
  notelistTest();
})(this);

(function(exports) {
  function notelistarrayTest() {
    var noteapp = new NoteApp("Hi Bob")
    var notelist = new NoteList();
    var notelist_array = notelist.list;

    noteapp.storearray(notelist_array)
    // console.log(notelist.list)
    assert.isTrue(notelist.list[0] == "Hi Bob");

  };
  notelistarrayTest();
})(this);
