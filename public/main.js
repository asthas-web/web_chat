const socket = io();
socket.on("connect", () => {
  console.log("id", socket.id);
});

const clientsTotal = document.getElementById("clients-total");
socket.on("clients-total", (data) => {
  clientsTotal.innerText = `Total clients: ${data}`;
});
