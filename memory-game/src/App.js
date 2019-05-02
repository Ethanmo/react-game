import React, { Component } from 'react';
import GameArea from "./components/GameArea"
import Gameblock from "./components/Gameblock"
import imgArr from "./components/imgArr"
import Jumbotron from './components/Jumbotron';
import Scoreboard from './components/Scoreboard';


class App extends Component {

    state = {
        arrAll: imgArr,
        picked: [],
        score: 0
    };

    handleClick = event => {
        console.log(event.target);
        const id = parseInt(event.target.getAttribute("imgid"));
        if (this.state.picked.indexOf(id) !== -1){
            alert(`Your score is ${this.state.score}, good job!`);
            this.initGame();
        } else {
            const newPicked = this.state.picked;
            newPicked.push(id);
            const newScore = this.state.score + 1;
            const newAllArr = this.shuffle(this.state.arrAll);
            this.setState({
                arrAll: newAllArr,
                picked: newPicked,
                score: newScore
            });
        }
    }

    shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    initGame = () => {
        const newAllArr = this.shuffle(this.state.arrAll);
        this.setState({
            arrAll: newAllArr,
            picked: [],
            score: 0
        });
    }

    componentDidMount = () => {
        console.log(imgArr);
        this.initGame();
    }

    render() {
        return (
            <div>
                <Jumbotron />
                <Scoreboard score={this.state.score} />
                <GameArea className="gameArea">
                    {this.state.arrAll.map(ele => (
                        <Gameblock
                            key={ele.id}
                            id={ele.id}
                            img={ele.img}
                            onClick={this.handleClick}
                        />
                    ))}
                </GameArea>
            </div>
        );
    }
}

export default App;
