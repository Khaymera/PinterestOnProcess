
    window.onscroll = () => {

        if (window.pageYOffset >= 150){
            let fakeMenu = document.querySelector("#fakeHeader");
            fakeMenu.style.top = "0px";
            fakeMenu.style.position = "fixed";
            fakeMenu.style.opacity = "1";
        }else{
            let fakeMenu = document.querySelector("#fakeHeader");
            fakeMenu.style.top = "-75px";
            fakeMenu.style.position = "fixed";
            fakeMenu.style.opacity = "0";
        }
    }
