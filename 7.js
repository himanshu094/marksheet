function call(){
         var en=Number(eng.value)
         var hi=Number(hin.value)
         var ph=Number(phy.value)
         var ch=Number(che.value)
         var ma=Number(mat.value)
         var gen=gender.value

         if(gen=='Male'){
          mid="S/O"
          pre="Mr."
         }else{
          mid="D/O"
          pre="Miss."
         }

     var  rem1=" "
         if(en<35){
             rem1=`<font color="red">*</font>`
         }else if(en>=75){
          rem1='D'
         }
         var  rem2=" "
         if(hi<35){
          rem2=`<font color="red">*</font>`
      }else if(hi>=75){
       rem2='D'
      }
      var  rem3=" "
      if(ph<35){
          rem3=`<font color="red">*</font>`
      }else if(ph>=75){
       rem3='D'
      }
      var  rem4=" "
      if(ch<35){
          rem4=`<font color="red">*</font>`
      }else if(ch>=75){
       rem4='D'
      }
      var  rem5=" "
      if(ma<35){
          rem5=`<font color="red">*</font>`
      }else if(ma>=75){
       rem5='D'
      }
         
         var total=en+hi+ph+ch+ma
         var per=total*100/500

var output=`<table border="1" cellspacing="0" width="50%" cellpadding="5" >
          <tr>
               <td><img src="images/cbse logo.png" width="100" height="85" alt=""></td>
               <td colspan="5" ><h1>Central Board of Secondary Education<br><center>New  
                    Delhi</center></h1></td>
          </tr>
          <tr>
               <td colspan="6"><b>Name: ${pre}</b> ${sn.value} <b> ${mid} </b> ${fn.value}<br>
                                   <b> Roll No:</b> ${no.value}<br>
                                   <b>Gender:</b> ${gen}<br>
                                   <b>School Name:</b>${school.value}
               </td>
          </tr>
          <tr>
               <th>Sub. Code</th>
               <th>Subject</th>
               <th>Max. Marks</th>
               <th>Min. Marks</th> 
               <th>Marks Obtained</th>
               <th>Remarks</th>
          </tr>
          <tr>
               <th>201</th>
               <td>English</td>
               <td>100</td>
               <td>35</td>
               <td>${en}</td>
               <td>${rem1}</td>
          </tr>
          <tr>
               <th>205</th>
               <td>Hindi</td>
               <td>100</td>
               <td>35</td>
               <td>${hi}</td>
               <td>${rem2}</td>
          </tr>
          <tr>
               <th>301</th>
               <td>Physics</td>
               <td>100</td>
               <td>35</td>
               <td>${ph}</td>
               <td>${rem3}</td>
          </tr>
          <tr>
               <th>401</th>
               <td>Chemistry</td>
               <td>100</td>
               <td>35</td>
               <td>${ch}</td>
               <td>${rem4}</td>
          </tr>
          <tr>
               <th>501</th>
               <td>Maths</td>
               <td>100</td>
               <td>35</td>
               <td>${ma}</td>
               <td>${rem5}</td>
          </tr>
          <tr>
               <th colspan="2">Total:</th>
               <td colspan="2">500</td>
               <td colspan="2">${total}</td>
          </tr>
          <tr>
               <th colspan="2">Percentage:</th>
               <td colspan="4">${per} <b>%</b></td>
          </tr>
          </table>`

          result.innerHTML=output    
}