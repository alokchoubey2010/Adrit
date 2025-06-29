async function askGroq() {
  const prompt = document.getElementById('prompt').value;
  displayMessage();
  const responseDiv = document.getElementById('response');
  
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify({
      model: "llama3-70b-8192",
      messages: [
        { role: "system", content: "You are Adrit, a smart glasses assistant built by Alok Sir. Be helpful, short, and speak like Jarvis from Iron Man.Always try to keep your responces as short as possible like 20 words or so. Use more than 20 words only if it is asked or necessary." },
        { role: "user", content: prompt }
      ],
      temperature: 0.5
    })
  });
  
  const data = await res.json();
  const reply = data.choices?.[0]?.message?.content || "No response.";
  displayReply(reply);
}

function displayMessage() {
  div = document.createElement("div");
  messages = document.querySelector(".messages");
  prompt = document.getElementById("prompt").value;
  div.className = 'sent';
  div.innerHTML = prompt;
  messages.appendChild(div)
}

function displayReply(reply){
  div = document.createElement("div");
  messages = document.querySelector(".messages");
  prompt = document.getElementById("prompt").value;
  div.className = 'recieved';
  div.innerHTML = reply;
  messages.appendChild(div)
  
  document.getElementById("prompt").innerHTML = ""
}

function getTime(){
  const now = new Date(); // Create a new Date object representing the current date and time

const time12Hour = now.toLocaleString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
});

  return time12Hour;
}


