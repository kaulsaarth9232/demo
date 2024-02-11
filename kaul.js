const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movie',{useNewUrlparser:true,useUnifiedTopology:true})
.then(()=>{
	console.log("connection on")
})
.catch(()=>{
	console.log("oh no");
})
const movieschema=new mongoose.schema({
	title:String,
	year:Number,
	score:Number
})
mongoose.model('movie', movieschema);
const hello=new movie({title:"anand",year:1988,score:88})

