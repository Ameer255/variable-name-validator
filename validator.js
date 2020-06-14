function check(){
    
    var a=document.getElementById("var-name");
    var b=document.getElementById("output");
    var c=a.value;
    
    
    var key;
    var x="5";
    var i;
    var k=0;
    var ch;
    
      key = ["abstract", "arguments",	"await",	"boolean","break",	"byte",	"case",	"catch", "char",	"class*",	"const",	"continue","debugger",	"default",	"delete"	,"do",
             "double",	"else",	"enum*",	"eval", "export",	"extends",	"false	final", "finally",	"float",	"for",	"function", "goto",	"if",	"implements",	"import",
             "in",	"instanceof",	"int",	"interface","let*",	"long",	"native",	"new", "null",	"package",	"private",	"protected", "public",	"return",	"short",	"static",
             "super",	"switch",	"synchronized",	"this", "throw",	"throws",	"transient",	"true", "try",	"typeof",	"var",	"void", "volatile",	"while",	"with",	"yield" ];
      
    var l=key.keys();
    
    for ( i of l)
    {
        if (c== key[i])
        k = 1;
        x="8";
        
        if(x=="8" && key[i]!=c){
          b.style.color=" rgb(3, 156, 24)";
        b.innerHTML="<h2>"+c+"</h2>"+"<h2>"+"It's a valid variable name </h2> ";
        
        }
        
    }
    
    if(k==1)
    {
      b.style.color="red";
        b.innerHTML="<h2>"+c+"</h2>"+"<h2>"+"Invalid.! Keyword cannot be a variable name </h2>";
    }
    
    
    
    if(c.charCodeAt(0)>=48&&c.charCodeAt(0)<=57)
    {
      x="6";
        b.style.color="red";
        b.innerHTML="<h2>"+c+"</h2>"+"<h2>"+"Invalid.! Variable name cannot start with number</h2>";
        
    }
       
    i=0;
    ch=c[i];
    while(i<c.length)
    {
    ch=c.charCodeAt(i);
    
    if((ch>=32 && ch<=47) || (ch>=58 &&ch<=64) || (ch>=91 && ch<=96 && ch!=95 ) || (ch>=123 &&ch<=126) )
    {
    	x="6";
    	i++;
      b.style.color="red";
    	
        b.innerHTML="<h2>"+c+"</h2>"+"<h2>"+"Invalid.! variable name can not contain special characters</h2>";
    }
    
  else  {
      
        i++;
        continue;
      
  }
    
}


}

