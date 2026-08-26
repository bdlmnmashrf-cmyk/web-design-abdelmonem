//

//var firstName="abdo"
//var age= 24

//console.log(`my name is + ${firstName} my age is ${age}`)

//var n=5
//var r=7
//console.log(n+r)
//var k= "text"
//var k=20
//console.log(k/n)
//console.log(k++)
//console.log(k)
//console.log(++k)
//var l=15
//l+=10

//console.log(l)
//console.log(k>l)

//var degree=prompt("inter your degree")
 //if(degree>100) 
// console.log("invaled degree")

  // if (degree==null){
    //   alert("please enter degree") 
       
//}
    //else{
    
   // if (degree >= 90 && degree < 100)
    //    console.log("A")
   //     else if (degree>=80 && degree<90)
     //   console.log("B")
    //    else if (degree>=70 && degree<80)
      //    console.log("c")
    //   else if(degree<60)
  //        console.log("f")

//}
let x= prompt("inter your trak")
let track=["web","network","ux"]  

let flag  = track.find((item)=> item == x)
 if (!flag)
  track.push(x)
  
  
  track.forEach((item , i , arr) => {
 console.log(item)
  })
  
    
  
 
