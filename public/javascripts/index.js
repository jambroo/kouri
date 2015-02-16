$(function() {
  $( "#date" ).datepicker({
	  dateFormat: "yy-mm-dd",
    beforeShow: function() {
        setTimeout(function(){
            $('.ui-datepicker').css('z-index', 99999999999999);
        }, 0);
    }
	})

  $('#run').keyup(function(e) {
  	var runEl = $(e.target);
  	var run = runEl.val();
    
    $.get("/common", function(data) {
    	for (lap in data) {
    		try {
	    		run = run.replace(new RegExp(lap, "g"), data[lap])
	    		var runEval = eval(run);
	    		runEl.siblings('span').html(runEval+' km');
	    	} catch(err) {
	    		runEl.siblings('span').html('? km');
	    	}
    	}
    })
  })
})