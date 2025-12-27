// Live counters
function updateCounters() {
  document.getElementById('contactCount').textContent = contacts.length;
  document.getElementById('favoriteCount').textContent = 
    contacts.filter(c => c.isFavorite).length;
}

// Call after renderCurrentList()
renderCurrentList(); // existing
updateCounters();    // add this

// Update in renderCurrentList()
function renderCurrentList() {
  // ... existing code ...
  renderContacts(filtered);
  updateCounters();  // add this line
}