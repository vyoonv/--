const apply = document.getElementById("apply");

            const width = document.getElementById("width");
            const height = document.getElementById("height");
            const fntsize = document.getElementById("fntsize");
            const fntcolor = document.getElementById("fntcolor");
            const bgcolor = document.getElementById("bgcolor");
            const normal = document.getElementById("normal");
            const bold = document.getElementById("bold");
            const left = document.getElementById("left");
            const cntr = document.getElementById("cntr");
            const right = document.getElementById("right");
            const up = document.getElementById("up");
            const down = document.getElementById("down");
            const cent = document.getElementById("cent");
            
            const result = document.getElementById("result");

            

            apply.addEventListener("click", () => {
                result.style.width = width.value + "px";
                result.style.height = height.value + "px";
                result.style.fontSize = fntsize.value + "px";
                result.style.color = fntcolor.value;
                result.style.backgroundColor = bgcolor.value;  

                const p = document.createElement("p");
                p.innerText = inputtxt.value;
                p.setAttribute("style", inputtxt.getAttribute("style"));
                result.append(p);        

            });

            const weightList = document.querySelectorAll("weight");
            // const aliList = document.querySelectorAll("ali");
            // const alignList = document.querySelectorAll("align"); 

            // document.getElementById('apply').onclick = () => { 
                
            //     // var selected = document.querySelector('input[type=radio][weightList[0]]:checked');
            //     // result.style.fontWeight = normal; 
            //     // console.log
            //     // var selected = document.querySelector('input[type=radio][weightList[1]]:checked');
            //     // result.style.fontWeight = bold; 
            //     // var selected = document.querySelector('input[type=radio][aliList[0]]:checked');
            //     // result.style.textAlign = left;
            //     // var selected = document.querySelector('input[type=radio][aliList[1]]:checked');
            //     // result.style.textAlign = center;
            //     // var selected = document.querySelector('input[type=radio][aliList[2]]:checked');
            //     // result.style.textAlign = right;
            //     // var selected = document.querySelector('input[type=radio][alignList[0]]:checked');
            //     // result.style.verticalAlign = up;
            //     // var selected = document.querySelector('input[type=radio][alignList[1]]:checked');
            //     // result.style.verticalAlign = center;
            //     // var selected = document.querySelector('input[type=radio][alignList[2]]:checked');
            //     // result.style.verticalAlign = down;

                
            // }

            apply.addEventListener("click", ()=>{
                $("input:radio[name=weight]").click(()=>{
                    if($("input[name=weight]:checked").val()=="normal"){
                        result.style.fontWeight = normal; 
                    } else if($('input[name=weight]:checked').val()=="bold"){
                        result.style.fontWeight = bold; 
                    }
                });
            });