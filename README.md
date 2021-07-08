# Binge Watcher

Binge Watcher is a single-page application for users to optimise their binge-watching plans with shows from popular streaming services.

## About

The app is an optimisation application modelled after a Campaign Budget Optimiser (CBO). A CBO takes in a series of inputs and a numerical constraint to output a single return.
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
* A user should be able to select their availability using a JavaScript-based slider.
* A user should be able to select their medium preference from the radio buttons.
* A user should be only doing one thing at a time on a page or component render. 
* A user should be able to see a viable binge-watching plan upon submission.
* For each item in the binge-watching plan, a user should see:
    * Title of Show
    * Short Writeup
    * Poster Image of Show
    * Launch Date of Show
    * Show Genres
* A user should be able to add the watching plan to a watchlist.
* A user should be able to add more than one plan to their watchlist. 
* A user should be able to delete plans from their watchlist. 

## Planning and Development Process

The project was broken down to three general parts. 
1. _API_. The first part is exploring the in-built functionalities of the API, and checking if the API works according to specification upon deployment.
1. _Recommendations Generator_. The generator is composed of three form input components, each with their conditional control statement algorithm, and one output component. These were dealt with sequentially. 
1. _Watchplan_. With the data generated from Part 1 and 2, building the watchplan is a simple shopping cart problem.  

### Problem-Solving Strategy

_Divide and Conquer_. Trite, but this is great with React: Once I've identified the most atomic components, I built them rightaway, and from there slowly collased the components to their proper functions.

## API used

[The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api)
