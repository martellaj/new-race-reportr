import './FinishInformationSection.css';
import classNames from 'classnames';
import React, { Component } from 'react';
import FinishInput from '../FinishInput/FinishInput';

export default class FinishInformationSection extends Component {
    constructor() {
        super();

        this.moveSectionUp = this.moveSectionUp.bind(this);
        this.moveSectionDown = this.moveSectionDown.bind(this);
        this.addFinish = this.addFinish.bind(this);
    }

    moveSectionUp() {
        this.props.moveSectionUp('finish');
    }

    moveSectionDown() {
        this.props.moveSectionDown('finish');
    }

    addFinish() {
        this.props.addFinish();
    }

    renderFinishInputs() {
        let key = 1;
        return <FinishInput key={key} _key={key} editFinish={this.props.editFinish} finishTime={this.props.finishInformation.finishTime} />
    }

    render() {
        let sectionClasses = classNames({
            [`${this.props.sectionClass}`]: true,
            finishSection: true
        });

        return (
            <div className={sectionClasses}>
                <div className="sectionMovers">
                    <button onClick={this.moveSectionUp}>up</button>
                    <button onClick={this.moveSectionDown}>down</button>
                </div>
                <div className="">
                    <h3 className="sectionHeader">finish</h3>
                    {this.renderFinishInputs()}
                </div>
            </div>
        );
    }
}