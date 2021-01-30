document
	.getElementById("firstClass-add")
	.addEventListener("click", function () {
		ticketCountCalculation("firstClass", true);
	});
document
	.getElementById("firstClass-delete")
	.addEventListener("click", function () {
		ticketCountCalculation("firstClass", false);
	});
document.getElementById("economy-add").addEventListener("click", function () {
	ticketCountCalculation("economy", true);
});
document
	.getElementById("economy-delete")
	.addEventListener("click", function () {
		ticketCountCalculation("economy", false);
	});

function ticketCountCalculation(ticket, isTrue) {
	const ticketInput = document.getElementById(ticket + "-count");
	const ticketCount = parseInt(ticketInput.value);
	let ticketNewCount = ticketCount;
	if (isTrue) {
		ticketNewCount = ticketCount + 1;
	} else if (!isTrue && ticketNewCount > 0) {
		ticketNewCount = ticketCount - 1;
	}
	ticketInput.value = ticketNewCount;
	calculateTotal();
}

function calculateTotal() {
	const firstClassTicket = getCountValue("firstClass");
	const economyTicket = getCountValue("economy");
	const subTotalAmount = firstClassTicket * 150 + economyTicket * 100;
	const vatAmount = subTotalAmount * 0.1;
	const totalAmount = subTotalAmount + vatAmount;
	document.getElementById("sub-total").innerText = subTotalAmount;
	document.getElementById("vat-amount").innerText = vatAmount;
	document.getElementById("total-amount").innerText = totalAmount;
}

function getCountValue(ticket) {
	const ticketInput = document.getElementById(ticket + "-count");
	const ticketCount = parseInt(ticketInput.value);
	return ticketCount;
}

document.getElementById("book-now").addEventListener("click", function () {
	const slideFirstClass = getCountValue("firstClass");
    const slideEconomy = getCountValue("economy");

	const slideSubTotalAmount = slideFirstClass * 150 + slideEconomy * 100;
	const slideVatAmount = slideSubTotalAmount * 0.1;
	const slideTotalAmount = slideSubTotalAmount + slideVatAmount;
    console.log(slideSubTotalAmount,slideVatAmount,slideTotalAmount);
    
    document.getElementById('slide-first-count').innerText = slideFirstClass;
    document.getElementById('slide-economy-count').innerText = slideEconomy;
	document.getElementById("slideSub-total").innerText = slideSubTotalAmount;
	document.getElementById("slideVat-amount").innerText = slideVatAmount;
    document.getElementById("slideTotal-amount").innerText = slideTotalAmount;
    
    const flyingForm = document.getElementById('flying-form').value;
    document.getElementById('form-location').innerText = flyingForm;

    const flyingTo = document.getElementById('flying-to').value;
    document.getElementById('to-location').innerText = flyingTo;

    const departureTime = document.getElementById('departure-time').value;
    document.getElementById('form-date').innerText = departureTime;

    const returnTime = document.getElementById('return-time').value;
    document.getElementById('to-date').innerText = returnTime;


});
