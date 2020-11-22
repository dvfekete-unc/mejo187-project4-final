// MODAL

  // Declaring variables
  var modal = document.getElementById("modal");
  var btn = document.getElementById("button");
  var span = document.getElementById("close");

  // Event listener
  btn.addEventListener(
    "click",
    function(event) {
      modal.style.display = "block";
    },
    false
  );

  btn.onclick = function() {
    modal.style.display = "block";
  };

  // Upon clicking X, close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };

// BACKGROUND

  // Creates array of all content boxes
  var contentList = document.querySelectorAll(".content-flex");
  // Grabs container holding all content
  var body = document.querySelector("body");

  var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.75
  }

  // entries = array = contentList
  // entry = one element in the array = one content-box in the array of contentList
  let callback = (entries) => {
    entries.forEach(entry => {

      /* Checks to see if the content-box is intersecting with the screen view */
      if (entry.isIntersecting) {

        /* Add the "active" class to the content-box */
        /* Troubleshooting function */
        entry.target.classList.add("active");
        
        /* Creates a variable "id", which will store whatever comes after the phrase "box-" in the current content-box's ID. */
        /* Example: After intersecting with a content-box with the ID "box-one", id will become "one" */
        var id = entry.target.id.replace("box-", "");

        /* Sets ID of body element to what was stored in var id (set in the previous line based on content-box's id) */
        body.id = id;

    } else {
        /* If the content-box leaves the screen view, remove the "active" class. */
        /* Troubleshooting function */
        entry.target.classList.remove("active")
      }
    });
  };

  let observer = new IntersectionObserver(callback, options);

  /* For each div in the contentList, start observer (IntersectionObserver method), which uses callback and observer  */
  contentList.forEach((div) => {
    observer.observe(div);
  });