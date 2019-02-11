# Command line lab

## Introduction

Developing web apps requires a degree of comfort navigating and interacting with your operating system through the command line, and similar to how you'll be practicing writing and running Ruby and JavaScript later in the course, we'll be practicing creating, modifying, and moving files and folders in your terminal to get you practicing Unix commands.

For your first lab, you're going to create files and folders to organize your favorite books, movies, and music - then, you're going to reorganize them.

Be sure to use the cheat sheets in the "Additional Resources" section in case you get stuck.

## Exercise

#### Requirements

From your root directory, create a folder called "my-favorite-things"; you'll use that folder to do the exercises below.

* Organize your favorite books
    * in the "my-favorite-things" folder, create a folder called "books"
    * create a folder in books named after your favorite author (e.g. "mark-twain", or "john-grisham", but avoid spaces!)
    * create files named after some of the author's books in the author's folder
    * open the books folder in VS Code
    * to each book file, add a brief description of the book

* Organize your favorite movies

    * in the "my-favorite-things" folder, create a folder called "movies"
    * create a folder in movies named after your favorite actor
    * create a folder in the actor folder named after the actor's breakthrough movie
    * create a text file named after the actor's character in the breakthrough movie in the top level "movies" directory
    * move the text file to the breakthrough movie's folder
    * open the file in VS Code and edit that text file with a description of the character's role in the movie

* Organize your favorite music

    * in the my-favorite-things folder, create a folder called "music"
    * move into the "music" folder
    * create a folder called "disco"
    * create a text file in "disco" called "ymca.txt"
    * delete the "disco" folder
    * create a folder called "creed"
    * delete the "creed" folder
    * create folders called "one-direction", "the-strokes", and "rihanna"
    * create a text file in "one-direction" called "what-makes-you-beautiful.txt"
    * make two copies of "what-makes-you-beautiful.txt" - one into "the-strokes" and one into "rihanna" and rename those files with songs by those artists

* Reorganize _everything_

    * in the my-favorite-things folder, create a folder called "media"
    * move "books", "movies", and "music" into the "media" folder

* Organize the top music, movies, and books of 2018

    * move into the my-favorite-things folder and copy the "media" folder, then, rename it "2018-media"
    * in the “2018-media” folder, rename each folder to have "2018-" before the title
    * delete the contents of "2018-music", "2018-movies", and "2018-books"
    * create a file called "top-ten-movies.html" in "2018-movies"
    * create a file called "top-ten-songs.html" in "2018-music"
    * create a file called "top-ten-books.html" in "2018-books"
    * create an ordered list - using HTML! - of the top 10 movies, songs, and books in each of the appropriate files

**Bonus**

* Look through the additional resources and do the following without leaving your terminal:

    * look at the top and bottom 10 lines of each file
    * search for a string of text in a file

#### Starter code

No starter code needed for this lab!

#### Deliverable

Be sure you open up your "my-favorite-things" directory in VS Code, so you can track your progress on the side of the application. Here's a look at what your files/folders should look like after each big step in the exercise:

* After "Organize your favorite books":

![](assets/organise-books.png)

* After "Organize your favorite movies":

![](assets/organise-movies.png)

* After "Organize your favorite music":

![](assets/organise-music.png)

* After "Reorganize _everything_"

![](assets/reorganise.png)

* After "Organize the top music, movies, and books of 2018"

![](assets/reorganise-to-top.png)

## Additional Resources

* A list of [CLI Shortcuts](https://gist.github.com/alexpchin/01caa027b825d5f98871)
* Terminal command [cheatsheet](https://github.com/0nn0/terminal-mac-cheatsheet)