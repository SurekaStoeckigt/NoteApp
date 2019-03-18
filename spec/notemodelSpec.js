(function(exports) {
  function testNoteAddsBlankText() {
    var noteapp = new NoteApp();

    assert.isTrue(noteapp !== null);

  };
  testNoteAddsBlankText();
})(this);

(function(exports) {
  function textTest() {
    var text = "text for test";
    var note = new NoteApp(text);


    assert.isTrue(note.text === text);

  };
  textTest();
})(this);
