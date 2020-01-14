function insert(num){
			document.form.textview.value = document.form.textview.value + num;
}
function erase(){
			var view = document.form.textview.value;
            document.form.textview.value = view.substring(0,view.length-1);
}
function equal(){
			var result = document.form.textview.value;
			if(result){
                document.form.textview.value = eval(result);
			}
}
function eraseAll(){
    document.form.textview.value = "";
}