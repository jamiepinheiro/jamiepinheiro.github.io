/*
	Controller for the favourite view, handling all actions related to it
*/

//if there are favourites, change the view to favourites
function viewFavourites(){
	if(profile.favouritePrograms.length == 0){
		removeClass("noFavouritesError", "hidden");
	}else{
		switchView("favouritesPage");
		loadFavourites();
	}
}

//load favourites based on current profile
function loadFavourites(){

	//find all favourited programs from list
    selectedPrograms = [];
    for(var i = 0; i < profile.favouritePrograms.length; i++){
        selectedPrograms.push(formatProgram(programs[profile.favouritePrograms[i]]));
    }

	//sort based upon ranking score
	selectedPrograms = mergeSort(selectedPrograms);

	//display resultant programs on favourites page
	activeTable = "favouritePrograms";

	updateViews();
}

//toggle favourited value for a particular program
function favourite(programNumber){
	//add a new favourite if it is not there
	if(profile.favouritePrograms.indexOf(programNumber) == -1){
		profile.favouritePrograms.push(programNumber);
	}
	//remove it if it is there
	else{
		profile.favouritePrograms.splice(profile.favouritePrograms.indexOf(programNumber), 1);
	}
	//save the data to database
	saveProfiles();

	//if no more favourites exist, go to the results page
	if(currentPage == "favouritesPage" && profile.favouritePrograms.length != 0){
		viewFavourites();
	}else{
		viewResults();
	}
}
