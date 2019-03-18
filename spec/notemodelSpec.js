(function(exports) {
  function testNoteAddsBlankText() {
    var noteapp = new NoteApp();

    assert.isTrue(noteapp !== null);

  };
  testNoteAddsBlankText();
})(this);

(function(exports) {
  function exclaimTest() {
    var text = "text for test";
    var note = new NoteApp(text);


    // note.exclaim(text);
    assert.isTrue(note.text === text);

  };
  exclaimTest();
})(this);
