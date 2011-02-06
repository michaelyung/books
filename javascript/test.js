var x = [];
for(var i=0; i<3; ++i){
	(function(new_i){
		 x[new_i] = function(){
			 return new_i;
		 };
	 })(i);

	//x[i] = function(){return i;};
}