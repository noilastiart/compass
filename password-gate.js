const pw = prompt("Enter password:");
if (pw !== "Porta") {
  document.body.innerHTML = "<h1 style='color:white;text-align:center;margin-top:40vh;'>Access denied</h1>";
  document.body.style.background = "#10141a";
  throw new Error("stopped");
}
