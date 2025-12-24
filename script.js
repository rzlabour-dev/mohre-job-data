fetch('uae_job_classification_master.json')
  .then(response => response.json())
  .then(data => {
    const table = document.getElementById('jobTable');
    const search = document.getElementById('search');

    function render(rows) {
      table.innerHTML = '';
      rows.forEach(job => {
        table.innerHTML += `
          <tr>
            <td>${job["Job Code"]}</td>
            <td>${job["Job Titles English"]}</td>
            <td>${job["Job Titles Arabic"]}</td>
            <td>${job["Skill Level"]}</td>
            <td>${job["Job Classification"]}</td>
            <td>${job["Qualification Required"]}</td>
          </tr>
        `;
      });
    }

    render(data);

    search.addEventListener('input', e => {
      const value = e.target.value.toLowerCase();
      const filtered = data.filter(job =>
        job["Job Titles English"].toLowerCase().includes(value) ||
        job["Job Code"].toString().includes(value)
      );
      render(filtered);
    });
  });
