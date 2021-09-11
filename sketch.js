var bg1,bg2,bg3;
var appState=1;
var startbut;
var uttarakhandBut,maharashtraBut,sikkimBut,tamilBut,mpBut,rajBut,arunBut,jammuBut;

var dehradunhr,jammuhr,mahahr,sikkimhr,tamilhr,mphr,arunhr;
var dehradunhr1,jammuhr1,rajasthanhr1,mahahr1,sikkimhr1,tamilhr1,mphr1,arunhr1;
var dehradunhr2,jammuhr2,rajasthanhr2,mahahr2,sikkimhr2,tamilhr2,mphr2,arunhr2;
var dehradunhr3,jammuhr3,rajasthanhr3,mahahr3,sikkimhr3,tamilhr3,mphr3,arunhr3;
var dehradunhr4,jammuhr4,rajasthanhr4,mahahr4,sikkimhr4,tamilhr4,mphr4,arunhr4;
var dehradunhr5,jammuhr5,rajasthanhr5,mahahr5,sikkimhr5,tamilhr5,mphr5,arunhr5;
var dehradunhr6,jammuhr6,rajasthanhr6,mahahr6,sikkimhr6,tamilhr6,mphr6,arunhr6;
var dehradunhr7,jammuhr7,rajasthanhr7,mahahr7,sikkimhr7,tamilhr7,mphr7,arunhr7;
var dehradunhr8,jammuhr8,rajasthanhr8,mahahr8,sikkimhr8,tamilhr8,mphr8,arunhr8;
var dehradunhr9,jammuhr9,rajasthanhr9,mahahr9,sikkimhr9,tamilhr9,mphr9,arunhr9;
var dehradunhr10,jammuhr10,rajasthanhr10,mahahr10,sikkimhr10,tamilhr10,mphr10,arunhr10;
var dehradun11;

