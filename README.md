# FELK01
[Human Computer Interaction](http://marjan.fesb.hr/~mcagalj/HCI/) project  
[FELK01](https://nastava.fesb.unist.hr/nastava/predmeti/8179) on FESB.hr  

This is a simple website made as a seminar for the said university class, demonstrating some of the principles learned throughout the class.  
The website itself is about grouping various videogame resellers into one place, so the users can filter, search and sort the games by multiple criteria.

## Technologies
* NodeJS (no backend)
* React 15
* Webpack
* FontAwesome

There are no additional CSS and Javascript frameworks or libraries included. I wanted to keep it this way in order to preserve the consistency and purity of the project. The point of the subject was to implement these principles by yourself and learn by using them, as opposed to blatantly using complete solutions such as Bootstrap (which would have also been an overkill for such a project)

## Notes
Do keep in mind this has been my first project in React, so the code *might* be a tad messy. Not all principles have been used to the fullest (regarding React, that is :))  

* Project structure has been based [off of here](https://github.com/mcagalj/HCI-2017-18)
* All components are separated by either `basic` or `pages`, depends what they're used for. `pages` are, well, pages used by React-Router and `basic` are the rest
* BEM has been used as I went by coding, I've customized it a bit to my likings I suppose :sweat_smile:
* Some things have been hardcoded, just to illustrate the design.
* You'll see **quite** a bit of comments as you read through the source. I've documented my amazement and some frustrations along the way, to make it both legit and to help myself in the future, perhaps
* Redux hasn't been used so passing the state around is a bit ugly lol

To (perhaps?) future students looking over this, you can copy the good design principles included here, but for the love of God, try to *at least* understand what you're doing (both code-wise and design-wise!)

## Requirements
All are included in `packages.json`

## Installation
Just your usual...  
```npm install```  
followed by  a  
```npm run dev-server```   

The development server will be started on `localhost:3000`. It features HMR so you can edit as you go (except for the CSS files, since I explicitly like those **not** inlined).