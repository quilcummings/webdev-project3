import React from 'react';
/** Changing class Card to function Card might be easier for us to follow the demo code
 * , but it's doing the same thing.
export default function Card(props) {


    return (
        <div className='card'>
                <div className='card-front'>
                    <img src={props.path} alt={props.path} />
                </div>
                <div className='card-back'>
                    <p>Back of Card</p>
                </div>
            </div>
    );
}*/
export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flip: false,
        };
    }
    
    // handleClick
    handleClick = () => {
        // check previous state to see if the card is already flipped
        this.setState(prevState => ({
            flip: !prevState.flip,
        }));
        // console.log(this.state.flip);
    }

    componentDidUpdate() {
        console.log(this.state.flip);
    }

    render() {
        return (

            <div className='card'>
                <div className='inner'>
                    <div className='card-front'>
                        <img src={this.props.path} alt={this.props.path} />
                    </div>
                    <div className='card-back'>
                        <p>Back of Card</p>
                    </div>
                </div>
            </div>

        );
    }
}
