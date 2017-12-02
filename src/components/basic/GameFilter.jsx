import React from 'react'
import classnames from 'classnames'

import 'styles/components/basic/GameFilter.css'

class GameFilter extends React.Component {
    items = [];

    constructor() {
        super();
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

    generateCard(game, full = false) {
        let cardClass = classnames({
            'GameFilter__card': 1,
            'GameFilter__card--full': full
        })
        return (
            <div className={cardClass}>
                <div className="GameFilter__card-heading" style={{background: 'url(/assets/' + game.id + '.jpg) center / cover'}}>

                </div>
                <div className="GameFilter__card-body">
                    <h2>{game.name}</h2>
                </div>
                <div className="GameFilter__card-badges">
                    badges
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
            if(i > 1 || !this.props.showAll) {
                rowContents.push(p);
                if (i % 3 == 1) { // three per row
                    acc.push(<div className="GameFilter__list">{rowContents}</div>);
                    rowContents = [];
                }
            }
            return acc;
		},[])
       contents.push(<div className="GameFilter__list">{rowContents}</div>);

       // Featured games (two at the top)
       let featured = [];
       if(this.props.showAll) {
            featured.push(this.generateCard(this.props.updatedList[0], true));
            featured.push(this.generateCard(this.props.updatedList[1], true));
       }

       return (
            <div>
                <div className="GameFilter__search-wrapper">
                    <input type="text" className="GameFilter__search-bar" placeholder="Enter a search term..." />
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>

                <div className="GameFilter__list">
                    {featured}
                </div>

                {contents}
            </div>
        )
    }
}

export default GameFilter