var XMLHttpRequestObject = false; 

      if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
      }

      function getData(dataSource, divID) 
      { 
        if(XMLHttpRequestObject) {
          var obj = document.getElementById(divID); 
		  obj.innerHTML = "<center><p><p><p><img src='bigrotation2.gif' border='0' align='absmiddle'></center>";
          XMLHttpRequestObject.open("GET", dataSource); 

          XMLHttpRequestObject.onreadystatechange = function() 
          { 
            if (XMLHttpRequestObject.readyState == 4 && 
              XMLHttpRequestObject.status == 200) { 
                obj.innerHTML = XMLHttpRequestObject.responseText; 
            } 
          } 

          XMLHttpRequestObject.send(null);  
        }
      }
;
