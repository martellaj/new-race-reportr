import React, { Component } from 'react';

export default class FinishInput extends Component {
    constructor() {
        super();

        this.onFinishChange = this.onFinishChange.bind(this);
    }

    onFinishChange(event) {
        this.props.editFinish(this.props._key, event.target.value, this.props.completed);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onFinishChange} value={this.props.finishTime} />
            </div>
        );
    }
}