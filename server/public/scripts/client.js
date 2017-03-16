$(function(){
  console.log("Jquery Ready!");
//Button functionality
//buttons for adding items
  $("#addItemButton").on('click', function(){
    console.log("Add Item Button Clicked");
  });
  //buttons for searching items
  $("#searchByNameButton").on('click', function(){
    console.log("Search by name button clicked");
  });
  $("#searchByDescriptionButton").on('click', function(){
    console.log("Search by Description Button clicked");
  });

  //clear buttons
  $("#clearSearchButton").on('click', function(){
    console.log("Clear search button clicked");
  });
});
