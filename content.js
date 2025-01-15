function removePromoted() {
   const jobListings = document.querySelectorAll("li");
 
   jobListings.forEach((job) => {
     if (job.textContent.includes("Promoted")) {
       job.remove();
     }
   });
 }
 
 const observerCallback = (mutations) => {
   mutations.forEach((mutation) => {
     if (mutation.addedNodes.length > 0) {
       removePromoted();
     }
   });
 };
 
 const observer = new MutationObserver(observerCallback);
 const targetNode = document.body; 
 
 const config = { childList: true, subtree: true };
 
 observer.observe(targetNode, config);
 
 removePromoted();
 