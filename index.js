"use strict";

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchGetDogButton();
});

function getUserInput() {
  let someBreed = $("#get-dog-breed").val();
  return someBreed;
}

function watchGetDogButton() {
  $("#form-input").submit(e => {
    e.preventDefault();
    getDogImage();
  });
}

function getDogImage() {
  fetch("https://dog.ceo/api/breed/" + getUserInput() + "/images/random")
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("Hmmm. Cannot find that breed of dog. Try again."));
}

function displayResults(responseJson) {
  console.log(responseJson);
  if (responseJson.status !== "success") {
    alert("Hmmm. Cannot find that breed of dog. Try again.");
  } else if (responseJson.status === "success") {
    $(".results").replaceWith(
      `<img src="${responseJson.message}" class="results">`
    );
    $(".results").removeClass("hidden");
  }
}
