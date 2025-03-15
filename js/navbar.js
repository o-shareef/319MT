/* global bootstrap: false */
(() => {
  "use strict";
  const tooltipTriggerList = Array.from(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
})();

function updateTime() {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  // const hours = now.getHours().toString().padStart(2, '0');
  // const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeString = `${month}/${day}/${year}`;
  document.getElementById("time").textContent = timeString;
}

setInterval(updateTime, 1);

// Initial call to display time immediately
updateTime();
