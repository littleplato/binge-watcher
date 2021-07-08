# Binge Watcher

Binge Watcher is an optimiser app for decision-paralyzed binge watchers.

## About

The app is a single-page application and is modelled after a Campaign Budget Optimiser (CBO). A CBO takes in a series of inputs and a numerical constraint to output a single return.
The inputs are passed through a conditional control statement algorithm at each stage.
The structure of the input is best represented as a decision tree.

### Technologies

1. React
1. Material-UI
1. Ajax

### Wireframes

#### Wireframe for Input
![Wireframe1](https://raw.githubusercontent.com/weejerrick/binge-watcher/main/binge-watcher-app/public/input.png)

#### Wireframe for Output
![Wireframe2](https://raw.githubusercontent.com/weejerrick/binge-watcher/main/binge-watcher-app/public/output.png)

### User Stories

* A user should be able to understand intuitively what the site is about.
* A user should be able to select multiple genre checkboxes.
* A user should be able to select their availability using a JS-based slider.
* A user should be able to select their medium preference in a dropdown list.
* A user should be able to see a viable binge-watching plan upon submission.
* For each item in the binge-watching plan, a user should see:
    * Title of show
    * Short writeup
    * Image
    * Launch Date of Show
    * Show Genres
* A user should be able to add the watching plan to a watchlist.
* A user should be able to add more than one plan to their watchlist. 
* A user should be able to delete plans from their watchlist. 

## Planning and Development Process

The project is broken to two main parts: the recommendations generator and the watchplan. 
1. _Recommendations Generator_. The recommendations generator consists of two further subparts. One, the app takes in the inputs from the user; and two, the app uses the inputs from the user to fetch the required data from the API. The first thing I did was to study the functions of the API, and thereafter begin building the algorithm to generate the recommendations.
1. _Watchplan_. With the data already available from Part 1, building the watchplan is a simple shopping cart problem.  

### Problem-Solving Strategy

_Divide and Conquer_. Trite, but this is great with React: Once I've identified the most atomic component, I build them straightaway, and from there slowly collased the components to their proper functions.

## API used

[The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api)
