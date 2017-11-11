import './InputContainer.css';
import GoalsSection from '../GoalsSection/GoalsSection';
import PicturesSection from '../PicturesSection/PicturesSection';
import RaceInformationSection from '../RaceInformationSection/RaceInformationSection';
import React, { Component } from 'react';
import SplitInformationSection from '../SplitInformationSection/SplitInformationSection';
import FinishInformationSection from '../FinishInformationSection/FinishInformationSection';
import TextSection from '../TextSection/TextSection'

export default class InputContainer extends Component {
    constructor() {
        super();

        this.renderSections = this.renderSections.bind(this);
    }

    renderSections() {
        let sections = [];

        for (let section of this.props.sections) {
            switch (section) {
                case 'raceInfo':
                    sections.push(
                        <RaceInformationSection key={sections.length} sectionClass="section" raceInformation={this.props.raceInformation} setRaceInformationValue={this.props.setRaceInformationValue} setRaceInformationExclude={this.props.setRaceInformationExclude}
                        moveSectionUp={this.props.moveSectionUp} moveSectionDown={this.props.moveSectionDown} />
                    );
                    break;
                case 'goals':
                    sections.push(
                        <GoalsSection key={sections.length} goals={this.props.goals} addGoal={this.props.addGoal} editGoal={this.props.editGoal} removeGoal={this.props.removeGoal} sectionClass="section" moveSectionUp={this.props.moveSectionUp} moveSectionDown={this.props.moveSectionDown} />
                    );
                    break;
                case 'pictures':
                    sections.push(
                        <PicturesSection key={sections.length} sectionClass="section" moveSectionUp={this.props.moveSectionUp} moveSectionDown={this.props.moveSectionDown} pictures={this.props.pictures} addPicture={this.props.addPicture} editPicture={this.props.editPicture} removePicture={this.props.removePicture} />
                    );
                    break;
                case 'splits':
                    sections.push(
                        <SplitInformationSection key={sections.length} sectionClass="section" moveSectionUp={this.props.moveSectionUp} moveSectionDown={this.props.moveSectionDown} splitInformation={this.props.splitInformation} addSplit={this.props.addSplit} editSplit={this.props.editSplit} removeSplit={this.props.removeSplit} setDistanceType={this.props.setDistanceType} />
                    );
                    break;
                case 'finish':
                    sections.push(
                        <FinishInformationSection key={sections.length} sectionClass="section" moveSectionUp={this.props.moveSectionUp} moveSectionDown={this.props.moveSectionDown} finishInformation={this.props.finishInformation} addFinish={this.props.addFinish} editFinish={this.props.editFinish} />
                    );
                    break;
                case 'text':
                    sections.push(
                        <TextSection key={sections.length} sectionClass="section" moveSectionUp={this.props.moveSectionUp} moveSectionDown={this.props.moveSectionDown} textSections={this.props.textSections} addTextSection={this.props.addTextSection} editTextSection={this.props.editTextSection} removeTextSection={this.props.removeTextSection} />
                    );
                    break;
                default:
                    break;
            }
        }

        return sections;
    }

    render() {
        return (
            <div className="inputContainer">
                {this.renderSections()}
            </div>
        );
    }
}