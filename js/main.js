function submitForm() {
  var form = document.getElementById("orderForm");
  var formData = new FormData(form);

  // Additional data processing before sending (if necessary)

  // Sending data to the server (in this case, just outputting a message)
  displayResponseMessage("Salam sizinlə ən kısa zamanda əlaqe saxlanılacaq bizi secdiyiniz üçün təşəkkürlər.😊");
}

function displayResponseMessage(message) {
  var responseMessageContainer = document.getElementById("responseMessage");
  responseMessageContainer.textContent = message;
}