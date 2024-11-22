export function lowercaseKeys(obj: {}) {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k[0].toLowerCase() + k.slice(1), v])
    );
  }
  
  export function unEscapeHTML(htmlStr : string){
    htmlStr = htmlStr.replace(/&lt;/g , "<");     
    htmlStr = htmlStr.replace(/&gt;/g , ">");     
    htmlStr = htmlStr.replace(/&quot;/g , "\"");  
    htmlStr = htmlStr.replace(/&#39;/g , "\'");   
    htmlStr = htmlStr.replace(/&amp;/g , "&");
    htmlStr = htmlStr.replace("View this email in your browser" , "");
    return htmlStr;
  }