function preload(){

    getdehradunDate();
    getdehradunTime();
    getdehradunSunrise();
    getdehradunSunset();
    getdehradunMoon();
    getdehradunSun();
    getdehradunDay();

    setInterval(async()=>{
        getdehradunMoon()},600000
    )
    setInterval(async()=>{
        getdehradunSun()},600000
    )
    setInterval(async()=>{
        getdehradunTime()},60000
    )
    setInterval(async()=>{
        getdehradunDay()},10800000
    )
    setInterval(async()=>{
        getdehradunDate()},7200000
    )
    setInterval(async()=>{
        getdehradunSunrise()},43200000
    )
    setInterval(async()=>{
        getdehradunSunset()},43200000
    )

    getjammuDate();
    getjammuTime();
    getjammuSunrise();
    getjammuSunset();
    getjammuMoon();
    getjammuSun();
    getjammuDay();

    setInterval(async()=>{
        getjammuMoon()},600000
    )
    setInterval(async()=>{
        getjammuSun()},600000
    )
    setInterval(async()=>{
        getjammuTime()},60000
    )
    setInterval(async()=>{
        getjammuDay()},10800000
    )
    setInterval(async()=>{
        getjammuDate()},7200000
    )
    setInterval(async()=>{
        getjammuSunrise()},43200000
    )
    setInterval(async()=>{
        getjammuSunset()},43200000
    )

    getrajasthanDate();
    getrajasthanTime();
    getrajasthanSunrise();
    getrajasthanSunset();
    getrajasthanMoon();
    getrajasthanSun();
    getrajasthanDay();

    setInterval(async()=>{
        getrajasthanMoon()},600000
    )
    setInterval(async()=>{
        getrajasthanSun()},600000
    )
    setInterval(async()=>{
        getrajasthanTime()},60000
    )
    setInterval(async()=>{
        getrajasthanDay()},10800000
    )
    setInterval(async()=>{
        getrajasthanDate()},7200000
    )
    setInterval(async()=>{
        getrajasthanSunrise()},43200000
    )
    setInterval(async()=>{
        getrajasthanSunset()},43200000
    )

    getmahaDate();
    getmahaTime();
    getmahaSunrise();
    getmahaSunset();
    getmahaMoon();
    getmahaSun();
    getmahaDay();

    setInterval(async()=>{
        getmahaMoon()},600000
    )
    setInterval(async()=>{
        getmahaSun()},600000
    )
    setInterval(async()=>{
        getmahaTime()},60000
    )
    setInterval(async()=>{
        getmahaDay()},10800000
    )
    setInterval(async()=>{
        getmahaDate()},7200000
    )
    setInterval(async()=>{
        getmahaSunrise()},43200000
    )
    setInterval(async()=>{
        getmahaSunset()},43200000
    )

    getsikkimDate();
    getsikkimTime();
    getsikkimSunrise();
    getsikkimSunset();
    getsikkimMoon();
    getsikkimSun();
    getsikkimDay();

    setInterval(async()=>{
        getsikkimMoon()},600000
    )
    setInterval(async()=>{
        getsikkimSun()},600000
    )
    setInterval(async()=>{
        getsikkimTime()},60000
    )
    setInterval(async()=>{
        getsikkimDay()},10800000
    )
    setInterval(async()=>{
        getsikkimDate()},7200000
    )
    setInterval(async()=>{
        getsikkimSunrise()},43200000
    )
    setInterval(async()=>{
        getsikkimSunset()},43200000
    )

    gettamilDate();
    gettamilTime();
    gettamilSunrise();
    gettamilSunset();
    gettamilMoon();
    gettamilSun();
    gettamilDay();

    setInterval(async()=>{
        gettamilMoon()},600000
    )
    setInterval(async()=>{
        gettamilSun()},600000
    )
    setInterval(async()=>{
        gettamilTime()},60000
    )
    setInterval(async()=>{
        gettamilDay()},10800000
    )
    setInterval(async()=>{
        gettamilate()},7200000
    )
    setInterval(async()=>{
        gettamilSunrise()},43200000
    )
    setInterval(async()=>{
        gettamilSunset()},43200000
    )

    getmpDate();
    getmpTime();
    getmpSunrise();
    getmpSunset();
    getmpMoon();
    getmpSun();
    getmpDay();

    setInterval(async()=>{
        getmpMoon()},600000
    )
    setInterval(async()=>{
        getmpSun()},600000
    )
    setInterval(async()=>{
        getmpTime()},60000
    )
    setInterval(async()=>{
        getmpDay()},10800000
    )
    setInterval(async()=>{
        getmpDate()},7200000
    )
    setInterval(async()=>{
        getmpSunrise()},43200000
    )
    setInterval(async()=>{
        getmpSunset()},43200000
    )

    getarunDate();
    getarunTime();
    getarunSunrise();
    getarunSunset();
    getarunMoon();
    getarunSun();
    getarunDay();

    setInterval(async()=>{
        getarunMoon()},600000
    )
    setInterval(async()=>{
        getarunSun()},600000
    )
    setInterval(async()=>{
        getarunTime()},60000
    )
    setInterval(async()=>{
        getarunDay()},10800000
    )
    setInterval(async()=>{
        getarunDate()},7200000
    )
    setInterval(async()=>{
        getarunSunrise()},43200000
    )
    setInterval(async()=>{
        getarunSunset()},43200000
    )

    bg1=loadImage("backgrounds/bg2.jpg")
}
function setup(){
    createCanvas(displayWidth-5,displayHeight-150)

    startbut=createButton("LET'S START");
    startbut.size(280,50);
    startbut.style('background','orange');

    uttarakhandBut=createButton('UTTARAKHAND');
    jammuBut=createButton('JAMMU AND KASHMIR');
    sikkimBut=createButton('SIKKIM');
    tamilBut=createButton('TAMIL NADU');
    rajBut=createButton('RAJASTHAN');
    mpBut=createButton('MADHYA PRADESH');
    maharashtraBut=createButton('MAHARASHTRA');
    arunBut=createButton('ARUNACHAL PRADESH');

    uttarakhandBut.size(250,50);
    jammuBut.size(250,50)
    sikkimBut.size(250,50)
    tamilBut.size(250,50)
    rajBut.size(250,50)
    mpBut.size(250,50)
    maharashtraBut.size(250,50)
    arunBut.size(250,50)

    uttarakhandBut.style('background','pink');
    jammuBut.style('background','lightgreen');
    sikkimBut.style('background','pink');
    tamilBut.style('background','yellow');
    rajBut.style('background','yellow');
    mpBut.style('background','orange');
    maharashtraBut.style('background','lightblue');
    arunBut.style('background','lightgreen');

}
function draw(){
    background(bg1);

    if(appState===1){
    textSize(50);
    fill("red")
    stroke("black");
    strokeWeight(4);
    text("LET'S SEE THE LIVE CELESTIAL BODY POSITIONS ",displayWidth/2-570,displayHeight/2-230);
    text("AND TIME",displayWidth/2-150,displayHeight/2-170)
    text("OF DIFFERENT PLACES IN INDIA",displayWidth/2-390,displayHeight/2-110)
    startbut.mousePressed(()=>{
        appState=2;
    })
    startbut.position(displayWidth/2-170,displayHeight/2-70);
    }
    if(appState===2){
        startbut.hide();
        textSize(50);
        fill("red")
        stroke("black");
        strokeWeight(4);
        text("STATE :",displayWidth/2-155,displayHeight/2-370);

    mpBut.position(displayWidth/2-350,displayHeight/2-230);
    jammuBut.position(displayWidth/2-350,displayHeight/2-300);
    uttarakhandBut.position(displayWidth/2-350,displayHeight/2-160);
    rajBut.position(displayWidth/2-350,displayHeight/2-90);
    arunBut.position(displayWidth/2,displayHeight/2-230);
    sikkimBut.position(displayWidth/2,displayHeight/2-300);
    tamilBut.position(displayWidth/2,displayHeight/2-160);
    maharashtraBut.position(displayWidth/2,displayHeight/2-90);
    }
    uttarakhandBut.mousePressed(()=>{
        appState=3;
    })
    jammuBut.mousePressed(()=>{
        appState=4;
    })
    rajBut.mousePressed(()=>{
        appState=5;
    })
    maharashtraBut.mousePressed(()=>{
        appState=6;
    })
    sikkimBut.mousePressed(()=>{
        appState=7;
    })
    tamilBut.mousePressed(()=>{
        appState=8;
    })
    mpBut.mousePressed(()=>{
        appState=9;
    })
    arunBut.mousePressed(()=>{
        appState=10;
    })
    if(appState===3){
        background(bg1);
        uttarakhandBut.hide();
        maharashtraBut.hide();
        tamilBut.hide();
        rajBut.hide();
        arunBut.hide();
        mpBut.hide();
        jammuBut.hide();
        sikkimBut.hide();

        stroke(0);
        strokeWeight(2);
        fill("black");
        textSize(48);
        text("UTTARAKHAND CURRENT DATA",displayWidth/2-355,displayHeight/2-430);
        
        textSize(48);
        stroke(0);
        strokeWeight(2.5);
        fill("black");
        text("DATE :",displayWidth/2-310,displayHeight/2-300);
        text("CURRENT TIME :",displayWidth/2-310,displayHeight/2-230);
        text("SUNRISE :",displayWidth/2-310,displayHeight/2-160);
        text("SUNSET :",displayWidth/2-310,displayHeight/2-90);
        text("MOON ALTITUDE :",displayWidth/2-310,displayHeight/2-20);
        text("SUN ALTITUDE :",displayWidth/2-310,displayHeight/2+50);
        text("DAY LENGTH :",displayWidth/2-310,displayHeight/2+120);

        textSize(48);
        stroke(0);
        strokeWeight(2);
        fill("red");
        text(dehradunhr5,displayWidth/2-140,displayHeight/2-300);
        text(dehradunhr7,displayWidth/2+90,displayHeight/2-230);
        text(dehradunhr8,displayWidth/2-60,displayHeight/2-160);
        text(dehradunhr9,displayWidth/2-60,displayHeight/2-90);
        text(dehradunhr1 + " °",displayWidth/2+130,displayHeight/2-20);
        text(dehradunhr3 + " °",displayWidth/2+110,displayHeight/2+50);
        text(dehradunhr4,displayWidth/2+50,displayHeight/2+120);
       

    }
    if(appState===4){
        background(bg1);
        uttarakhandBut.hide();
        maharashtraBut.hide();
        tamilBut.hide();
        rajBut.hide();
        arunBut.hide();
        mpBut.hide();
        jammuBut.hide();
        sikkimBut.hide();

        stroke(0);
        strokeWeight(2);
        fill("black");
        textSize(48);
        text("JAMMU AND KASHMIR CURRENT DATA",displayWidth/2-435,displayHeight/2-430);
        
        textSize(48);
        stroke(0);
        strokeWeight(2.5);
        fill("black");
        text("DATE :",displayWidth/2-310,displayHeight/2-300);
        text("CURRENT TIME :",displayWidth/2-310,displayHeight/2-230);
        text("SUNRISE :",displayWidth/2-310,displayHeight/2-160);
        text("SUNSET :",displayWidth/2-310,displayHeight/2-90);
        text("MOON ALTITUDE :",displayWidth/2-310,displayHeight/2-20);
        text("SUN ALTITUDE :",displayWidth/2-310,displayHeight/2+50);
        text("DAY LENGTH :",displayWidth/2-310,displayHeight/2+120);

        textSize(48);
        stroke(0);
        strokeWeight(2);
        fill("red");
        text(jammuhr5,displayWidth/2-140,displayHeight/2-300);
        text(jammuhr7,displayWidth/2+90,displayHeight/2-230);
        text(jammuhr8,displayWidth/2-60,displayHeight/2-160);
        text(jammuhr9,displayWidth/2-60,displayHeight/2-90);
        text(jammuhr1 + " °",displayWidth/2+130,displayHeight/2-20);
        text(jammuhr3 + " °",displayWidth/2+110,displayHeight/2+50);
        text(jammuhr4,displayWidth/2+50,displayHeight/2+120);
       
    }

    if(appState===5){
        background(bg1);
        uttarakhandBut.hide();
        maharashtraBut.hide();
        tamilBut.hide();
        rajBut.hide();
        arunBut.hide();
        mpBut.hide();
        jammuBut.hide();
        sikkimBut.hide();

        stroke(0);
        strokeWeight(2);
        fill("black");
        textSize(48);
        text("RAJASTHAN CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
        
        textSize(48);
        stroke(0);
        strokeWeight(2.5);
        fill("black");
        text("DATE :",displayWidth/2-310,displayHeight/2-300);
        text("CURRENT TIME :",displayWidth/2-310,displayHeight/2-230);
        text("SUNRISE :",displayWidth/2-310,displayHeight/2-160);
        text("SUNSET :",displayWidth/2-310,displayHeight/2-90);
        text("MOON ALTITUDE :",displayWidth/2-310,displayHeight/2-20);
        text("SUN ALTITUDE :",displayWidth/2-310,displayHeight/2+50);
        text("DAY LENGTH :",displayWidth/2-310,displayHeight/2+120);

        textSize(48);
        stroke(0);
        strokeWeight(2);
        fill("red");
        text(rajasthanhr5,displayWidth/2-140,displayHeight/2-300);
        text(rajasthanhr7,displayWidth/2+90,displayHeight/2-230);
        text(rajasthanhr8,displayWidth/2-60,displayHeight/2-160);
        text(rajasthanhr9,displayWidth/2-60,displayHeight/2-90);
        text(rajasthanhr1 + " °",displayWidth/2+130,displayHeight/2-20);
        text(rajasthanhr3 + " °",displayWidth/2+110,displayHeight/2+50);
        text(rajasthanhr4,displayWidth/2+50,displayHeight/2+120);
       
    }
    
    if(appState===6){
        background(bg1);
        uttarakhandBut.hide();
        maharashtraBut.hide();
        tamilBut.hide();
        rajBut.hide();
        arunBut.hide();
        mpBut.hide();
        jammuBut.hide();
        sikkimBut.hide();

        stroke(0);
        strokeWeight(2);
        fill("black");
        textSize(48);
        text("MAHARASHTRA CURRENT DATA",displayWidth/2-355,displayHeight/2-430);
        
        textSize(48);
        stroke(0);
        strokeWeight(2.5);
        fill("black");
        text("DATE :",displayWidth/2-310,displayHeight/2-300);
        text("CURRENT TIME :",displayWidth/2-310,displayHeight/2-230);
        text("SUNRISE :",displayWidth/2-310,displayHeight/2-160);
        text("SUNSET :",displayWidth/2-310,displayHeight/2-90);
        text("MOON ALTITUDE :",displayWidth/2-310,displayHeight/2-20);
        text("SUN ALTITUDE :",displayWidth/2-310,displayHeight/2+50);
        text("DAY LENGTH :",displayWidth/2-310,displayHeight/2+120);

        textSize(48);
        stroke(0);
        strokeWeight(2);
        fill("red");
        text(mahahr5,displayWidth/2-140,displayHeight/2-300);
        text(mahahr7,displayWidth/2+90,displayHeight/2-230);
        text(mahahr8,displayWidth/2-60,displayHeight/2-160);
        text(mahahr9,displayWidth/2-60,displayHeight/2-90);
        text(mahahr1 + " °",displayWidth/2+130,displayHeight/2-20);
        text(mahahr3 + " °",displayWidth/2+110,displayHeight/2+50);
        text(mahahr4,displayWidth/2+50,displayHeight/2+120);
       
    }
    
    if(appState===7){
        background(bg1);
        uttarakhandBut.hide();
        maharashtraBut.hide();
        tamilBut.hide();
        rajBut.hide();
        arunBut.hide();
        mpBut.hide();
        jammuBut.hide();
        sikkimBut.hide();

        stroke(0);
        strokeWeight(2);
        fill("black");
        textSize(48);
        text("SIKKIM CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
        
        textSize(48);
        stroke(0);
        strokeWeight(2.5);
        fill("black");
        text("DATE :",displayWidth/2-310,displayHeight/2-300);
        text("CURRENT TIME :",displayWidth/2-310,displayHeight/2-230);
        text("SUNRISE :",displayWidth/2-310,displayHeight/2-160);
        text("SUNSET :",displayWidth/2-310,displayHeight/2-90);
        text("MOON ALTITUDE :",displayWidth/2-310,displayHeight/2-20);
        text("SUN ALTITUDE :",displayWidth/2-310,displayHeight/2+50);
        text("DAY LENGTH :",displayWidth/2-310,displayHeight/2+120);

        textSize(48);
        stroke(0);
        strokeWeight(2);
        fill("red");
        text(sikkimhr5,displayWidth/2-140,displayHeight/2-300);
        text(sikkimhr7,displayWidth/2+90,displayHeight/2-230);
        text(sikkimhr8,displayWidth/2-60,displayHeight/2-160);
        text(sikkimhr9,displayWidth/2-60,displayHeight/2-90);
        text(sikkimhr1 + " °",displayWidth/2+130,displayHeight/2-20);
        text(sikkimhr3 + " °",displayWidth/2+110,displayHeight/2+50);
        text(sikkimhr4,displayWidth/2+50,displayHeight/2+120);
       
    }

    if(appState===8){
        background(bg1);
        uttarakhandBut.hide();
        maharashtraBut.hide();
        tamilBut.hide();
        rajBut.hide();
        arunBut.hide();
        mpBut.hide();
        jammuBut.hide();
        sikkimBut.hide();

        stroke(0);
        strokeWeight(2);
        fill("black");
        textSize(48);
        text("TAMIL NADU CURRENT DATA",displayWidth/2-348,displayHeight/2-430);
        
        textSize(48);
        stroke(0);
        strokeWeight(2.5);
        fill("black");
        text("DATE :",displayWidth/2-310,displayHeight/2-300);
        text("CURRENT TIME :",displayWidth/2-310,displayHeight/2-230);
        text("SUNRISE :",displayWidth/2-310,displayHeight/2-160);
        text("SUNSET :",displayWidth/2-310,displayHeight/2-90);
        text("MOON ALTITUDE :",displayWidth/2-310,displayHeight/2-20);
        text("SUN ALTITUDE :",displayWidth/2-310,displayHeight/2+50);
        text("DAY LENGTH :",displayWidth/2-310,displayHeight/2+120);

        textSize(48);
        stroke(0);
        strokeWeight(2);
        fill("red");
        text(tamilhr5,displayWidth/2-140,displayHeight/2-300);
        text(tamilhr7,displayWidth/2+90,displayHeight/2-230);
        text(tamilhr8,displayWidth/2-60,displayHeight/2-160);
        text(tamilhr9,displayWidth/2-60,displayHeight/2-90);
        text(tamilhr1 + " °",displayWidth/2+130,displayHeight/2-20);
        text(tamilhr3 + " °",displayWidth/2+110,displayHeight/2+50);
        text(tamilhr4,displayWidth/2+50,displayHeight/2+120);
       
    }
    
    if(appState===9){
        background(bg1);
        uttarakhandBut.hide();
        maharashtraBut.hide();
        tamilBut.hide();
        rajBut.hide();
        arunBut.hide();
        mpBut.hide();
        jammuBut.hide();
        sikkimBut.hide();

        stroke(0);
        strokeWeight(2);
        fill("black");
        textSize(48);
        text("MADHYA PRADESH CURRENT DATA",displayWidth/2-383,displayHeight/2-430);
        
        textSize(48);
        stroke(0);
        strokeWeight(2.5);
        fill("black");
        text("DATE :",displayWidth/2-310,displayHeight/2-300);
        text("CURRENT TIME :",displayWidth/2-310,displayHeight/2-230);
        text("SUNRISE :",displayWidth/2-310,displayHeight/2-160);
        text("SUNSET :",displayWidth/2-310,displayHeight/2-90);
        text("MOON ALTITUDE :",displayWidth/2-310,displayHeight/2-20);
        text("SUN ALTITUDE :",displayWidth/2-310,displayHeight/2+50);
        text("DAY LENGTH :",displayWidth/2-310,displayHeight/2+120);

        textSize(48);
        stroke(0);
        strokeWeight(2);
        fill("red");
        text(mphr5,displayWidth/2-140,displayHeight/2-300);
        text(mphr7,displayWidth/2+90,displayHeight/2-230);
        text(mphr8,displayWidth/2-60,displayHeight/2-160);
        text(mphr9,displayWidth/2-60,displayHeight/2-90);
        text(mphr1 + " °",displayWidth/2+130,displayHeight/2-20);
        text(mphr3 + " °",displayWidth/2+110,displayHeight/2+50);
        text(mphr4,displayWidth/2+50,displayHeight/2+120);
       
    }
    
    if(appState===10){
        background(bg1);
        uttarakhandBut.hide();
        maharashtraBut.hide();
        tamilBut.hide();
        rajBut.hide();
        arunBut.hide();
        mpBut.hide();
        jammuBut.hide();
        sikkimBut.hide();

        stroke(0);
        strokeWeight(2);
        fill("black");
        textSize(48);
        text("ARUNACHAL PRADESH CURRENT DATA",displayWidth/2-450,displayHeight/2-430);
        
        textSize(48);
        stroke(0);
        strokeWeight(2.5);
        fill("black");
        text("DATE :",displayWidth/2-310,displayHeight/2-300);
        text("CURRENT TIME :",displayWidth/2-310,displayHeight/2-230);
        text("SUNRISE :",displayWidth/2-310,displayHeight/2-160);
        text("SUNSET :",displayWidth/2-310,displayHeight/2-90);
        text("MOON ALTITUDE :",displayWidth/2-310,displayHeight/2-20);
        text("SUN ALTITUDE :",displayWidth/2-310,displayHeight/2+50);
        text("DAY LENGTH :",displayWidth/2-310,displayHeight/2+120);

        textSize(48);
        stroke(0);
        strokeWeight(2);
        fill("red");
        text(arunhr5,displayWidth/2-140,displayHeight/2-300);
        text(arunhr7,displayWidth/2+90,displayHeight/2-230);
        text(arunhr8,displayWidth/2-60,displayHeight/2-160);
        text(arunhr9,displayWidth/2-60,displayHeight/2-90);
        text(arunhr1 + " °",displayWidth/2+130,displayHeight/2-20);
        text(arunhr3 + " °",displayWidth/2+110,displayHeight/2+50);
        text(arunhr4,displayWidth/2+50,displayHeight/2+120);
       
    }
}
async function getdehradunMoon(){
    var responsedehradun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=dehradun,%20india");
    var responseJSONdehradun=await responsedehradun.json();
    dehradunhr=await responseJSONdehradun.moon_altitude.toString();
    dehradunhr1=dehradunhr.slice(0,5);
}
async function getdehradunSun(){
    var responsedehradun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=dehradun,%20india");
    var responseJSONdehradun=await responsedehradun.json();
    dehradunhr2=await responseJSONdehradun.sun_altitude.toString();
    dehradunhr3=dehradunhr2.slice(0,5);
}
async function getdehradunDay(){
    var responsedehradun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=dehradun,%20india");
    var responseJSONdehradun=await responsedehradun.json();
    dehradunhr4=await responseJSONdehradun.day_length;
}
async function getdehradunDate(){
    var responsedehradun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=dehradun,%20india");
    var responseJSONdehradun=await responsedehradun.json();
    dehradunhr5=await responseJSONdehradun.date;
}
async function getdehradunTime(){
    var responsedehradun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=dehradun,%20india");
    var responseJSONdehradun=await responsedehradun.json();
    dehradunhr6=await responseJSONdehradun.current_time.toString();
    dehradunhr7=dehradunhr6.slice(0,5);
}
async function getdehradunSunrise(){
    var responsedehradun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=dehradun,%20india");
    var responseJSONdehradun=await responsedehradun.json();
    dehradunhr8=await responseJSONdehradun.sunrise;
}
async function getdehradunSunset(){
    var responsedehradun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=dehradun,%20india");
    var responseJSONdehradun=await responsedehradun.json();
    dehradunhr9=await responseJSONdehradun.sunset;
    dehradun10=dehradunhr9.toString();
    dehradun11=dehradun10.slice(2,3)
}

async function getjammuMoon(){
    var responsejammu=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=jammu,%20india");
    var responseJSONjammu=await responsejammu.json();
    jammuhr=await responseJSONjammu.moon_altitude.toString();
    jammuhr1=jammuhr.slice(0,5);
}
async function getjammuSun(){
    var responsejammu=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=jammu,%20india");
    var responseJSONjammu=await responsejammu.json();
    jammuhr2=await responseJSONjammu.sun_altitude.toString();
    jammuhr3=jammuhr2.slice(0,5);
}
async function getjammuDay(){
    var responsejammu=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=jammu,%20india");
    var responseJSONjammu=await responsejammu.json();
    jammuhr4=await responseJSONjammu.day_length;
}
async function getjammuDate(){
    var responsejammu=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=jammu,%20india");
    var responseJSONjammu=await responsejammu.json();
    jammuhr5=await responseJSONjammu.date;
}
async function getjammuTime(){
    var responsejammu=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=jammu,%20india");
    var responseJSONjammu=await responsejammu.json();
    jammuhr6=await responseJSONjammu.current_time.toString();
    jammuhr7=jammuhr6.slice(0,5);
}
async function getjammuSunrise(){
    var responsejammu=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=jammu,%20india");
    var responseJSONjammu=await responsejammu.json();
    jammuhr8=await responseJSONjammu.sunrise;
}
async function getjammuSunset(){
    var responsejammu=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=jammu,%20india");
    var responseJSONjammu=await responsejammu.json();
    jammuhr9=await responseJSONjammu.sunset;
}

async function getrajasthanMoon(){
    var responserajasthan=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=jaipur,%20india");
    var responseJSONrajasthan=await responserajasthan.json();
    rajasthanhr=await responseJSONrajasthan.moon_altitude.toString();
    rajasthanhr1=rajasthanhr.slice(0,5);
}
async function getrajasthanSun(){
    var responserajasthan=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=jaipur,%20india");
    var responseJSONrajasthan=await responserajasthan.json();
    rajasthanhr2=await responseJSONrajasthan.sun_altitude.toString();
    rajasthanhr3=rajasthanhr2.slice(0,5);
}
async function getrajasthanDay(){
    var responserajasthan=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=jaipur,%20india");
    var responseJSONrajasthan=await responserajasthan.json();
    rajasthanhr4=await responseJSONrajasthan.day_length;
}
async function getrajasthanDate(){
    var responserajasthan=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=jaipur,%20india");
    var responseJSONrajasthan=await responserajasthan.json();
    rajasthanhr5=await responseJSONrajasthan.date;
}
async function getrajasthanTime(){
    var responserajasthan=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=jaipur,%20india");
    var responseJSONrajasthan=await responserajasthan.json();
    rajasthanhr6=await responseJSONrajasthan.current_time.toString();
    rajasthanhr7=rajasthanhr6.slice(0,5);
}
async function getrajasthanSunrise(){
    var responserajasthan=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=jaipur,%20india");
    var responseJSONrajasthan=await responserajasthan.json();
    rajasthanhr8=await responseJSONrajasthan.sunrise;
}
async function getrajasthanSunset(){
    var responserajasthan=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=jaipur,%20india");
    var responseJSONrajasthan=await responserajasthan.json();
    rajasthanhr9=await responseJSONrajasthan.sunset;
}

async function getmahaMoon(){
    var responsemaha=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=mumbai,%20india");
    var responseJSONmaha=await responsemaha.json();
    mahahr=await responseJSONmaha.moon_altitude.toString();
    mahahr1=mahahr.slice(0,5);
}
async function getmahaSun(){
    var responsemaha=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=mumbai,%20india");
    var responseJSONmaha=await responsemaha.json();
    mahahr2=await responseJSONmaha.sun_altitude.toString();
    mahahr3=mahahr2.slice(0,5);
}
async function getmahaDay(){
    var responsemaha=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=mumbai,%20india");
    var responseJSONmaha=await responsemaha.json();
    mahahr4=await responseJSONmaha.day_length;
}
async function getmahaDate(){
    var responsemaha=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=mumbai,%20india");
    var responseJSONmaha=await responsemaha.json();
    mahahr5=await responseJSONmaha.date;
}
async function getmahaTime(){
    var responsemaha=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=mumbai,%20india");
    var responseJSONmaha=await responsemaha.json();
    mahahr6=await responseJSONmaha.current_time.toString();
    mahahr7=mahahr6.slice(0,5);
}
async function getmahaSunrise(){
    var responsemaha=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=mumbai,%20india");
    var responseJSONmaha=await responsemaha.json();
    mahahr8=await responseJSONmaha.sunrise;
}
async function getmahaSunset(){
    var responsemaha=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=mumbai,%20india");
    var responseJSONmaha=await responsemaha.json();
    mahahr9=await responseJSONmaha.sunset;
}

async function getsikkimMoon(){
    var responsesikkim=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=gangtok,%20india");
    var responseJSONsikkim=await responsesikkim.json();
    sikkimhr=await responseJSONsikkim.moon_altitude.toString();
    sikkimhr1=sikkimhr.slice(0,5);
}
async function getsikkimSun(){
    var responsesikkim=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=gangtok,%20india");
    var responseJSONsikkim=await responsesikkim.json();
    sikkimhr2=await responseJSONsikkim.sun_altitude.toString();
    sikkimhr3=sikkimhr2.slice(0,5);
}
async function getsikkimDay(){
    var responsesikkim=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=gangtok,%20india");
    var responseJSONsikkim=await responsesikkim.json();
    sikkimhr4=await responseJSONsikkim.day_length;
}
async function getsikkimDate(){
    var responsesikkim=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=gangtok,%20india");
    var responseJSONsikkim=await responsesikkim.json();
    sikkimhr5=await responseJSONsikkim.date;
}
async function getsikkimTime(){
    var responsesikkim=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=gangtok,%20india");
    var responseJSONsikkim=await responsesikkim.json();
    sikkimhr6=await responseJSONsikkim.current_time.toString();
    sikkimhr7=sikkimhr6.slice(0,5);
}
async function getsikkimSunrise(){
    var responsesikkim=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=gangtok,%20india");
    var responseJSONsikkim=await responsesikkim.json();
    sikkimhr8=await responseJSONsikkim.sunrise;
}
async function getsikkimSunset(){
    var responsesikkim=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=gangtok,%20india");
    var responseJSONsikkim=await responsesikkim.json();
    sikkimhr9=await responseJSONsikkim.sunset;
}

async function gettamilMoon(){
    var responsetamil=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=chennai,%20india");
    var responseJSONtamil=await responsetamil.json();
    tamilhr=await responseJSONtamil.moon_altitude.toString();
    tamilhr1=tamilhr.slice(0,5);
}
async function gettamilSun(){
    var responsetamil=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=chennai,%20india");
    var responseJSONtamil=await responsetamil.json();
    tamilhr2=await responseJSONtamil.sun_altitude.toString();
    tamilhr3=tamilhr2.slice(0,5);
}
async function gettamilDay(){
    var responsetamil=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=chennai,%20india");
    var responseJSONtamil=await responsetamil.json();
    tamilhr4=await responseJSONtamil.day_length;
}
async function gettamilDate(){
    var responsetamil=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=chennai,%20india");
    var responseJSONtamil=await responsetamil.json();
    tamilhr5=await responseJSONtamil.date;
}
async function gettamilTime(){
    var responsetamil=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=chennai,%20india");
    var responseJSONtamil=await responsetamil.json();
    tamilhr6=await responseJSONtamil.current_time.toString();
    tamilhr7=tamilhr6.slice(0,5);
}
async function gettamilSunrise(){
    var responsetamil=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=chennai,%20india");
    var responseJSONtamil=await responsetamil.json();
    tamilhr8=await responseJSONtamil.sunrise;
}
async function gettamilSunset(){
    var responsetamil=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=chennai,%20india");
    var responseJSONtamil=await responsetamil.json();
    tamilhr9=await responseJSONtamil.sunset;
}

async function getmpMoon(){
    var responsemp=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=bhopal,%20india");
    var responseJSONmp=await responsemp.json();
    mphr=await responseJSONmp.moon_altitude.toString();
    mphr1=mphr.slice(0,5);
}
async function getmpSun(){
    var responsemp=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=bhopal,%20india");
    var responseJSONmp=await responsemp.json();
    mphr2=await responseJSONmp.sun_altitude.toString();
    mphr3=mphr2.slice(0,5);
}
async function getmpDay(){
    var responsemp=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=bhopal,%20india");
    var responseJSONmp=await responsemp.json();
    mphr4=await responseJSONmp.day_length;
}
async function getmpDate(){
    var responsemp=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=bhopal,%20india");
    var responseJSONmp=await responsemp.json();
    mphr5=await responseJSONmp.date;
}
async function getmpTime(){
    var responsemp=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=bhopal,%20india");
    var responseJSONmp=await responsemp.json();
    mphr6=await responseJSONmp.current_time.toString();
    mphr7=mphr6.slice(0,5);
}
async function getmpSunrise(){
    var responsemp=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=bhopal,%20india");
    var responseJSONmp=await responsemp.json();
    mphr8=await responseJSONmp.sunrise;
}
async function getmpSunset(){
    var responsemp=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=bhopal,%20india");
    var responseJSONmp=await responsemp.json();
    mphr9=await responseJSONmp.sunset;
}

async function getarunMoon(){
    var responsearun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=itanagar,%20india");
    var responseJSONarun=await responsearun.json();
    arunhr=await responseJSONarun.moon_altitude.toString();
    arunhr1=arunhr.slice(0,5);
}
async function getarunSun(){
    var responsearun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=itanagar,%20india");
    var responseJSONarun=await responsearun.json();
    arunhr2=await responseJSONarun.sun_altitude.toString();
    arunhr3=arunhr2.slice(0,5);
}
async function getarunDay(){
    var responsearun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=itanagar,%20india");
    var responseJSONarun=await responsearun.json();
    arunhr4=await responseJSONarun.day_length;
}
async function getarunDate(){
    var responsearun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=itanagar,%20india");
    var responseJSONarun=await responsearun.json();
    arunhr5=await responseJSONarun.date;
}
async function getarunTime(){
    var responsearun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=itanagar,%20india");
    var responseJSONarun=await responsearun.json();
    arunhr6=await responseJSONarun.current_time.toString();
    arunhr7=arunhr6.slice(0,5);
}
async function getarunSunrise(){
    var responsearun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=itanagar,%20india");
    var responseJSONarun=await responsearun.json();
    arunhr8=await responseJSONarun.sunrise;
}
async function getarunSunset(){
    var responsearun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=itanagar,%20india");
    var responseJSONarun=await responsearun.json();
    arunhr9=await responseJSONarun.sunset;
}