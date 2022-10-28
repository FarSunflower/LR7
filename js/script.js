const myMainDiv = document.createElement("div");
const input1=document.createElement("input");
const img1=document.createElement("img");
const myDiv = document.createElement("div");
const myDiv2 = document.createElement("div");
const myP = document.createElement("P");
myMainDiv.id="main";
myDiv.id="imgDiv";
myDiv2.id="textCenter";
img1.src="img/cosmos.png"
input1.id="input1";
myMainDiv.appendChild(input1);
myMainDiv.appendChild(myDiv);
myDiv.appendChild(img1);
myDiv.appendChild(myDiv2);
myMainDiv.appendChild(myP);
document.body.appendChild(myMainDiv);
img1.addEventListener('click',()=>{
   //tyt bydet massuv s kartunkamu, bydet vblburatsja sly4ainoe
   //bydet massuv s otvetamu, bydet vblburatsja sly4aino
   if(input1.value===""){
      alert('Заповніть поле');
      return 0;
   }
   let textOnImg=["Yes","No","Maybe"];
   let srcForIMg=["img/earth.png","img/mars.jpg","img/luna.png"];
   let backForMain=["radial-gradient(circle, white 0%,#1e3855 80%)","radial-gradient(circle, white 0%,#cf5e13 80%)","radial-gradient(circle, white 0%,#4c4f52 80%)"]
   let num=Math.floor(Math.random()*3);
   img1.src=srcForIMg[num];
   myMainDiv.style.background=backForMain[num];
   myDiv2.innerHTML="<br>"+textOnImg[num];
});
