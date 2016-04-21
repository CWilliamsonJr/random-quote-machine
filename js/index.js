"use strict"

var quoteApi = "https://andruxnet-random-famous-quotes.p.mashape.com/"
var quoteText;
var quoteAuthor;
var colorSelectArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
var color = "#";

var requestObj = {
  url: quoteApi, // Where to retrive the quote
  type: "Get",
  beforeSend: function(xhr) { // Sending Headers needed for the api request
    xhr.setRequestHeader("X-Mashape-Key", "GLrO1Wam6rmsh36WREqRoCBbpTvKp1U2u46jsn1LhbmJOEy7Zp");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Accept", "application/json")
  },
  success: DisplayQuote,
  dataType: "json", // data type of the retrived file

}

$(document).ready(function() { // runs when the page is loaded
  GetColor();
  GetQuote();
  
  $("body").css("background-color", color);

});
$("#new_quote").click(function() { // Gets new Quote on click.
  color = "#";
  GetQuote();
  GetColor();
  $("body").css("background-color", color);

});

function DisplayQuote(quoteObj) { // Displays the quote.
  quoteText = quoteObj.quote;
  quoteAuthor = quoteObj.author;
  $("#quote").html(quoteText).addClass("h3");
  $("#author").html(quoteAuthor);
  $("#tweet_btn").attr("href", "https://twitter.com/intent/tweet?text=" + quoteText + "%0a--- " + quoteAuthor);
}

function GetColor() { // Generates a Random Color

  var num;
  for (i = 0; i <= 5; i++) {
    num = Math.floor(Math.random() * colorSelectArray.length);
    color += colorSelectArray[num];
  }
}

function GetQuote() {
  $.ajax(requestObj);
}
