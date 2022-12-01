import React from 'react';

export default class Card extends React.Component {
    render() {
      return (
        
          <div className='card'>
            <div>
              <img src='https://opengameart.org/sites/default/files/card%20back%20black.png' />
            </div>
            <div className='card-front'>
              <h2>Front of Card</h2>
            </div>
          </div>
    
      );
    }
  }