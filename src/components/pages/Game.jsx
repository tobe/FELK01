import React from 'react'
import { withRouter } from 'react-router-dom'

import ImageList from "components/basic/Game/ImageList.jsx";

import 'styles/components/pages/game.css'
const data = require('~/data/games.json');

class Game extends React.Component {
    images = [];
    selectedGame = 0;

    constructor(props) {
        super();

        // Find Counter-Strike Global Offensive no matter what we have selected
        // This will be our default game for demonstration purposes
        this.gameData = data.filter((obj) => {
            return obj.id == 1;
        });
        this.gameData = this.gameData[0];

        // Here we would grab the images dynamically, but we hardcode to id 1
        this.images = [
            'assets/1/1.jpg',
            'assets/1/2.jpg',
            'assets/1/3.jpg',
            'assets/1/4.jpg',
            'assets/1/5.jpg',
            'assets/1/6.jpg'
        ];

        // Whatever https://github.com/ReactTraining/react-router/issues/4410
        this.selectedGame = parseInt(props.location.pathname.split('/').slice(-1)[0]);
        if(isNaN(this.selectedGame) || this.selectedGame < 0 || this.selectedGame > 8) {
            props.history.push({pathname: '/404'});
            return;
        }
    }

    render() {
        return(
            <div className="Game__maincontainer">
                <main className="main">
                    <div className="Game__splashimage" style={{background: 'url(/assets/1/splash.jpg) center / cover'}}>
                    </div>
                    <div className="Game__info">
                        <h1>Counter-strike: Global Offensive</h1>
                        <p>Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter video game developed by Hidden Path Entertainment and Valve Corporation. It is the fourth game in the Counter-Strike series and was released for Microsoft Windows, OS X, Xbox 360, and PlayStation 3 in August 2012, with the Linux version released in September 2014. The game pits two teams against each other: the Terrorists and the Counter-Terrorists. Both sides are tasked with eliminating the other while also completing separate objectives, the Terrorists, depending on the game mode, must either plant the bomb or defend the hostages, while the Counter-Terrorists must either prevent the bomb from being planted or rescue the hostages. There are six game modes, all of which have distinct characteristics specific to that mode.</p><br />
                        <blockquote>Counter-Strike took the gaming industry by surprise when the unlikely MOD became the most played online PC action game in the world almost immediately after its release in August 1999. For the past 12 years, it has continued to be one of the most-played games in the world, headline competitive gaming tournaments and selling over <strong>25 million units</strong> worldwide across the franchise. CS:GO promises to expand on CS' award-winning gameplay and deliver it to gamers on the PC as well as the next gen consoles and the Mac.</blockquote>
                        
                        <ImageList images = {this.images} />
                    </div>
                </main>
                <aside className="Game__aside">
                    <div className="Game__aside--wrap">
                        <div className="Game__aside--pricing">
                            <div className="Game__aside--platforms">
                                
                                <i className="fa fa-steam" aria-hidden="true"></i>
                                {<img width="100" height="50" src="/assets/logo_g2a_white.svg" />}
                            </div>
                        </div>
                        <div className="Game__aside--buttons">
                            <button className="btn-red Game__aside--buttons-buynow">
                                <i className="fa fa-credit-card" aria-hidden="true"></i> Buy now <br/>15€
                            </button>
                            <button className="btn-green">
                                <i className="fa fa-star" aria-hidden="true"></i> Add to wishlist
                            </button>
                        </div>
                    </div>
                    <div className="Game__aside--data">
                        <div className="Game__aside--details-row">
                            <span className="Game__aside--data-row--title">
                                Genre
                            </span>
                            <span className="Game__aside--data-row--contents">
                                Action, FPS
                            </span>
                        </div>
                        <div className="Game__aside--details-row">
                            <span className="Game__aside--data-row--title">
                                Developer
                            </span>
                            <span className="Game__aside--data-row--contents">
                                Valve
                            </span>
                        </div>
                        <div className="Game__aside--details-row">
                            <span className="Game__aside--data-row--title">
                                Publisher
                            </span>
                            <span className="Game__aside--data-row--contents">
                                Valve
                            </span>
                        </div>
                        <div className="Game__aside--details-row">
                            <span className="Game__aside--data-row--title">
                                Released
                            </span>
                            <span className="Game__aside--data-row--contents">
                                21 Aug, 2012
                            </span>
                        </div>
                    </div>

                    <div className="Game__aside--data">
                        <div className="Game__aside--specs-row">
                            <span className="Game__aside--data-row--titlelong">
                                Operating system
                            </span>
                            <span className="Game__aside--data-row--contents">
                                Windows, Linux or Mac OS
                            </span>
                        </div>
                        <div className="Game__aside--specs-row">
                            <span className="Game__aside--data-row--titlelong">
                                Processor
                            </span>
                            <span className="Game__aside--data-row--contents">
                                Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better
                            </span>
                        </div>
                        <div className="Game__aside--specs-row">
                            <span className="Game__aside--data-row--titlelong">
                                Memory
                            </span>
                            <span className="Game__aside--data-row--contents">
                                4 GB RAM or more
                            </span>
                        </div>
                        <div className="Game__aside--specs-row">
                            <span className="Game__aside--data-row--titlelong">
                                Graphics
                            </span>
                            <span className="Game__aside--data-row--contents">
                                ATI Radeon HD 2400 or better / NVidia 8600M or better
                            </span>
                        </div>
                        <div className="Game__aside--specs-row">
                            <span className="Game__aside--data-row--titlelong">
                                Storage
                            </span>
                            <span className="Game__aside--data-row--contents">
                                15 GB available space
                            </span>
                        </div>
                        <div className="Game__aside--specs-row">
                            <span className="Game__aside--data-row--titlelong">
                                Sound card
                            </span>
                            <span className="Game__aside--data-row--contents">
                                OpenAL Compatible Sound Card
                            </span>
                        </div>
                    </div>
                </aside>
            </div>
        )
    }
}

export default withRouter(Game)