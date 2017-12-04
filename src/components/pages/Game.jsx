import React from 'react'

import 'styles/components/pages/game.css'

class Game extends React.Component {
    constructor() {
        super();

    }

    render() {
        return(
            <div className="Game__maincontainer">
                <main className="main">
                    <div className="Game__splashimage" style={{background: 'url(/assets/1/splash.jpg) center / cover'}}>
                    {/*<h1>Counter-strike: Global Offensive</h1>*/}
                    </div>
                    <div className="Game__info">
                        <h1>Counter-strike: Global Offensive</h1>
                        <p>Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter video game developed by Hidden Path Entertainment and Valve Corporation. It is the fourth game in the Counter-Strike series and was released for Microsoft Windows, OS X, Xbox 360, and PlayStation 3 in August 2012, with the Linux version released in September 2014. The game pits two teams against each other: the Terrorists and the Counter-Terrorists. Both sides are tasked with eliminating the other while also completing separate objectives, the Terrorists, depending on the game mode, must either plant the bomb or defend the hostages, while the Counter-Terrorists must either prevent the bomb from being planted or rescue the hostages. There are six game modes, all of which have distinct characteristics specific to that mode.</p><br />
                        <p>Counter-Strike: Global Offensive (CS:GO) will expand upon the team-based action gameplay that it pioneered when it was launched <strong>14 years ago</strong>.</p><br />
                        <p>CS:GO features new maps, characters, and weapons and delivers updated versions of the classic CS content (de_dust2, etc.). In addition, CS:GO will introduce new gameplay modes, matchmaking, leader boards, and more.</p><br />
                        <blockquote>Counter-Strike took the gaming industry by surprise when the unlikely MOD became the most played online PC action game in the world almost immediately after its release in August 1999. For the past 12 years, it has continued to be one of the most-played games in the world, headline competitive gaming tournaments and selling over <strong>25 million units</strong> worldwide across the franchise. CS:GO promises to expand on CS' award-winning gameplay and deliver it to gamers on the PC as well as the next gen consoles and the Mac.</blockquote>
                    </div>
                </main>
                <aside>
                    <ul>
                        <li>Item1</li>
                        <li>Item1</li>
                        <li>Item1</li>
                        <li>Item1</li>
                        <li>Item1</li>
                    </ul>
                </aside>
            </div>
        )
    }
}

export default Game