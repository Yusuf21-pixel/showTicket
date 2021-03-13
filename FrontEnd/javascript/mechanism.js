var cnt = 0;
var first=true;
sessionStorage.lang = 1;

var movieCart = {
    0:["THE MARKSMAN", "../images/englishmovie1.jpg","190k likes","Action,Thriller","67%","745 ratings","1h 50m","26 feb, 2021","https://www.youtube.com/embed/lEBPNi4bEbc?autoplay=1&loop=1&playlist=lEBPNi4bEbc"],
    1:["MASTER","../images/tamilmovie1.jpg","100k likes","Action,Thriller","80%","177.7k ratings","2h 58m","13 jan, 2021","https://www.youtube.com/embed/1_iUFT3nWHk?autoplay=1&loop=1&playlist=1_iUFT3nWHk"],
    2:["RKT", "../images/hindimovie1.jpg","70k likes","Comedy,Drama,Family","76%","6.4k ratings","1h 55m","1 jan, 2021","https://www.youtube.com/embed/FuogqMTSp5M?autoplay=1&loop=1&playlist=FuogqMTSp5M" ],
    3:["TOM & JERRY", "../images/englishmovie2.jpg","300k likes","Action,Animation,Comedy","79%","9.2k ratings","1h 41m","19 feb, 2021","https://www.youtube.com/embed/kP9TfCWaQT4?autoplay=1&loop=1&playlist=kP9TfCWaQT4"],
    4:["PARRIS JEYARAJ","../images/tamilmovie2.jpg","20k likes","Comedy","74%","5.1k ratings","2h 16m","12 feb, 2021","https://www.youtube.com/embed/IGk51zb48So?autoplay=1&loop=1&playlist=IGk51zb48So"],
    5:["T&F", "../images/hindimovie2.jpg","80k likes","Comedy,Musical,Romantic","65%","441 ratings","1h 47m","19 feb, 2021","https://www.youtube.com/embed/oHsF5mlUyW0?autoplay=1&loop=1&playlist=oHsF5mlUyW0"],
    6:["WW1984", "../images/englishmovie3.jpg","500k likes","Action,Adventure,Fantasy","72%","100k ratings","2h 31m","24 dec, 2020","https://www.youtube.com/embed/XW2E2Fnh52w?autoplay=1&loop=1&playlist=XW2E2Fnh52w"],
    7:["CHAKRA","../images/tamilmovie3.jpg","50k likes","Action,Thriller","75%","21.1k ratings","2h 10m","19 feb, 2021","https://www.youtube.com/embed/wHiUlFH8AAQ?autoplay=1&loop=1&playlist=wHiUlFH8AAQ"],
    8:["TENET", "../images/hindimovie3.jpg","600k likes","Action,Thriller","76%","87k ratings","2h 31m","4 dec, 2020","https://www.youtube.com/embed/AZGcmvrTX9M?autoplay=1&loop=1&playlist=AZGcmvrTX9M"],
    9:["MONSTER HUNTER", "../images/englishmovie4.jpg","700k likes","Action,Adventure,Fantasy","73%","7.4k ratings","1h 39m","5 feb, 2021","https://www.youtube.com/embed/3od-kQMTZ9M?autoplay=1&loop=1&playlist=3od-kQMTZ9M"],
    10:["KS","../images/tamilmovie4.jpg","40k likes","Drama,Sports","78%","4.1k ratings","2h 20m","5 feb, 2021","https://www.youtube.com/embed/aEBhUqhU2oo?autoplay=1&loop=1&playlist=aEBhUqhU2oo"],
    11:["BEFAAM", "../images/hindimovie4.jpg","70k likes","Comedy,drama","56%","157 ratings","2h 28m","9 mar, 2018","https://www.youtube.com/embed/POMfrjXO6G0?autoplay=1&loop=1&playlist=POMfrjXO6G0"],
    12:["THE VIGIL", "../images/englishmovie5.jpg","150k likes","Horror,Thriller","45%","267 ratings","1h 32m","26 feb, 2021","https://www.youtube.com/embed/JarbtubycQg?autoplay=1&loop=1&playlist=JarbtubycQg"],
    13:["CALLS","../images/tamilmovie5.jpg","30k likes","Crime,Thriller","71%","487 ratings","2h 31m","26 feb, 2021","https://www.youtube.com/embed/qYR2otRiiss?autoplay=1&loop=1&playlist=qYR2otRiiss"],
    14:["MCW","../images/hindimovie5.jpg","50k likes","Mystery,Thriller","52%","2k ratings","1h 47m","26 feb, 2021","https://www.youtube.com/embed/c7pEChYrR4Y?autoplay=1&loop=1&playlist=c7pEChYrR4Y"],
    15:["CRAWL", "../images/englishmovie6.jpg","500k likes","Action,Horror,Thriller","71%","96k ratings","1h 28m","23 aug, 2018","https://www.youtube.com/embed/H6MLJG0RdDE?autoplay=1&loop=1&playlist=H6MLJG0RdDE"],
    16:["KFN","../images/tamilmovie6.jpg","20k likes","Drama","86%","1.9k ratings","2h 37m","19 feb, 2021","https://www.youtube.com/embed/oHQQjQKdOWg?autoplay=1&loop=1&playlist=oHQQjQKdOWg"],
    17:["SPMB", "../images/hindimovie6.jpg","150k likes","Comedy,Family","74%","4.3k ratings","2h 21m","15 nov, 2020","https://www.youtube.com/embed/hs2MPHRkP9A?autoplay=1&loop=1&playlist=hs2MPHRkP9A"]
};

function slide(ele) {
    let imgClass = document.getElementsByClassName("img");
        if(ele.id=="nex") {
           if(first) 
              first = false;
           if(cnt > 15)
               cnt = 0;
           if(cnt < 0 )
               cnt = 0;
           let temp;
           if(cnt == 15) {
               temp = cnt + 2;
               cnt += 2
           }
           else {
               temp = cnt + 3;
               cnt += 3;
           }
           if(cnt > 15) {
              cnt = 0;
              temp = 0;
           }
           for(i=0;i<3;i++) {
              imgClass[i].src = movieCart[temp][1];
              imgClass[i].setAttribute("alt",movieCart[temp][0]);
              temp++;
           }
    }
    else {
        if(first) {
            cnt = 17;
            first = false;
        }
        if(cnt < 2 || cnt >= 17) 
           cnt=17;
        let temp;
        if(cnt == 17) {
            temp = cnt-2;
            cnt -= 2;
        }
        else {
            temp = cnt-3;
            cnt -= 3;
        }
        for(j=0;j<3;j++) {
            imgClass[j].src = movieCart[temp][1];
            imgClass[j].setAttribute("alt",movieCart[temp][0]);
            temp++; 
        }
    }
}

function accordingToLang(x) {
    sessionStorage.lang = Number(x);
    x = Number(x);
    let name;
    let imgName = document.getElementsByClassName("lang-img");
    let movName = document.getElementsByClassName("mov-name");
    let movType = document.getElementsByClassName("mov-type");
    let like = document.getElementsByClassName("likes");
    let thumb = "<i class='fa fa-thumbs-up'></i>   ";
    for(i=0;i<6;i++) {
        x = Number(x);
        imgName[i].src = movieCart[x][1];
        name = movieCart[x][0];
        imgName[i].setAttribute("alt",name);
        movName[i].innerHTML = name;
        movType[i].innerHTML = movieCart[x][3];
        like[i].innerHTML = thumb + movieCart[x][2]
        x+=3;
    } 
} 


function setMovie(y) {
   sessionStorage.movieNumber = y;
}