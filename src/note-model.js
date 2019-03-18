(function(exports) {
  function NoteApp(text){
    this.text = text
  };

  NoteApp.prototype.exclaim = function(text){
    return text
  };
  exports.NoteApp = NoteApp;
})(this);
