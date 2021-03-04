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


// create gliaLink
var gliaCoBrowsingLink = document.createElement('a');
gliaCoBrowsingLink.className = 'button omnibrowse-code-button';
gliaCoBrowsingLink.setAttribute('data-role', 'button');
gliaCoBrowsingLink.setAttribute('data-sm-show-media-selection-on', 'click');
gliaCoBrowsingLink.href = 'javascript:void(0);';
gliaCoBrowsingLink.innerText = 'CoBrowse';

// insert gliaLink
document.querySelector('div.modal-content').append(gliaCoBrowsingLink);
document.querySelector('.omnibrowse-code-button').addEventListener("click", showVisitorCode);
