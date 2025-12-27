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
const modal = document.getElementById("searchModal");
const openBtn = document.getElementById("openSearch");
const closeBtn = document.querySelector(".close");
const tabs = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

openBtn.onclick = () => modal.style.display = "flex";
closeBtn.onclick = () => modal.style.display = "none";

tabs.forEach(tab => {
  tab.onclick = () => {
    tabs.forEach(t => t.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  };
});

document.getElementById("searchBtn").onclick = () => {
  const titleVal = document.getElementById("searchTitle").value.toLowerCase();
  const codeVal = document.getElementById("searchCode").value;

  const filtered = jobsData.filter(job =>
    job.title.toLowerCase().includes(titleVal) &&
    job.code.includes(codeVal)
  );

  displayJobs(filtered);
  modal.style.display = "none";
};

