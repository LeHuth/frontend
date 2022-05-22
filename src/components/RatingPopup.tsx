import React from "react";
import './RatingPopup.css'


type RatingPopupState = {
    rating: number,
    showResult: boolean
}

export class RatingPopup extends React.Component<{}, RatingPopupState> {
    constructor({props}: { props: any }) {
        super(props);
        this.state = {
            rating: 0,
            showResult: false
        }
    }

    handleClick = (n: number) => {
        this.setState({rating: n})
    }

    chooseRating = () => {
        return (
            <div>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!</p>
                <div>
                    <button onClick={this.handleClick.bind(this, 1)}>1</button>
                    <button onClick={this.handleClick.bind(this, 2)}>2</button>
                    <button onClick={this.handleClick.bind(this, 3)}>3</button>
                    <button onClick={this.handleClick.bind(this, 4)}>4</button>
                    <button onClick={this.handleClick.bind(this, 5)}>5</button>
                </div>
                <button onClick={() => {this.setState({showResult: true})}}>Submit</button>
            </div>)
    }

    displayThanks = () => {
        return(
            <div>
                <div>
                    You selected {this.state.rating} out of 5
                    Thank you!
                    We appreciate you taking the time to give a rating. If you ever need more support,
                    don’t hesitate to get in touch!
                </div>
                <div className="attribution">
                    Challenge by Frontend
                    Mentor.
                    Coded by Leo.
                </div>
            </div>
        )
    }


    render() {
        return (
            <div className="Container">
                {this.state.showResult ? this.displayThanks() : this.chooseRating()}
            </div>
        );
    }


}



