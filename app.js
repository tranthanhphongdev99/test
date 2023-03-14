function abc(){
    var a = document.createElement('a');
    	a.setAttribute("href", urlPrefix + cat_directory + filename);
    	a.setAttribute("target", "_blank");

    	var dispatch = document.createEvent("HTMLEvents");
    	dispatch.initEvent("click", true, true);
    	a.dispatchEvent(dispatch);
};