let learnMore = document.getElementById("cobrowse");

function getVisitorCode(){
    console.log("Getting visitor code.");
    sm.getApi({version: 'v1'}).then(function(salemove) {
        salemove.omnibrowse.getVisitorCode().then(showVisitorCode);
      });
}

  function showVisitorCode(visitorCodeResponse) {
    var visitorCodeContainer = document.createElement('div');
    visitorCodeContainer.textContent = visitorCodeResponse.code;
    document.body.appendChild(visitorCodeContainer);
    setTimeout(function() {
      document.body.removeChild(visitorCodeContainer);
    }, visitorCodeResponse.validDuration);
  }

learnMore.onclick = getVisitorCode;