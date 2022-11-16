var preloader = document.getElementById("preload");
setTimeout( () =>{
       window.preloader.style.display = 'none';
}, 1000)       
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if(prevScrollpos > currentScrollPos) {
            document.getElementById("nav").style.top = "0";
        }else{
            document.getElementById("nav").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
      }

 const menuPush = () => {
    document.getElementById("sidenav").style.width = "300px";
      }

      const menuStop = () => {
        document.getElementById("sidenav").style.width = 0;
          }