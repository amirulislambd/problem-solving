const tickets = [
  { destination: "Cox's Bazar", price: 1000, status: "available" },
  { destination: "Sylhet", price: 800, status: "booked" },
  { destination: "Rajshahi", price: 700, status: "available" },
];

function updateTicket(tickets) {
  const updateTCK = [];
  for (let ticket of tickets) {
    if (ticket.status === "available") {
      const add20pr = ticket.price * 20;
      const total = add20pr / 100;
      ticket.price += total;
    }
    let update = {};
    for (let key in ticket) {
      update[key] = ticket[key];
      update.statusMessage = "Update Success";
    }
    updateTCK.push(update);
  }
  return updateTCK;
}
const update = updateTicket(tickets);
console.log(update);
