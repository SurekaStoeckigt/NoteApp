(function(exports) {
  function notelistTest() {
    var notelist = new NoteList();

    assert.isTrue(notelist.list.length == 0);

  };
  notelistTest();
})(this);
