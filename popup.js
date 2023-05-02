const noteInput = document.getElementById("note-input");
const saveButton = document.getElementById("save-button");

chrome.storage.sync.get("note", function(data) {
  noteInput.value = data.note || "";
});

saveButton.addEventListener("click", function() {
  const note = noteInput.value;
  chrome.storage.sync.set({ note }, function() {
    alert("Note saved");
  });
});