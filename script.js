function openWindowWithSize(url, width, height) {
    if (!url) {
      alert("Please enter a website link.");
      return;
    }
  
    window.open(url, "_blank", `width=${width},height=${height},resizable=yes`);
  }
  
  document.getElementById("iphoneX").addEventListener("click", function () {
    var url = document.getElementById("input-link").value;
    openWindowWithSize(url, 375, 812);
  });
  
  document.getElementById("galaxyNote10").addEventListener("click", function () {
    var url = document.getElementById("input-link").value;
    openWindowWithSize(url, 412, 869);
  });
  
  document.getElementById("ipadPro").addEventListener("click", function () {
    var url = document.getElementById("input-link").value;
    openWindowWithSize(url, 1024, 1366);
  });
  
  document.getElementById("macOSX").addEventListener("click", function () {
    var url = document.getElementById("input-link").value;
    openWindowWithSize(url, 1920, 1080);
  });
