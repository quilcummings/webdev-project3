import React from 'react';

export default class Card extends React.Component {
    render() {

        return (
            
            <div className='card'>
                <div>
                    <img src={this.props.path}/>
                </div>
                    <div className='card-front'>
                    <p>Back of Card</p>
                </div>
            </div>
        
        );
    }
  }
