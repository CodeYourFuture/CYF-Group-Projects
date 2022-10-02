const mainContent = document.getElementById("main-content");

const data = [
	{
		images: [
			"https://www.army.mod.uk/media/11387/20181004-2-scots-parades-penecuik-310.jpg?anchor=center&mode=crop&width=600&height=500&rnd=132609781940000000",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj89NpgmdQ2WCt_P_2ZXu-5m7iH3WRO426XA&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJObcmjvBuy6VokaZ1DAH9O2fj9BYYNKWow&usqp=CAU",
		],
		text: [
			"111111111111this is first text this is first textthis is first text this is first textthis is first text this is first textthis is first text this is first text",
			"222222222222this is second test this is second test this is second test this is second test this is second test this is second test this is second test this is second tes",
			"3333333333333this is third text this is third text this is third text this is third textthis is third text this is third text this is third text",
		],
	},

	{
		images: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEU6XGHS81egyWwtzDsQZtG9XcOvyynVPyYw&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2wQfi2spim61uGIyoPpf-rXzmRo0p0qwFPw&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wHlG9DA4_mvmUKps9wzC5jh5DVmUxLeX9g&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHBJQdYYvJGobgvd67Ucdw-XjizI2oiEt_A&usqp=CAU",
		],
		text: [
			"44444444this is first text this is first textthis is first text this is first textthis is first text this is first textthis is first text this is first text",
			"5555555555this is second test this is second test this is second test this is second test this is second test this is second test this is second test this is second tes",
			"66666666666this is third text this is third text this is third text this is third textthis is third text this is third text this is third text",
			"this is fourth text this is fourth text this is fourth text this is fourth text this is fourth text this is fourth text this is fourth text",
		],
	},

	{
		images: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgiLPdHBEhKFe3yTlg8iHmLGVpGdCmZtki0g&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZRH5Gxr2CybmwKUxz1HXOR7tvm0ssknvwg&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBN3QEUXTfMtyjBQ5ZsqmY5njcDySxkfaW7w&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_eNdMHFd1uQroxWEZmW2mvGfYi_ASBVs3A&usqp=CAU",
		],
		text: [
			"7777777777this is first text this is first textthis is first text this is first textthis is first text this is first textthis is first text this is first text",
			"888888888this is second test this is second test this is second test this is second test this is second test this is second test this is second test this is second tes",
			"9999999999this is third text this is third text this is third text this is third textthis is third text this is third text this is third text",
			"this is fourth text this is fourth text this is fourth text this is fourth text this is fourth text this is fourth text this is fourth text",
		],
	},
];

function makeCard(btnstyle, btnDivSty, n) {
	data.forEach((item, i) => {
		const section = document.createElement("section");
		section.className = "card";
		const pDiv = document.createElement("div");
		btnstyle ? (pDiv.className = "any") : (pDiv.className = "pDiv");
		const btnDiv = document.createElement("div");
		btnDiv.className = btnDivSty;
		const p = document.createElement("p");
		const img = document.createElement("img");
		img.src = data[i].images[n];
		img.className = "card-img";
		img.style.height = "40%";
		const btn = document.createElement("button");
		btn.className = btnstyle;
		btn.innerHTML = "Read More";
		p.innerHTML = data[i].text[n];
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
	const eventBtn = document.createElement("button");
	const calendarBtn = document.createElement("button");
	socialNetwork.className = "charity";
	charityJump.className = "charity";
	calendarBtn.className = "calendar";
	eventBtn.className = "event";
	const socialNetworkP = document.createElement("p");
	const charityJumpP = document.createElement("p");
	socialNetworkP.innerHTML = "social networking";
	charityJumpP.innerHTML = "organizing a charity";
	eventBtn.innerHTML = "past Event";
	calendarBtn.innerHTML = " calendar";
	socialNetwork.appendChild(socialNetworkP);
	charityJump.appendChild(charityJumpP);
	mainDiv.appendChild(socialNetwork);
	mainDiv.appendChild(charityJump);

	mainDiv.appendChild(eventBtn);
	mainDiv.appendChild(calendarBtn);
	mainContent.appendChild(mainDiv);
}

function centralDiv() {
	const centralDiv = document.createElement("div");
	centralDiv.className = "central-div";
	const centralDivP = document.createElement("p");
	centralDivP.innerHTML =
		"Lorem ipsum dolor sit amet.</b><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sequi.";
	centralDiv.appendChild(centralDivP);
	mainContent.appendChild(centralDiv);
}

function fourthCard(btnstyle, i) {
	const section = document.createElement("section");
	section.className = "side-card";
	const pDiv = document.createElement("div");
	pDiv.className = "pDiv";
	const btnDiv = document.createElement("div");
	btnstyle && i === 1 ? (pDiv.className = "any") : (pDiv.className = "pDiv");
	const p = document.createElement("p");
	const img = document.createElement("img");
	img.src = data[i].images[3];
	img.className = "card-img";
	const btn = document.createElement("button");
	btn.className = btnstyle;
	btn.innerHTML = "Read More";
	p.innerHTML = data[i].text[i];
	section.appendChild(pDiv);
	section.appendChild(btnDiv);
	pDiv.appendChild(img);
	pDiv.appendChild(p);
	btnDiv.appendChild(btn);
	mainContent.appendChild(section);
}

function makeSection() {
	data.forEach((item, j) => {
		if (j === 0) {
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
			makeCard("btnstyle", "btnDivSty", j);
			calenderDiv();
			centralDiv();
		} else if (j === 1) {
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
			makeCard("noDisplay", "false", j);
			fourthCard("noDisplay", 1);
		} else {
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
			makeCard("btnstyle", "btnDivSty", j);
			fourthCard("btnstyle", 2);
		}
	});
}

makeSection();
