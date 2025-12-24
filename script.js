let allData = [];
let currentPage = 1;
const rowsPerPage = 50;

fetch('uae_job_classification_master.json')
  .then(res => res.json())
  .then(data => {
    allData = data;
    renderPage();
  });

function renderPage() {
  const table = document.getElementById('jobTable');
  table.innerHTML = '';

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;

  allData.slice(start, end).forEach(job => {
    table.innerHTML += `
      <tr>
        <td>${job["Job Code"]}</td>
        <td>${job["Job Titles English"]}</td>
        <td>${job["Job Titles Arabic"]}</td>
        <td>${job["Skill Level"]}</td>
        <td>${job["Job Classification"]}</td>
        <td>${job["Qualification Required"]}</td>
      </tr>`;
  });
}
