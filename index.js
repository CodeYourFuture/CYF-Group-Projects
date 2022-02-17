const mainContent = document.getElementById("main-content");

 const data = [
   {
     images: [
       "https://via.placeholder.com/150/FF0000/808080/?text=Down.com",
       "https://via.placeholder.com/150/FF0000/808080/?text=Down.com",
       "https://via.placeholder.com/150/FF0000/808080/?text=Down.com",
      
     ],
     text: [
       "this is first text",
       "this is second test",
       "this is third text",
       "this is fourth text"
     ],
   },

   {
     images: [
       "https://via.placeholder.com/150/FFFF00/000000/?text=WebsiteBuilders.com",
       "https://via.placeholder.com/150/FFFF00/000000/?text=WebsiteBuilders.com",
       "https://via.placeholder.com/150/FFFF00/000000/?text=WebsiteBuilders.com",
       "https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net",
     ],
     text: [
       "this is first text",
       "this is second text",
       "this is third text",
       "this is fourth text"
     ],
   },

   {
     images: [
       "https://via.placeholder.com/150/0000FF/FFFFFF/?text=Digital.com",
       "https://via.placeholder.com/150/0000FF/FFFFFF/?text=Digital.com",
       "https://via.placeholder.com/150/0000FF/FFFFFF/?text=Digital.com+",
       "https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net",
     ],
     text: [
       "this is first text",
       "this is second text",
       "this is third text",
       "this is fourth text",
     ],
   },
 ];



  function makeCard( btnstyle){
    
    data.forEach((item, i) => {
     const section = document.createElement("section");
       section.className ="section"
       const p = document.createElement("p");
       const img = document.createElement("img");
       img.src = data[i].images[i];
       const btn = document.createElement("button");
       btn.className = btnstyle;
       p.innerHTML = data[i].text[i];

       section.appendChild(img);
       section.appendChild(p);
       section.appendChild(btn);
       mainContent.appendChild(section);
     });
    }

    function fourthCard(btnstyle,i) {

      const section = document.createElement("section");
      section.className = "side-section";
      const p = document.createElement("p");
      const img = document.createElement("img");
      img.src = data[i].images[3];
      const btn = document.createElement("button");
      btn.className = btnstyle;
      p.innerHTML = data[i].text[3];

      section.appendChild(img);
      section.appendChild(p);
      section.appendChild(btn);
      mainContent.appendChild(section);
    }

     
 



function makeSection() {
  for ( i = 0; i < 3; i++) {
       if (i === 0) {

        makeCard();
       
         // this is the side-div wrapper
         const sidDive = document.createElement("div");
         //this is the social network div
         const socialNetwork = document.createElement("div");
         const socialNetworkP = document.createElement("p");
         socialNetworkP.innerHTML = "social networking";
         //this is the charity div
         const churityJump = document.createElement("div");
         const churityJumpP = document.createElement("p");
         churityJumpP.innerHTML = "organizing a charity";
         //this is the bottum calender div
         const calenderDiv = document.createElement("div");
         const pastEvent = document.createElement("p");
         pastEvent.innerHTML = " past Event";
         const calender = document.createElement("p");
         calender.innerHTML = " calender";

         
         sidDive.appendChild(socialNetwork);
         sidDive.appendChild(churityJump);
         sidDive.appendChild(calenderDiv);

         const centralDiv = document.createElement("div");
         centralDiv.className="central-div";
         const centralDivP = document.createElement("p");
         centralDivP.innerHTML = "this is central div";



         socialNetwork.appendChild(socialNetworkP);
         churityJump.appendChild(socialNetworkP);
         calenderDiv.appendChild(pastEvent);
         calenderDiv.appendChild(calender);
         centralDiv.appendChild(centralDivP);
         mainContent.appendChild(sidDive);
         mainContent.appendChild(centralDiv);
       }
       else if( i===1){

          makeCard( "noDisplay");
          fourthCard("noDisplay",1);
        
           }
       else{
           
         makeCard();
         fourthCard("btnstyle",2);
        
       }
    }
  }


makeSection();

// function makeContent(fun) {
//   for (var i = 0; i < 3; i++) {
//    mainContent.innerHTML += `${fun}`
   
//   }
//   return mainContent;
// }
// makeContent(makeSection());
