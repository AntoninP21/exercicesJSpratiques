debugger;
    function isPalindromic(sentence){
        sentence=sentence.replace(/\s+/g, '');
        sentence=sentence.replace(/é/gi, 'e')
        sentence=sentence.replace(/è/gi, 'e')
        sentence=sentence.replace(/ê/gi, 'e')
        sentence=sentence.replace(/à/gi, 'a')
        sentence=sentence.toUpperCase();

       let letResult= sentence;

        poliTab =[];
        for (i=0; i<sentence.length; i++) {
        poliTab[i]=sentence[i];
        }
        let tabSave=poliTab.reverse();
        result=""
        for(i=0; i< tabSave.length;i++){
        result=result+tabSave[i]
        }
    if (result==letResult){
        return "1"
    }
    else{
        return "0"
    }
    }