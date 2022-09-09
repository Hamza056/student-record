student=[
    { 
        Name:'Ali',
        id:[1], 
   
    TotalMark:150,
    status:'fail',
    opMarks:49
    },
    { 
        Name:'Ahed',
        id:[2], 
       
        TotalMark:150,
        status:'pass',
        opMarks:120
        },
        { 
            Name:'Ahmed',
            id:[3], 
           
            TotalMark:150,
            status:'pass',
            opMarks:140
            },
            { 
                Name:'Abdul',
                id:[5], 
               
                TotalMark:150,
                
                status:'pass',
                opMarks:145,
                },
                { 
                    Name:'Rehman',
                    id:[23], 
                    TotalMark:150,
                    status:'pass',
                    opMarks:148,
                    },
                { 
                    Name:'raheem',
                    id:[9], 
                   
                    TotalMark:150,
                    
                    status:'fail',
                    opMarks:55,
                    },
                    { 
                        Name:'kreem',
                        id:[12], 
                       
                        TotalMark:150,
                        
                        status:'fail',
                        opMarks:28,
                        },
                        { 
                            Name:'hasan',
                            id:[12], 
                           
                            TotalMark:150,
                            
                            status:'fail',
                            opMarks:25,
                            },
                            { 
                                Name:'Arslan',
                                id:[18], 
                               
                                TotalMark:150,
                                
                                status:'pass',
                                opMarks:95,
                                },
                                { 
                                    Name:'suleman',
                                    id:[25], 
                                   
                                    TotalMark:150,
                                    
                                    status:'pass',
                                    opMarks:110,
                                    },
                                    { 
                                        Name:'shahzaib',
                                        id:[22], 
                                       
                                        TotalMark:150,
                                        
                                        status:'pass',
                                        opMarks:102,
                                        },
]


const stdtable=document.querySelector('.container')
console.log(stdtable);
const displaymv=function(mv){
 
  const index1st= mv.findIndex(function(todo,index){
   return todo.opMarks>145 &&todo.status=='pass' ;
    
  })
  console.log(mv[index1st]);
  const index2nd= mv.findIndex(function(todo,index){
    return todo.opMarks>140 &&todo.status=='pass' ;
     
   })
   console.log(mv[index2nd]);
  
  
   
  
   const index3rd= mv.findIndex(function(todo,index){
    return todo.opMarks>130&&todo.status=='pass' ;
     
   })
   console.log(mv[index3rd]);
   const indexbtm1st= mv.findIndex(function(todo,index){
    return todo.opMarks<50 &&todo.status=='fail' ;
     
   })
   console.log(mv[indexbtm1st]);
 
   const indexbtm2nd= mv.findIndex(function(todo,index){
    return todo.opMarks<40 &&todo.status=='fail' ;
     
   })
   console.log(mv[indexbtm2nd]);
   const indexbtm3rd= mv.findIndex(function(todo,index){
    return todo.opMarks<26&&todo.status=='fail' ;
     
   })
   console.log(mv[indexbtm3rd]);
   const html=`
   <div class="heigh">
   <table>
       <h1>Top Three achievers</h1>
       <tr>
           <th>Id</th>
           <th>Name</th>
           <th>Obtained marks</th>
           <th>Total Marks</th>
           <th>status</th>
       </tr>
       <tr>
           <td>${mv[index1st].id}</td>
           <td>${mv[index1st].Name}</td>
           <td>${mv[index1st].opMarks}</td>
           <td>${mv[index1st].TotalMark}</td>
           <td>${mv[index1st].status}</td>
       </tr>
       <tr>
           <td>${mv[index2nd].id}</td>
           <td>${mv[index2nd].Name}</td>
           <td>${mv[index2nd].opMarks}</td>
           <td>${mv[index2nd].TotalMark}</td>
           <td>${mv[index2nd].status}</td>
       </tr>
       <tr>
           <td>${mv[index3rd].id}</td>
           <td>${mv[index3rd].Name}</td>
           <td>${mv[index3rd].opMarks}</td>
           <td>${mv[index3rd].TotalMark}</td>
           <td>${mv[index3rd].status}</td>
       </tr>
      
   </table>
</div>
<div class="low">
   <table>
       <h1>Top Three lowest marks </h1>
       <tr>
           <th>Id</th>
           <th>Name</th>
           <th>Obtained marks</th>
           <th>Total Marks</th>
           <th>status</th>
       </tr>
       <tr>
       <td>${mv[indexbtm3rd].id}</td>
       <td>${mv[indexbtm3rd].Name}</td>
       <td>${mv[indexbtm3rd].opMarks}</td>
       <td>${mv[indexbtm3rd].TotalMark}</td>
       <td>${mv[indexbtm3rd].status}</td>
   </tr>
       <tr>
           <td>${mv[indexbtm2nd].id}</td>
           <td>${mv[indexbtm2nd].Name}</td>
           <td>${mv[indexbtm2nd].opMarks}</td>
           <td>${mv[indexbtm2nd].TotalMark}</td>
           <td>${mv[indexbtm2nd].status}</td>
       </tr>
       
       <tr>
           <td>${mv[indexbtm1st].id}</td>
           <td>${mv[indexbtm1st].Name}</td>
           <td>${mv[indexbtm1st].opMarks}</td>
           <td>${mv[indexbtm1st].TotalMark}</td>
           <td>${mv[indexbtm1st].status}</td>
       </tr>
   </table>
</div>
   `
   stdtable.insertAdjacentHTML('afterbegin',html);
// mv.forEach(function(mov,i){
    
//     console.log(Math.max(mov.opMarks));
  
// })
//    console.log(mv);

  };
  displaymv(student);