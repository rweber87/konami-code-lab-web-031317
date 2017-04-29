const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]



function init() {
	var idx = 0 

	document.body.addEventListener('keydown', function(e) {
	  const key = parseInt(e.which || e.detail)

	  	if(code[idx] === key) {
	  		idx ++;

	  		if(idx === code.length -1) {
	  			alert("YOU DID IT!")
	  			idx = 0

	  		}
	  	} else {
	  		idx = 0
	  	}
  	})
}