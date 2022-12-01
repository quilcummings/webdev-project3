import React from 'react';

export default class Card extends React.Component {
    render() {
        var paths = [];
        for(var i = 0; i < 10; i++)
        {

        }

        return (
            
            <div className='card'>
                <div>
                <img src='characters/Cheek-resized.png' />
                </div>
                <div className='card-front'>
                <p>Back of Card</p>
                </div>
            </div>
        
        );
    }
  }
