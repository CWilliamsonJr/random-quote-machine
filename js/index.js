"use strict";
//"esversion: 6";
 require('../css/style.css');

let quoteApi = 'https://andruxnet-random-famous-quotes.p.mashape.com/';
let requestObj = {
  url: quoteApi, // Where to retrive the quote
  type: "Get",
  beforeSend: function(xhr) { // Sending Headers needed for the api request
    xhr.setRequestHeader("X-Mashape-Key", "GLrO1Wam6rmsh36WREqRoCBbpTvKp1U2u46jsn1LhbmJOEy7Zp");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Accept", "application/json");
  },
  success: DisplayQuote,
  dataType: "json", // data type of the retrived file
};

$(document).ready(function() { // runs when the page is loaded
  let color;
  color = GetColor(color);
  GetQuote();

  $("body").css("background-color", color);

});
$("#new_quote").click(function() { // Gets new Quote on click.
  let color;
   color = GetColor(color);
  GetQuote();
  $("body").css("background-color", color);

});

function DisplayQuote(quoteObj) { // Displays the quote.
  let quoteText = quoteObj.quote;
  let quoteAuthor = quoteObj.author;
  $("#quote").html(quoteText).addClass("h3");
  $("#author").html(quoteAuthor);
  $("#tweet_btn").attr("href", "https://twitter.com/intent/tweet?text=" + quoteText + "%0a--- " + quoteAuthor);
}

function GetColor(color) { // Generates a Random hex Color
  color = "#";
  const colorSelectArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  let num;
  for (let i = 0; i <= 5; i++) {
    num = Math.floor(Math.random() * colorSelectArray.length);
    color += colorSelectArray[num];
  }
  return color;
}

function GetQuote() {
  $.ajax(requestObj);
}
