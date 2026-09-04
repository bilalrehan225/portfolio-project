let changebtn = document.querySelector(".changebtn");

        let usernamee = document.querySelector(".usernamee");
        
        // Check if name is already saved in browser storage
        let userinput = localStorage.getItem("portfolio_username");
      
        changebtn.onclick = function(){
            localStorage.removeItem("portfolio_username");
            localStorage.removeItem("portfolio_userage");
            window.location.reload();
        }

        if (!userinput) {
            userinput = prompt("👋 Welcome! Let's personalize your experience. What's your real name?");
            if (!userinput || userinput.trim() === "") {
                userinput = "Visitor";
            }
            localStorage.setItem("portfolio_username", userinput);
        }
        usernamee.textContent = "Welcome, " + userinput;

        // Check if age is already saved
        let userage = localStorage.getItem("portfolio_userage");
        
        if (!userage) {
            userage = prompt("📊 Quick check: How old are you? (We'll calculate voting eligibility in the console!)");
            if (!userage || userage.trim() === "") {
                userage = "18"; // default fallback
            }
            localStorage.setItem("portfolio_userage", userage);
            alert("🚀 All set! Press F12 or Right Click -> Inspect and open the 'Console' tab to view your customized JavaScript results!");
        }

        // Logic processing
        if (userage >= 18){
            console.log("You Are Eligible To Vote !!! " + `${(userage)}` + " Years Old");
        } else if (userage < 0) {
            console.log("Age Can't be below zero");
        } else if (userage == "") {
            console.log("Age cant't be in Blank");
        } else if (isNaN(userage)) {
            console.log("Age cant't be in alphabets");
        } else {
            console.log("You Are Not Eligible To Vote !!! "  + `${(userage)}` + " Years Old");
        }

        var A = 19;
        var B = 2;
        console.log("A = 19");
        console.log("B = 2");
        console.log("A * B = " + A*B);
        console.log("This A While LOOP ");
        let a = 1;
        let num = 9;
        while (a < 11) {
           console.log(num + "×" + a + "=" + num*a);
            a += 1;
        }
        console.log("All JavaScript Basis Work Done");
