import React from 'react'

import 'styles/components/basic/GameFilter.css'

import Card from 'components/basic/Home/Card.jsx'
import Error from 'components/basic/Home/Error.jsx'

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

    render() {
        // Will hold all game objects to render
        let games = [];
        let i = 0;
        this.props.updatedList.forEach(element => {
            if(i <= 1)
                games.push(<Card key={i} game = {element} full = {true} />);
            else
                games.push(<Card key={i} game = {element} full = {false} />);
            i++;
        });

        // Push an error if we're empty -> no cards
        if(this.props.state.showError)
            games.push(<Error key={-1} text = "No games match your criteria" />)

        // Render a row of three games if we haven't selected all (no featured games)
        let rowContents = [];
        const contents = games.reduce((acc, p, i) => {
            rowContents.push(p);
            if (i == 1) {
                acc.push(<div key={i} className="GameFilter__list">{rowContents}</div>);
                rowContents = [];
            }
            return acc;
        },[])
        contents.push(<div key={-1} className="GameFilter__list">{rowContents}</div>);

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