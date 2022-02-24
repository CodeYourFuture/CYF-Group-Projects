const mainContent = document.getElementById("main-content");



 const data = [
   {
     images: [
       "https://via.placeholder.com/150/FF0000/808080/?text=Down.com",
       "https://via.placeholder.com/150/FF0000/808080/?text=Down.com",
       "https://via.placeholder.com/150/FF0000/808080/?text=Down.com",
     ],
     text: [
       "this is first text this is first textthis is first text this is first textthis is first text this is first textthis is first text this is first text",
       "this is second test this is second test this is second test this is second test this is second test this is second test this is second test this is second tes",
       "this is third text this is third text this is third text this is third textthis is third text this is third text this is third text",
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
       "this is first text this is first textthis is first text this is first textthis is first text this is first textthis is first text this is first text",
       "this is second test this is second test this is second test this is second test this is second test this is second test this is second test this is second tes",
       "this is third text this is third text this is third text this is third textthis is third text this is third text this is third text",
       "this is fourth text this is fourth text this is fourth text this is fourth text this is fourth text this is fourth text this is fourth text",
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
       "this is first text this is first textthis is first text this is first textthis is first text this is first textthis is first text this is first text",
       "this is second test this is second test this is second test this is second test this is second test this is second test this is second test this is second tes",
       "this is third text this is third text this is third text this is third textthis is third text this is third text this is third text",
       "this is fourth text this is fourth text this is fourth text this is fourth text this is fourth text this is fourth text this is fourth text",
     ],
   },
 ];

   

  function makeCard( btnstyle){
    
    data.forEach((item, i) => {
     const section = document.createElement("section");
       section.className ="card"
       const pDiv = document.createElement("div")
       btnstyle ? (pDiv.className = "any") : (pDiv.className = "pDiv");
       const btnDiv = document.createElement("div");
       btnDiv.className = "btnDiv";
       const p = document.createElement("p");
       const img = document.createElement("img");
       img.src = data[i].images[i];
       img.className ="card-img";
       const btn = document.createElement("button");
       btn.className = btnstyle;
       p.innerHTML = data[i].text[i];
       section.appendChild(pDiv);
       section.appendChild(btnDiv);
       pDiv.appendChild(img);
       pDiv.appendChild(p);
       btnDiv.appendChild(btn);
       mainContent.appendChild(section);
     });
    }
     function calenderDiv() {
       
       const mainDiv = document.createElement("div");
       mainDiv.className = "mainDiv";
    
       const socialNetwork = document.createElement("div");
       const charityJump = document.createElement("div");
       const eventDiv = document.createElement("div");
       const calender = document.createElement("div");
       socialNetwork.className = "charity";
        charityJump.className = "charity";
       
       
        calender.className = "calender";
        eventDiv.className = "event";
     
      
       const socialNetworkP = document.createElement("p");
       const charityJumpP = document.createElement("p");
       const pastEvent = document.createElement("p");
       const calenderP = document.createElement("p");
       socialNetworkP.innerHTML = "social networking";
       charityJumpP.innerHTML = "organizing a charity";
       pastEvent.innerHTML = " past Event";
       calenderP.innerHTML = " calender";
       socialNetwork.appendChild(socialNetworkP);
       charityJump.appendChild(charityJumpP);
       eventDiv.appendChild(pastEvent);
       calender.appendChild(calenderP);
       mainDiv.appendChild(socialNetwork);
       mainDiv.appendChild(charityJump);
      
       mainDiv.appendChild(eventDiv);
         mainDiv.appendChild(calender);
       mainContent.appendChild(mainDiv);
       
      

       
      }

     function centralDiv(){
       
         const centralDiv = document.createElement("div");
         centralDiv.className = "central-div";
         const centralDivP = document.createElement("p");
         centralDivP.innerHTML ="Lorem ipsum dolor sit amet.</b><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sequi.";
         centralDiv.appendChild(centralDivP);
         mainContent.appendChild(centralDiv);
    }

    function fourthCard(btnstyle,i) {
      const section = document.createElement("section");
      section.className = "side-card";
      const pDiv = document.createElement("div");
      pDiv.className = "pDiv";
      const btnDiv = document.createElement("div");
      btnstyle && i===1 ? (pDiv.className = "any") : (pDiv.className = "pDiv");
      const p = document.createElement("p");
      const img = document.createElement("img");
      img.src = data[i].images[3];
      img.className = "card-img";
      const btn = document.createElement("button");
      btn.className = btnstyle;
      p.innerHTML = data[i].text[i];
      section.appendChild(pDiv);
      section.appendChild(btnDiv);
      pDiv.appendChild(img);
      pDiv.appendChild(p);
      btnDiv.appendChild(btn);
      mainContent.appendChild(section);
    }

    function makeSection() {
     data.forEach ((item,i)=>{
       if (i === 0) {
         const titleDiv1 = document.createElement("div");
         titleDiv1.className = "titleDiv";
         const line1 = document.createElement("div");
         line1.className = "part1-line1";
         const line2 = document.createElement("div");
         line2.className = "part1-line2";
         const museumNews = document.createElement("h5");
         museumNews.innerHTML = "MUSEUM NEWS";
         museumNews.id = "museumNews";
         const events = document.createElement("h5");
         events.innerHTML = "EVENT";
         const button = document.createElement("button");
         button.className = "titleButton";
         button.innerHTML = "VIEW MORE";
         titleDiv1.appendChild(museumNews);
         titleDiv1.appendChild(line1);
         titleDiv1.appendChild(events);
         titleDiv1.appendChild(line2);
         titleDiv1.appendChild(button);
         mainContent.appendChild(titleDiv1);
         makeCard();
          calenderDiv();
          centralDiv();
       }
       else if( i===1){

        const titleDiv2 = document.createElement("div");
        titleDiv2.className = "titleDiv";
        const line3 = document.createElement("div");
        line3.className = "part2-line1";
        const line4 = document.createElement("div");
        line4.className = "part2-line2";
        const welfare = document.createElement("h5");
        welfare.innerHTML = "BENEVOLENCE & WELFAR";
        welfare.id = " welfare";
        const visitors = document.createElement("h5");
        visitors.innerHTML = "VISITORS INFORMATION";
        const button1 = document.createElement("button");
        const button2 = document.createElement("button");
        button1.className = "titleButton";
        button2.className = "titleButton";
        button1.innerHTML = "VIEW MORE";
        button2.innerHTML = "VIEW MORE";
        titleDiv2.appendChild(welfare);
        titleDiv2.appendChild(line3);
        titleDiv2.appendChild(button1);
        titleDiv2.appendChild(visitors);
        titleDiv2.appendChild(line4);
        titleDiv2.appendChild(button2);
        mainContent.appendChild(titleDiv2);
          makeCard("noDisplay");
          fourthCard("noDisplay", 1);
       }
       else{
          const titleDiv3 = document.createElement("div");
          titleDiv3.className = "titleDiv";
          const line5 = document.createElement("div");
          line5.className = "part3-line1";
          const projectSuprt = document.createElement("h5");
          projectSuprt.innerHTML = "PROJECT SUPPORT";
          projectSuprt.id = " projectSuprt";
          const button = document.createElement("button");
          button.className = "titleButton";
          button.innerHTML = "VIEW MORE";
          titleDiv3.appendChild(projectSuprt);
          titleDiv3.appendChild(line5);
          titleDiv3.appendChild(button);
          mainContent.appendChild(titleDiv3);
          makeCard();
          fourthCard("btnstyle",2);
        
       }
    });
  }


makeSection();

