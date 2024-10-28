function removePromoted() {
    const jobListings = document.querySelectorAll("li");
    jobListings.forEach(job => {
       if (job.innerHTML.includes("Promoted")) {
          job.remove();
       }
    });
 }
 
 const observer = new MutationObserver(removePromoted);
 const targetNode = document.body;
 
 const config = { childList: true, subtree: true };
 
 observer.observe(targetNode, config);
 
 removePromoted();
 