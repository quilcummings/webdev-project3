import React from 'react';

export default class Card extends React.Component {
    render() {
      return (
        <div className='card-side side-front'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xs-6'>
              <img src='https://opengameart.org/sites/default/files/card%20back%20black.png' />
            </div>

            <div className='col-xs-6 side-front-content'>
              <h2>Front of Card</h2>
            </div>
          </div>
        </div>
      </div>
    
      );
    }
  }