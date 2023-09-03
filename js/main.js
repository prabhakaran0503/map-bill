
var library=[{
    author:"bill gates",
    title:"the road ahead",
    readingStatus:"true",
},
{
    author:"Steve jobs",
    title:"walter isaacson",
    readingStatus:"true"

},
{
    author:"suzanne collins",
    title:"mockingjay :the final book of the hunger games ",
    readingStatus:"false" 
}
];

var ans=library.map(function(e){
    console.log(e);
    if(e.readingStatus=="true"){
        document.write("already read "+e.author+"by"+e.title)
    }
    
    else {
        document.write("you still need to read"+e.title+"by"+e.author)
    }
})