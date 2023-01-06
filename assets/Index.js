var small_menu = document.querySelector(".small_menu");
        var menu = document.querySelector(".menu");
        small_menu.onclick = function(){
            small_menu.classList.toggle('active');
            menu.classList.toggle('small');
        }
        
        const textAnim = document.querySelector(".barry");

new Typewriter(textAnim, {
  loop: true,
  deletespeed: 1000
})
.changeDelay(100)
.typeString('<strong style="color:#fef5f1" >Salut !!!</strong>')
.pauseFor(3000)
.deleteChars(9)
.typeString('<strong style="color:#fef5f1" >Moi c\'est Barry Bello : </strong >')
.pauseFor(3000)
.typeString('<strong style="color:#fef5f1" >Développeur Full-stack </strong> !')
.pauseFor(3000)
.deleteChars(25)
.typeString('<strong style="color:#fef5f1">Mon expertise: </strong>')
.pauseFor(3000)
.typeString('<span style="color:#ff5900"> html/css</span> !')
.pauseFor(3000)
.deleteChars(10)
.typeString('<span style="color:#ffbf00"> JavaScript</span> !')
.pauseFor(3000)
.deleteChars(12)
.typeString('<span style="color:#b6b2fb"> React</span> !')
.pauseFor(3000)
.deleteChars(7)
.typeString('<span style="color:#00ff0b">  python</span> !')
.pauseFor(3000)
.deleteChars(8)
.start()