let WordsAndHints=[
    {
        word:"book",
        hint:"a set of written, printed, or blank sheets bound together between a front and back cover"
    },
    {
        word:"pen",
        hint:"an instrument for writing or drawing with ink, typically consisting of a metal nib or ball, or a nylon tip, fitted into a metal or plastic holder."
    },
    {
        word:"pencil",
        hint:"an instrument for writing or drawing, consisting of a thin stick of graphite or a similar substance enclosed in a long thin piece of wood or fixed in a cylindrical case."
    },
    {
        word:"bag",
        hint:"a flexible container with an opening at the top, used for carrying things."
    },
    {
        word:"sweet",
        hint:"having the pleasant taste characteristic of sugar or honey; not salt, sour, or bitter."
    }
]

let start=document.querySelector(".start")
let a=document.querySelector(".a")
let b=document.querySelector(".b")
let c=document.querySelector(".c")
let d=document.querySelector(".d")
let e=document.querySelector(".e")
let f=document.querySelector(".f")
let g=document.querySelector(".g")
let h=document.querySelector(".h")
let i=document.querySelector(".i")
let j=document.querySelector(".j")
let k=document.querySelector(".k")
let l=document.querySelector(".l")
let m=document.querySelector(".m")
let n=document.querySelector(".n")
let o=document.querySelector(".o")
let p=document.querySelector(".p")
let q=document.querySelector(".q")
let r=document.querySelector(".r")
let s=document.querySelector(".s")
let t=document.querySelector(".t")
let u=document.querySelector(".u")
let v=document.querySelector(".v")
let w=document.querySelector(".w")
let x=document.querySelector(".x")
let y=document.querySelector(".y")
let z=document.querySelector(".z")
let time=document.querySelector(".time")
let wordPart=document.querySelector(".wordPart")
let Next=document.querySelector(".Next")
let bool=true;
start.addEventListener("click",()=>{  
    let jj=1;
    a.style.boxShadow = "4px 5px 20px #bae0eb";
    b.style.boxShadow = "4px 5px 20px #bae0eb";
    c.style.boxShadow = "4px 5px 20px #bae0eb";
    d.style.boxShadow = "4px 5px 20px #bae0eb";
    e.style.boxShadow = "4px 5px 20px #bae0eb";
    f.style.boxShadow = "4px 5px 20px #bae0eb";
    g.style.boxShadow = "4px 5px 20px #bae0eb";
    h.style.boxShadow = "4px 5px 20px #bae0eb";
    i.style.boxShadow = "4px 5px 20px #bae0eb";
    j.style.boxShadow = "4px 5px 20px #bae0eb";
    k.style.boxShadow = "4px 5px 20px #bae0eb";
    l.style.boxShadow = "4px 5px 20px #bae0eb";
    m.style.boxShadow = "4px 5px 20px #bae0eb";
    n.style.boxShadow = "4px 5px 20px #bae0eb";
    o.style.boxShadow = "4px 5px 20px #bae0eb";
    p.style.boxShadow = "4px 5px 20px #bae0eb";
    q.style.boxShadow = "4px 5px 20px #bae0eb";
    r.style.boxShadow = "4px 5px 20px #bae0eb";
    s.style.boxShadow = "4px 5px 20px #bae0eb";
    t.style.boxShadow = "4px 5px 20px #bae0eb";
    u.style.boxShadow = "4px 5px 20px #bae0eb";
    v.style.boxShadow = "4px 5px 20px #bae0eb";
    w.style.boxShadow = "4px 5px 20px #bae0eb";
    x.style.boxShadow = "4px 5px 20px #bae0eb";
    y.style.boxShadow = "4px 5px 20px #bae0eb";
    z.style.boxShadow = "4px 5px 20px #bae0eb";

    wordPart.style.backgroundColor="rgb(197 184 184 / 0%)"

    let Wordlength=WordsAndHints[0].word.length;
    for(let i=0;i<Wordlength;i++){
        let findWord=document.createElement("div")
        findWord.classList.add("Letterss")
        findWord.innerHTML=WordsAndHints[0].word.split("")[i]//b o o k qaytarır
        findWord.style.color="rgb(197, 184, 184)"
        wordPart.appendChild(findWord)
    }
console.log(wordPart);




    let Score=0;
    let score=document.querySelector(".score")

  let oo=WordsAndHints[0].word.split("")

let HHHint=document.querySelector(".HHHint")
let Hint=document.querySelector(".Hint")



 function visibilit() {
    var elements = HHHint.children; 
        Hint.addEventListener("click",()=>{
            console.log(elements.length);
            if (elements.length<1) {
            let HHint=document.createElement("div")
            HHint.classList.add("HHint")
            HHint.innerHTML=`<span>Hint</span> ${WordsAndHints[0].hint}`
            HHHint.appendChild(HHint)}
        })
}
visibilit()

/////////////////////////////////////////////////
o.addEventListener("click",()=>{
    if(bool==true){
                    if((o.style.backgroundColor!="green")&&(o.style.backgroundColor!="red")){
                            o.classList.add("zz")
                            if((o.textContent==oo[0])||((WordsAndHints[0].word.includes(o.textContent))&&(o.textContent!=oo[0]))){
                                o.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(o.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("o",WordsAndHints[0].word);  
                                  }
                                //   oo.shift()
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("o").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");
                
                                    console.log(oo);
                                        Score=Score+10;
                                        score.innerHTML=`Score: ${Score}`
                                    /////////////////////////main
                                        let eelements = wordPart.children;
                                        let counting=0
                                        for(let yy=0;yy<eelements.length;yy++){
                                            if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                                counting++
                                            }
                                        }
                                        console.log(counting);
                                        if(counting==0){
                                       
                                        if(bool==true){
                                            if(jj<WordsAndHints.length){
                                            o.style.backgroundColor="aqua"
                                            a.style.backgroundColor="aqua"
                                            b.style.backgroundColor="aqua"
                                            c.style.backgroundColor="aqua"
                                            d.style.backgroundColor="aqua"
                                            e.style.backgroundColor="aqua"
                                            f.style.backgroundColor="aqua"
                                            g.style.backgroundColor="aqua"
                                            h.style.backgroundColor="aqua"
                                            i.style.backgroundColor="aqua"
                                            j.style.backgroundColor="aqua"
                                            k.style.backgroundColor="aqua"
                                            l.style.backgroundColor="aqua"
                                            m.style.backgroundColor="aqua"
                                            n.style.backgroundColor="aqua"
                                            p.style.backgroundColor="aqua"
                                            q.style.backgroundColor="aqua"
                                            r.style.backgroundColor="aqua"
                                            s.style.backgroundColor="aqua"
                                            t.style.backgroundColor="aqua"
                                            u.style.backgroundColor="aqua"
                                            v.style.backgroundColor="aqua"
                                            w.style.backgroundColor="aqua"
                                            x.style.backgroundColor="aqua"
                                            y.style.backgroundColor="aqua"
                                            z.style.backgroundColor="aqua"
                                            HHHint.innerHTML=``
                                            wordPart.innerHTML=`` 
                                            let Wordlength=WordsAndHints[jj].word.length;
                                            for(let i=0;i<Wordlength;i++){
                                            let findWord=document.createElement("div")
                                            findWord.classList.add("Letterss")
                                            findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                            findWord.style.color="rgb(197, 184, 184)"
                                            wordPart.appendChild(findWord)
                                            WordsAndHints[0]=WordsAndHints[jj]
                                            }    
                                            console.log(wordPart);
                                            jj++;
                                            }
                                            }
                                        }
                                    /////////////////////////main
                                    
                                    }
                            else{
                                o.style.backgroundColor="red"
                                    Score=Score-10;
                    score.innerHTML=`Score: ${Score}`
                            }
                    }                    
 }    
                }) 
//////////////////////////////////////////////////
a.addEventListener("click",()=>{
    if(bool==true){
                    if((a.style.backgroundColor!="green")&&(a.style.backgroundColor!="red")){
                            a.classList.add("zz")
                            if((a.textContent==oo[0])||((WordsAndHints[0].word.includes(a.textContent))&&(a.textContent!=oo[0]))){
                                a.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(a.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("a",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("a").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`     
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }
                            }
                            else{
                                a.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
b.addEventListener("click",()=>{
    if(bool==true){
                    if((b.style.backgroundColor!="green")&&(b.style.backgroundColor!="red")){
                            b.classList.add("zz")
                            if((b.textContent==oo[0])||((WordsAndHints[0].word.includes(b.textContent))&&(b.textContent!=oo[0]))){
                                b.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                        console.log(wordPart);
                                        
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(b.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("b",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("b").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`   
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }  
                            }
                            else{
                                b.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
c.addEventListener("click",()=>{
    if(bool==true){
                    if((c.style.backgroundColor!="green")&&(c.style.backgroundColor!="red")){
                            c.classList.add("zz")
                            if((c.textContent==oo[0])||((WordsAndHints[0].word.includes(c.textContent))&&(c.textContent!=oo[0]))){
                                c.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(c.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        return a;
                                      }
                                      locations("c",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("c").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}` 
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }    
                            }
                            else{
                                c.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
d.addEventListener("click",()=>{
    if(bool==true){
                    if((d.style.backgroundColor!="green")&&(d.style.backgroundColor!="red")){
                            d.classList.add("zz")
                            if((d.textContent==oo[0])||((WordsAndHints[0].word.includes(d.textContent))&&(d.textContent!=oo[0]))){
                                d.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(d.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("d",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("d").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`  
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }   
                            }
                            else{
                                d.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
e.addEventListener("click",()=>{
    if(bool==true){
                    if((e.style.backgroundColor!="green")&&(e.style.backgroundColor!="red")){
                            e.classList.add("zz")
                            if((e.textContent==oo[0])||((WordsAndHints[0].word.includes(e.textContent))&&(e.textContent!=oo[0]))){
                                e.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(e.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("e",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("e").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`   
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }  
                            }
                            else{
                                e.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
f.addEventListener("click",()=>{
    if(bool==true){
                    if((f.style.backgroundColor!="green")&&(f.style.backgroundColor!="red")){
                            f.classList.add("zz")
                            if((f.textContent==oo[0])||((WordsAndHints[0].word.includes(f.textContent))&&(f.textContent!=oo[0]))){
                                f.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(f.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("f",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("f").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`     
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }
                            }
                            else{
                                f.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
g.addEventListener("click",()=>{
    if(bool==true){
                    if((g.style.backgroundColor!="green")&&(g.style.backgroundColor!="red")){
                            g.classList.add("zz")
                            if((g.textContent==oo[0])||((WordsAndHints[0].word.includes(g.textContent))&&(g.textContent!=oo[0]))){
                                g.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(g.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("g",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("g").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`  
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }   
                            }
                            else{
                                g.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
h.addEventListener("click",()=>{
    if(bool==true){
                    if((h.style.backgroundColor!="green")&&(h.style.backgroundColor!="red")){
                            h.classList.add("zz")
                            if((h.textContent==oo[0])||((WordsAndHints[0].word.includes(h.textContent))&&(h.textContent!=oo[0]))){
                                h.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(h.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("h",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("h").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`  
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }   
                            }
                            else{
                                h.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
i.addEventListener("click",()=>{
    if(bool==true){
                    if((i.style.backgroundColor!="green")&&(i.style.backgroundColor!="red")){
                            i.classList.add("zz")
                            if((i.textContent==oo[0])||((WordsAndHints[0].word.includes(i.textContent))&&(i.textContent!=oo[0]))){
                                i.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(i.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("i",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("i").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`   
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }  
                            }
                            else{
                                i.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
j.addEventListener("click",()=>{
    if(bool==true){
                    if((j.style.backgroundColor!="green")&&(j.style.backgroundColor!="red")){
                            j.classList.add("zz")
                            if((j.textContent==oo[0])||((WordsAndHints[0].word.includes(j.textContent))&&(j.textContent!=oo[0]))){
                                j.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(a.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("j",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("j").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`  
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }   
                            }
                            else{
                                j.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
k.addEventListener("click",()=>{
    if(bool==true){
                    if((k.style.backgroundColor!="green")&&(k.style.backgroundColor!="red")){
                            k.classList.add("zz")
                            if((k.textContent==oo[0])||((WordsAndHints[0].word.includes(k.textContent))&&(k.textContent!=oo[0]))){
                                k.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(k.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("k",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("k").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }     
                            }
                            else{
                                k.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
l.addEventListener("click",()=>{
    if(bool==true){
                    if((l.style.backgroundColor!="green")&&(l.style.backgroundColor!="red")){
                            l.classList.add("zz")
                            if((l.textContent==oo[0])||((WordsAndHints[0].word.includes(l.textContent))&&(l.textContent!=oo[0]))){
                                l.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(l.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("l",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("l").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }     
                            }
                            else{
                                l.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
m.addEventListener("click",()=>{
    if(bool==true){
                    if((m.style.backgroundColor!="green")&&(m.style.backgroundColor!="red")){
                            m.classList.add("zz")
                            if((m.textContent==oo[0])||((WordsAndHints[0].word.includes(m.textContent))&&(m.textContent!=oo[0]))){
                                m.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(a.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("m",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("m").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}` 
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }    
                            }
                            else{
                                m.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
n.addEventListener("click",()=>{
    if(bool==true){
                    if((n.style.backgroundColor!="green")&&(n.style.backgroundColor!="red")){
                            n.classList.add("zz")
                            if((n.textContent==oo[0])||((WordsAndHints[0].word.includes(n.textContent))&&(n.textContent!=oo[0]))){
                                n.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(n.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("n",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("n").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}` 
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }    
                            }
                            else{
                                n.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
z.addEventListener("click",()=>{
    if(bool==true){
                    if((z.style.backgroundColor!="green")&&(z.style.backgroundColor!="red")){
                            z.classList.add("zz")
                            if((z.textContent==oo[0])||((WordsAndHints[0].word.includes(z.textContent))&&(z.textContent!=oo[0]))){
                                z.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(z.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("z",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("z").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }     
                            }
                            else{
                                z.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
t.addEventListener("click",()=>{
    if(bool==true){
                    if((t.style.backgroundColor!="green")&&(t.style.backgroundColor!="red")){
                            t.classList.add("zz")
                            if((t.textContent==oo[0])||((WordsAndHints[0].word.includes(t.textContent))&&(t.textContent!=oo[0]))){
                                t.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(t.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("t",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("t").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`     
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }
                            }
                            else{
                                t.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
p.addEventListener("click",()=>{
    if(bool==true){
                    if((p.style.backgroundColor!="green")&&(p.style.backgroundColor!="red")){
                            p.classList.add("zz")
                            if((p.textContent==oo[0])||((WordsAndHints[0].word.includes(p.textContent))&&(p.textContent!=oo[0]))){
                                p.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(p.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("p",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("p").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`    
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                } 
                            }
                            else{
                                p.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
q.addEventListener("click",()=>{
    if(bool==true){
                    if((q.style.backgroundColor!="green")&&(q.style.backgroundColor!="red")){
                            q.classList.add("zz")
                            if((q.textContent==oo[0])||((WordsAndHints[0].word.includes(a.textContent))&&(q.textContent!=oo[0]))){
                                q.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(q.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("q",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("q").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`  
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }   
                            }
                            else{
                                q.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
r.addEventListener("click",()=>{
    if(bool==true){
                    if((r.style.backgroundColor!="green")&&(r.style.backgroundColor!="red")){
                            r.classList.add("zz")
                            if((r.textContent==oo[0])||((WordsAndHints[0].word.includes(r.textContent))&&(r.textContent!=oo[0]))){
                                r.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(r.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("r",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("r").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`     
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }
                            }
                            else{
                                r.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
s.addEventListener("click",()=>{
    if(bool==true){
                    if((s.style.backgroundColor!="green")&&(s.style.backgroundColor!="red")){
                            s.classList.add("zz")
                            if((s.textContent==oo[0])||((WordsAndHints[0].word.includes(s.textContent))&&(s.textContent!=oo[0]))){
                                s.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(s.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("s",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("s").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}` 
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }    
                            }
                            else{
                                s.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
u.addEventListener("click",()=>{
    if(bool==true){
                    if((u.style.backgroundColor!="green")&&(u.style.backgroundColor!="red")){
                            u.classList.add("zz")
                            if((u.textContent==oo[0])||((WordsAndHints[0].word.includes(u.textContent))&&(u.textContent!=oo[0]))){
                                u.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(u.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("u",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("u").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`   
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }  
                            }
                            else{
                                u.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
v.addEventListener("click",()=>{
    if(bool==true){
                    if((v.style.backgroundColor!="green")&&(v.style.backgroundColor!="red")){
                            v.classList.add("zz")
                            if((v.textContent==oo[0])||((WordsAndHints[0].word.includes(v.textContent))&&(v.textContent!=oo[0]))){
                                v.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(v.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("v",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("v").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                               
                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }     
                            }
                            else{
                                v.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
w.addEventListener("click",()=>{
    if(bool==true){
                    if((w.style.backgroundColor!="green")&&(w.style.backgroundColor!="red")){
                            w.classList.add("zz")
                            if((w.textContent==oo[0])||((WordsAndHints[0].word.includes(w.textContent))&&(w.textContent!=oo[0]))){
                                w.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(w.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("w",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("w").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                               
                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}` 
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }    
                            }
                            else{
                                w.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
//////////////////////////////////////////////////
x.addEventListener("click",()=>{
    if(bool==true){
                    if((x.style.backgroundColor!="green")&&(x.style.backgroundColor!="red")){
                            x.classList.add("zz")
                            if((x.textContent==oo[0])||((WordsAndHints[0].word.includes(x.textContent))&&(x.textContent!=oo[0]))){
                                x.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(x.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("x",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("x").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);

                                
                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`  
                                let eelements = wordPart.children;
                                let counting=0
                                for(let yy=0;yy<eelements.length;yy++){
                                    if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                        counting++
                                    }
                                }
                                console.log(counting);
                                if(counting==0){
                                if(bool==true){
                                    if(jj<WordsAndHints.length){
                                    o.style.backgroundColor="aqua"
                                    a.style.backgroundColor="aqua"
                                    b.style.backgroundColor="aqua"
                                    c.style.backgroundColor="aqua"
                                    d.style.backgroundColor="aqua"
                                    e.style.backgroundColor="aqua"
                                    f.style.backgroundColor="aqua"
                                    g.style.backgroundColor="aqua"
                                    h.style.backgroundColor="aqua"
                                    i.style.backgroundColor="aqua"
                                    j.style.backgroundColor="aqua"
                                    k.style.backgroundColor="aqua"
                                    l.style.backgroundColor="aqua"
                                    m.style.backgroundColor="aqua"
                                    n.style.backgroundColor="aqua"
                                    p.style.backgroundColor="aqua"
                                    q.style.backgroundColor="aqua"
                                    r.style.backgroundColor="aqua"
                                    s.style.backgroundColor="aqua"
                                    t.style.backgroundColor="aqua"
                                    u.style.backgroundColor="aqua"
                                    v.style.backgroundColor="aqua"
                                    w.style.backgroundColor="aqua"
                                    x.style.backgroundColor="aqua"
                                    y.style.backgroundColor="aqua"
                                    z.style.backgroundColor="aqua"
                                    HHHint.innerHTML=``
                                    wordPart.innerHTML=`` 
                                    let Wordlength=WordsAndHints[jj].word.length;
                                    for(let i=0;i<Wordlength;i++){
                                    let findWord=document.createElement("div")
                                    findWord.classList.add("Letterss")
                                    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                    findWord.style.color="rgb(197, 184, 184)"
                                    wordPart.appendChild(findWord)
                                    WordsAndHints[0]=WordsAndHints[jj]
                                    }    
                                    console.log(wordPart);
                                    jj++;
                                    }
                                    }
                                }   
                            }
                            else{
                                x.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 
y.addEventListener("click",()=>{
    if(bool==true){
                    if((y.style.backgroundColor!="green")&&(y.style.backgroundColor!="red")){
                            y.classList.add("zz")
                            if((y.textContent==oo[0])||((WordsAndHints[0].word.includes(y.textContent))&&(y.textContent!=oo[0]))){
                                y.style.backgroundColor="green";
                                function visibility(n) {
                                    var elements = wordPart.children; 
                                    for (var p = 0; p <= elements.length; p++) {
                                      if (n === p) {
                                        elements[p].style.color="black"
                                      }
                                    }
                                  }
                                  if(WordsAndHints[0].word.includes(y.textContent)){
                                    function locations(substring,string){
                                        var a=[],i=-1;
                                        while((i=string.indexOf(substring,i+1)) >= 0){ 
                                            a.push(i)
                                            visibility(i)
                                        }
                                            Score=Score+(a.length-1)*10;
                                            score.innerHTML=`Score: ${Score}`
                                        
                                        return a;
                                      }
                                      locations("y",WordsAndHints[0].word);  
                                  }
                                function removeCharacter() {
                                    let ss=String(WordsAndHints[0].word.split(""))
                                    ss = ss.split(",").join("");
                                    console.log(ss);
                                    return ss;
                                }
                                removeCharacter();
                                let ssss=removeCharacter();
                                function removeCharacte() {
                                    ssss = ssss.split("y").join("");
                                    console.log(ssss);
                                    return ssss;
                                }
                                oo=removeCharacte().split("");               
                                    console.log(oo);
                                    let eelements = wordPart.children;
                                    let counting=0
                                    for(let yy=0;yy<eelements.length;yy++){
                                        if(eelements[yy].getAttributeNode("style").value.split(": ")[1].split(";")[0]=="rgb(197, 184, 184)"){
                                            counting++
                                        }
                                    }
                                    console.log(counting);
                                    if(counting==0){
                                    if(bool==true){
                                        if(jj<WordsAndHints.length){
                                        o.style.backgroundColor="aqua"
                                        a.style.backgroundColor="aqua"
                                        b.style.backgroundColor="aqua"
                                        c.style.backgroundColor="aqua"
                                        d.style.backgroundColor="aqua"
                                        e.style.backgroundColor="aqua"
                                        f.style.backgroundColor="aqua"
                                        g.style.backgroundColor="aqua"
                                        h.style.backgroundColor="aqua"
                                        i.style.backgroundColor="aqua"
                                        j.style.backgroundColor="aqua"
                                        k.style.backgroundColor="aqua"
                                        l.style.backgroundColor="aqua"
                                        m.style.backgroundColor="aqua"
                                        n.style.backgroundColor="aqua"
                                        p.style.backgroundColor="aqua"
                                        q.style.backgroundColor="aqua"
                                        r.style.backgroundColor="aqua"
                                        s.style.backgroundColor="aqua"
                                        t.style.backgroundColor="aqua"
                                        u.style.backgroundColor="aqua"
                                        v.style.backgroundColor="aqua"
                                        w.style.backgroundColor="aqua"
                                        x.style.backgroundColor="aqua"
                                        y.style.backgroundColor="aqua"
                                        z.style.backgroundColor="aqua"
                                        HHHint.innerHTML=``
                                        wordPart.innerHTML=`` 
                                        let Wordlength=WordsAndHints[jj].word.length;
                                        for(let i=0;i<Wordlength;i++){
                                        let findWord=document.createElement("div")
                                        findWord.classList.add("Letterss")
                                        findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
                                        findWord.style.color="rgb(197, 184, 184)"
                                        wordPart.appendChild(findWord)
                                        WordsAndHints[0]=WordsAndHints[jj]
                                        }    
                                        console.log(wordPart);
                                        jj++;
                                        }
                                        }
                                    }  
                               
                                Score=Score+10;
                                score.innerHTML=`Score: ${Score}`     
                            }
                            else{
                                y.style.backgroundColor="red"
                                Score=Score-10;
                                score.innerHTML=`Score: ${Score}`
                            }
                    }                    
                    }    
                }) 



    
    


 
    Next.addEventListener("click",()=>{
    if(bool==true){
    if(jj<WordsAndHints.length){
    o.style.backgroundColor="aqua"
    a.style.backgroundColor="aqua"
    b.style.backgroundColor="aqua"
    c.style.backgroundColor="aqua"
    d.style.backgroundColor="aqua"
    e.style.backgroundColor="aqua"
    f.style.backgroundColor="aqua"
    g.style.backgroundColor="aqua"
    h.style.backgroundColor="aqua"
    i.style.backgroundColor="aqua"
    j.style.backgroundColor="aqua"
    k.style.backgroundColor="aqua"
    l.style.backgroundColor="aqua"
    m.style.backgroundColor="aqua"
    n.style.backgroundColor="aqua"
    p.style.backgroundColor="aqua"
    q.style.backgroundColor="aqua"
    r.style.backgroundColor="aqua"
    s.style.backgroundColor="aqua"
    t.style.backgroundColor="aqua"
    u.style.backgroundColor="aqua"
    v.style.backgroundColor="aqua"
    w.style.backgroundColor="aqua"
    x.style.backgroundColor="aqua"
    y.style.backgroundColor="aqua"
    z.style.backgroundColor="aqua"
    HHHint.innerHTML=``
    wordPart.innerHTML=`` 
    let Wordlength=WordsAndHints[jj].word.length;
    for(let i=0;i<Wordlength;i++){
    let findWord=document.createElement("div")
    findWord.classList.add("Letterss")
    findWord.innerHTML=WordsAndHints[jj].word.split("")[i]//b o o k qaytarır
    findWord.style.color="rgb(197, 184, 184)"
    wordPart.appendChild(findWord)
    WordsAndHints[0]=WordsAndHints[jj]
    }    
    console.log(wordPart);
    jj++;
    }
    }})
///////////////////////////////////////////////////
    time.style.backgroundColor="#3ec83e"
    time.innerHTML= `Time 30`
    let count=29;
    const setayar=setInterval(()=>{   
        if(count>=0){        
            time.innerHTML=`Time ${count--}`
        }
        else{
            clearInterval(setayar);
            time.style.backgroundColor="red"
            time.style.fontSize="12px"
            time.style.fontWeight="900"
            time.innerHTML= `Time is up`
            a.style.removeProperty("box-shadow");
            b.style.removeProperty("box-shadow");
            c.style.removeProperty("box-shadow");
            d.style.removeProperty("box-shadow");
            e.style.removeProperty("box-shadow");
            f.style.removeProperty("box-shadow");
            g.style.removeProperty("box-shadow");
            h.style.removeProperty("box-shadow");
            i.style.removeProperty("box-shadow");
            j.style.removeProperty("box-shadow");
            k.style.removeProperty("box-shadow");
            l.style.removeProperty("box-shadow");
            m.style.removeProperty("box-shadow");
            n.style.removeProperty("box-shadow");
            o.style.removeProperty("box-shadow");
            p.style.removeProperty("box-shadow");
            q.style.removeProperty("box-shadow");
            r.style.removeProperty("box-shadow");
            s.style.removeProperty("box-shadow");
            t.style.removeProperty("box-shadow");
            u.style.removeProperty("box-shadow");
            v.style.removeProperty("box-shadow");
            w.style.removeProperty("box-shadow");
            x.style.removeProperty("box-shadow");
            y.style.removeProperty("box-shadow");
            z.style.removeProperty("box-shadow");
            bool=false
            alert("Time is up. Please refresh page to play again")
        }        
    }, 1000);

    
},{once : true})//{once : true} addEventListener bir dəfə işlənməsi üçündür

