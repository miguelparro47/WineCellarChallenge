# Welcome to Parro's Wine Cellar!

This is a really simple and barebones solution to the wine cellar code challenge. I implemented it in 3 different parts: 
1. The wine list (which is basically in the state of the app.js file to simplify manipulation);
2. The add new wine component: which lets you add a new wine to the list, it also makes some validations before letting you add, as I'm no wine expert I just added some regex validations that seemed appropriate at the time;
3. The CSV download feature: which is easily done using CSVDownload;

---
## Components List


### ListWines
In this component we build our, soon to be vast, list of wines:

1. We build the headers of our table which will represent all of the attributes of our wines;
2. We map all of the existing wines in our cellar, and display them;

### AddWine
Here, we find all of the necessary logic to add a new wine to our cellar. 
We have various form validations, such as: 
1. None of the fields can be null, because we don't want nameless wines in our cellar, or any of that sort;
2. the names and vineyards can't contain numbers;
3. the year has to be a valid year and the oldest wine we admit in our cellar is from 1970, up to our current year of 2019;
4. For the type, after a quick search I found out there are 4 types of wines: red, white, rose and sparkling. So, these are the ones we admit in our cellar.

After all of this mess is taken care of, we admit the new wine in our cellar.

### FormErrors
In the FormErrors component, as the name suggests it, we have an algorithm where we build the errors that are made while submitting the form for the new wine.
 
