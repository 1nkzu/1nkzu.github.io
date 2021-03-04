let cobrowse = document.getElementById("cobrowse");

function getCode(){
    console.log("Getting visitor code.");
    sm.getApi({version: 'v1'}).then(function(salemove) {
        salemove.omnibrowse.getVisitorCode().then(showVisitorCode);
    });
}

function showVisitorCode(visitorCodeResponse) {
    var visitorCodeContainer = document.getElementById('codeModal');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    visitorCodeContainer.innerHTML = visitorCodeResponse;
    visitorCodeContainer.style.display = "none";

    span.onclick = function() {
        visitorCodeContainer.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == visitorCodeContainer) {
          visitorCodeContainer.style.display = "none";
        }
    }
}

cobrowse.onclick = showVisitorCode('12345');