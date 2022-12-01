import React from 'react';

export default class Card extends React.Component {
    render() {

        return (

            <div className='card'>
                <div className='card-front'>
                    <img src={this.props.path} alt={this.props.path} />
                </div>
                <div className='card-back'>
                    <p>Back of Card</p>
                </div>
            </div>

        );
    }
}
