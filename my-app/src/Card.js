import React from 'react';
// import App from './App';

export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flip: false,
        };
        
    }
    
    // handleClick
    handleClick = () => {
        this.props.handleChoice(this.props.card);
        // !this.props.flipped && this.props.onClick(index);
        // check previous state to see if the card is already flipped
        // this.setState(prevState => ({
        //     flip: !prevState.flip,
        // }));

        // return this.state.flip;
    }

    // componentDidUpdate(flip) {
    //     console.log(this.state.flip);
    // }


    render() {

        return (
            
            // first className: card
            // second className: I'm trying to pass the "flip" value in and have the className changed to flip-true and flip-false based on this.state.flip value
            <div 
                className={`card ${this.props.flipped ? "flip-true" : "flip-false"}`}
                onClick={()=> {
                    this.handleClick();
                }}>
                <div className='inner'>
                    <div className='card-front'>
                        <img
                            src={this.props.card.src}
                            alt={this.props.card.src}
                             />
                    </div>
                    <div className='card-back'>
                        <img
                            src={"Pusheen-logo.png"}
                            alt="Click to flip the card!"
                             />
                    </div>
                </div>
            </div>

        );
    }
}
