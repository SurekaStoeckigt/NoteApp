(function(exports) {
  function testNoteAddsBlankText() {
    var noteapp = new NoteApp();

    if (noteapp !== null) {
      throw new Error("noteapp is not defined")
    }
  };
  testNoteAddsBlankText();
})(this);
