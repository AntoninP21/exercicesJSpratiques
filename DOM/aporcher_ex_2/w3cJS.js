debugger;
    console.log("start")
    let mainDiv = document.createElement('div');
    
    
    let strong = document.createElement('strong');
    let p1= document.createTextNode("Le");
    let para = document.createElement('span');
    strong.appendChild(para);
    let s1= document.createTextNode(" World Wide Web Consortium");
    para.appendChild(s1);
    

    let p2= document.createTextNode(", abrégé par le sigle");
    let strong2 = document.createElement('strong');
    let s2= document.createTextNode(" W3C");
    strong2.appendChild(s2);
    

    let p3= document.createTextNode(", est un");
    
    let linkdiv= document.createElement("a");
    linkdiv.title=" Organisme de normalisation"
    linkdiv.href="http://fr.wikipedia.org/wiki/Organisme_de_normalisaton"
    
    let s3=document.createTextNode(" organisme de standardisation");
    linkdiv.appendChild(s3);

    let p4= document.createTextNode(" à but non-lucratif chargé de promouvoir la compatibilité des technologies du");
    
    let linkdiv2=document.createElement("a");
    linkdiv2.title="World Wide Web";
    linkdiv2.href="http://fr.wikipedia.org/wiki/World_Wide_Web";
    
    let s4=document.createTextNode(" World Wide Web.");
    linkdiv2.appendChild(s4);
    
    
    mainDiv.appendChild(p1);
    
    mainDiv.appendChild(strong);
    mainDiv.appendChild(p2);
    mainDiv.appendChild(strong2);
    mainDiv.appendChild(p3);
    mainDiv.appendChild(linkdiv)
    mainDiv.appendChild(p4);
    mainDiv.appendChild(linkdiv2);
    document.body.appendChild(mainDiv);





    
