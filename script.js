
// Placeholder for future chat / MCP integration
console.log("AadaabJax site loaded");

// Example function to call a chat API (to be implemented later)
async function sendChatMessage(message){
  // POST to /api/chat on your backend that proxies to MCP or Claude
  try{
    const res = await fetch('/api/chat', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({message})
    });
    const data = await res.json();
    return data;
  }catch(e){
    console.error('Chat API error', e);
    return {error: true};
  }
}

function openTab(evt, name){
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for(i=0;i<tabcontent.length;i++) tabcontent[i].style.display="none";
  tablinks = document.getElementsByClassName("tablink");
  for(i=0;i<tablinks.length;i++) tablinks[i].className = tablinks[i].className.replace(" active","");
  document.getElementById(name).style.display="block";
  evt.currentTarget.className += " active";
}

