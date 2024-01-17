const fetchuser=(request,response,next)=>{
console.log("hello from middleware");
next();
}
module.exports=fetchuser