# Overview
This is a simple space shooter inspired game where players are tasked to destroy the slimey alien invadors! Shoot, loot, and safe humanity! The top space heroes scores are captured and displayed in the leader board! 

Tech stack are: typescript, mongoDB
# Defining the Problem
## Program Specs:
### Data
The persistant data (scoreboard) will be held in a NO-SQL database (MongoDB) as no complex joins are 
necessary and maintaining consistency and availability is important. The persistent data is structured
as follows: 
```
scoreboard: {
  name: { //name of user
    score: int, //score of user
    date: date //date of score captured
  }
}
```
The non-persistent data (hud) is player score, life, bullets. Score will be captured but
in every new instance of play, the score, life, bullets will reset and will not be captured beyond
the current playthrough. The data will be structured as follows:
```
player: {
  name: string,
  life: int,
  score: int,
  bullets: int
}
```
Now we can divide the data structure to satify a game mechanic for example healt component
can read/write life data healt = {life: int} and another component bullets can read/write
bullets = {amount: int}, but since this game is very small and wont grow beyond the requirements
it safe to keep the data in a player key-value pair.
### Output & UI
The persistant data (displayed in scoreboard) can follow the same input data structure, date is 
output like 2024.05.10, and scoreboard is displayed as follows:
| name | score| date     |
|-----:|-----:|---------:|
|tar   |500   |2024.05.10|

The non-persistant data displayed are life, score and bullets in top right corner. It can be 
displayed as:
| icon | attribute| value  |
|-----:|---------:|-------:|
|+     |life:     | 3      |
|-----:|---------:|-------:|
|-     |bullets:  | 43     |
|-----:|---------:|-------:|
|*     |score:    | 233    |

# Designing the Program
We will use top-bottom program desing. We will use a monolithic, MVC (Model-View-Controller) architecture.
## Module 1: Game
![Alt text](/resources/flowchart-game.jpg?raw=true "Dashboard")
### Module 1.1: Player
### Module 1.2: Alien
### Module 1.3: HUD
## Module 2: Scoreboard
