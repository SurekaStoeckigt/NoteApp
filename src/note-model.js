(function(exports) {
  function NoteApp(text){
    this.text = text;
  };

  NoteApp.prototype.exclaim = function(text){
    return text
  };

  NoteApp.prototype.storearray = function(notelist_array) {
    notelist_array.push(this.text)
  };
  exports.NoteApp = NoteApp;
})(this);
