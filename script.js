document.addEventListener('DOMContentLoaded', function () {
  const searchDiv = document.getElementById('search');
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');

  searchBtn.addEventListener('click', function () {
    searchDiv.classList.add('active');
    searchInput.focus();
  });
});
