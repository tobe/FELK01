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

    generateCard(game) {
        return (
            <div className="GameFilter__card">
                <div className="GameFilter__card-heading">
                    {game.name}
                </div>
                <div className="GameFilter__card-body">
                    Lorem ipsum dolor sit amet
                </div>
                <div className="GameFilter__card-badges">
                    badges
                </div>
            </div>
        )
    }

    render() {
        let products = [];

        this.props.updatedList.forEach(element => {
            products.push(this.generateCard(element));
        });

        let rowContents = [];
		const contents = products.reduce((acc, p, i) => {
            if(i > 1) {
            rowContents.push(p);
			if (i % 3 == 1) {
				acc.push(<div className="GameFilter__list">{rowContents}</div>);
				rowContents = [];
            }
        }
            return acc;
		},[])
       contents.push(<div className="GameFilter__list">{rowContents}</div>);

		return (
			<div>
                <div className="GameFilter__search-wrapper">
                    <input type="text" className="GameFilter__search-bar" placeholder="Enter a search term..." />
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <span className="testing">Hello from GameFilter</span>

                <div className="GameFilter__list">
                    {this.generateCard(this.props.updatedList[0])}
                    {this.generateCard(this.props.updatedList[1])}
                </div>
			    {contents}
			</div>
		)
    }
}

export default GameFilter