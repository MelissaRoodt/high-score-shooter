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
We will use top-bottom program desing.
## Module 1: Game
![Alt text](/resources/flowchart-game.png?raw=true "Dashboard")
- The game will start
- The instance will spawn (player, aliens)
- The game will check if player alive
- If player dead: Sent relevant data to scoreboard through event
  
![Alt text](/resources/structurechart-game.png?raw=true "Dashboard")
- spawn player and aliens
- save data/send to scoreboard
- restart the game

### Module 1.1: Player
![Alt text](/resources/structurechart-player.png?raw=true "Dashboard")
- get/set gun bullets (shoot, reload) 
- get/set health (add, remove)
- get/set score (add, reset)
- movement (left, right, up, down)

### Module 1.2: Alien
![Alt text](/resources/structurechart-alien.png?raw=true "Dashboard")
- movement (left, right)
- get/set health (add, remove)
  
### Module 1.3: HUD
![Alt text](/resources/structurechart-hud.png?raw=true "Dashboard")
- get gun bullets
- get score
- get bullets
  
## Module 2: Scoreboard
![Alt text](/resources/structurechart-scoreboard.png?raw=true "Dashboard")
- get top 10 from databse
- process data (date to yyyy.mm.dd)
- display top 10 leaders

# Coding the program
![Alt text](/resources/mvc.png?raw=true "Dashboard")
We will use a monolithic, MVC (Model-View-Controller) architecture. Composition will be used to compose player and alien objects. This will ensure DRY principle. We will further use the SOLID principles to develop maintainable software.

- [ ] Develop Gun mechanic
- [ ] Develop Healt mechanic
- [ ] Develop Score mechanic
- [ ] Develop Movement mechanic
- [ ] Compose Player
- [ ] Compose Alien
- [ ] Develop HUD
- [ ] Develop Scoreboard

