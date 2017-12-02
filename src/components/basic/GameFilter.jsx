import React from 'react'
import classnames from 'classnames'

import 'styles/components/basic/GameFilter.css'

class GameFilter extends React.Component {
    items = [];

    constructor() {
        super();

        this.searchGames = this.searchGames.bind(this);
    }

    chunk(array, size) {
        return array.reduce((chunks, item, i) => {
          if (i % size === 0) {
            chunks.push([item]);
          } else {  
            chunks[chunks.length - 1].push(item);
          }
          return chunks;
        }, []);
      }

    searchGames(event) {
        let newList = this.props.initialList;
        newList = newList.filter(function(item){
            return item.name.toLowerCase().search(
              event.target.value.toLowerCase()) !== -1;
          });
        this.props.updateGames(newList);
    }

    generateGenres(genres) {
        let output = [];
        genres.forEach((genre) => {
            output.push(
                <span className="GameFilter__genre">
                    {genre}
                </span>
            )
        });

        return output;
    }

    generateResellers(resellers) {
        let output = [];
        resellers.forEach((reseller) => {
            switch(reseller) {
                case "Steam":
                    output.push(
                        <span className="GameFilter__badge GameFilter__badge--steam">
                            <i className="fa fa-steam" aria-hidden="true"></i>&nbsp;Steam
                        </span>
                    )
                break;
                case "Origin":
                    output.push(
                        <span className="GameFilter__badge GameFilter__badge--origin">
                            <i className="fa fa-opera" aria-hidden="true"></i>&nbsp;Origin
                        </span>
                    )
                break;
                case "Google":
                    output.push(
                        <span className="GameFilter__badge GameFilter__badge--google">
                            <i className="fa fa-google" aria-hidden="true"></i>&nbsp;Google
                        </span>
                    )
                break;
                case "Apple":
                    output.push(
                        <span className="GameFilter__badge GameFilter__badge--apple">
                            <i className="fa fa-apple" aria-hidden="true"></i>&nbsp;Apple
                        </span>
                    )
                break;
                case "G2A":
                    output.push(
                        <span className="GameFilter__badge GameFilter__badge--g2a">
                            G2A
                        </span>
                    )
                break;
            }
        });

        return output;
    }

    generateCard(game, full = false) {
        let cardClass = classnames({
            'GameFilter__card': 1,
            'GameFilter__card--full': full,
        })
        let headingClass = classnames({
            'GameFilter__card-heading': 1,
            'GameFilter__card-heading--full': full
        })
        return (
            <div className={cardClass}>
                <div className={headingClass} style={{background: 'url(/assets/' + game.id + '.jpg) center / cover'}}>
                    <div className="GameFilter__card-price">
                        {game.price}€
                    </div>
                </div>
                <div className="GameFilter__card-body">
                    <h2>{game.name}</h2>
                </div>
                <div className="GameFilter__card-badges">
                    <div className="GameFilter__card-genres">
                        {this.generateGenres(game.genres)}
                    </div>
                    <div className="GameFilter__card-genres">
                        {this.generateResellers(game.resellers)}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        // Will hold all game objects to render
        let games = [];
        let i = 0;
        this.props.updatedList.forEach(element => {
            if(i <= 1)
                games.push(this.generateCard(element, true));
            else
                games.push(this.generateCard(element));
            i++;
        });

        // Render a row of three games if we haven't selected all (no featured games)
        let rowContents = [];
		const contents = games.reduce((acc, p, i) => {
                rowContents.push(p);
                if (i == 1) {
                    acc.push(<div className="GameFilter__list">{rowContents}</div>);
                    rowContents = [];
                }
            return acc;
		},[])
       contents.push(<div className="GameFilter__list">{rowContents}</div>);

       return (
            <div>
                <div className="GameFilter__search-wrapper">
                    <input type="text" className="GameFilter__search-bar" placeholder="Enter a search term..." onChange={this.searchGames} />
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>

                {contents}
            </div>
        )
    }
}

export default GameFilter