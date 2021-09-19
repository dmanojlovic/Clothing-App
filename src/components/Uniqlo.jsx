import React from "react";

function Uniqlo() {
  
  function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  return (
    <div className="uniqlo">
      <div class="container">
        <h2><strong><u>Uniqlo</u></strong>
        </h2>
        <div>
          <div>
          <p class = "shirts">Shirts: M
          </p>
          
          </div>
          <div>
          <p class = "shorts">Shorts: M 
          </p> 
          </div>
          <div>
          <p class = "pants">Pants: M
          </p>
          </div>
        </div>
        
            <p id="text" style="display:none">Checkbox is CHECKED!</p>
        </div>
      </div>
    </div>
  );
}

export default Uniqlo;