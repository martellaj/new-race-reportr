import './App.css';
import base from '../../utilities/base';
import InputContainer from '../InputContainer/InputContainer';
import OutputContainer from '../OutputContainer/OutputContainer';
import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            sections: ['raceInfo', 'goals', 'pictures', 'splits', 'finish', 'text'],
            raceInformation: {
                name: {
                    value: 'Seattle Marathon',
                    exclude: false,
                    output: '* **What?** '
                },
                date: {
                    value: 'November 26, 2017',
                    exclude: false,
                    output: '* **When?** '
                },
                distance: {
                    value: '26.2 miles',
                    exclude: false,
                    output: '* **How far?** '
                },
                location: {
                    value: 'Seattle, WA',
                    exclude: false,
                    output: '* **Where?** '
                },
                website: {
                    value: 'http://www.seattlemarathon.org/',
                    exclude: false,
                    output: '* **Website:** '
                },
                strava: {
                    value: 'https://www.strava.com/activities/739582034',
                    exclude: false,
                    output: '* **Strava activity:** '
                }
            },
            goals: [
                {
                    description: 'Finish in the top 3',
                    completed: false
                },
                {
                    description: '< 3 hours',
                    completed: true
                }
            ],
            pictures: [
                {
                    link: 'http://i0.kym-cdn.com/photos/images/newsfeed/000/279/364/a90.jpg',
                    description: 'Me at mile 26'
                }
            ],
            splitInformation: {
                isKm: false,
                splits: [
                    '8:30'
                ]
            },
            finishInformation: {
                finishTime: '1:30:00'
            },
            textSections: ['Training', 'Pre-race', 'Race', 'Post-race']
        };

        let today = new Date();
        base.push(`loads`, {
            data: today.toDateString()
        });

        this.moveSectionUp = this.moveSectionUp.bind(this);
        this.moveSectionDown = this.moveSectionDown.bind(this);
        this.setRaceInformationValue = this.setRaceInformationValue.bind(this);
        this.setRaceInformationExclude = this.setRaceInformationExclude.bind(this);
        this.addGoal = this.addGoal.bind(this);
        this.removeGoal = this.removeGoal.bind(this);
        this.editGoal = this.editGoal.bind(this);
        this.addPicture = this.addPicture.bind(this);
        this.removePicture = this.removePicture.bind(this);
        this.editPicture = this.editPicture.bind(this);
        this.addSplit = this.addSplit.bind(this);
        this.removeSplit = this.removeSplit.bind(this);
        this.editSplit = this.editSplit.bind(this);
        this.addFinish = this.addFinish.bind(this);
        this.editFinish = this.editFinish.bind(this);
        this.setDistanceType = this.setDistanceType.bind(this);
        this.addTextSection = this.addTextSection.bind(this);
        this.editTextSection = this.editTextSection.bind(this);
        this.removeTextSection = this.removeTextSection.bind(this);
    }

    moveSectionUp(section) {
        let sections = this.state.sections;
        let sectionIndex = sections.indexOf(section);
        sections.splice(sectionIndex, 1);
        sections.splice(sectionIndex - 1, 0, section);
        this.setState({ sections });
    }

    moveSectionDown(section) {
        let sections = this.state.sections;
        let sectionIndex = sections.indexOf(section);
        sections.splice(sectionIndex, 1);
        sections.splice(sectionIndex + 1, 0, section);
        this.setState({ sections });
    }

    setRaceInformationValue(facet, value) {
        let state = this.state;
        state.raceInformation[facet].value = value;
        this.setState(state);
    }

    setRaceInformationExclude(facet, value) {
        let state = this.state;
        state.raceInformation[facet].exclude = value;
        this.setState(state);
    }

    addGoal() {
        let goals = this.state.goals;
        goals.push({
            description: 'Run really fast',
            completed: false
        });
        this.setState({ goals });
    }

    editGoal(index, description, completed) {
        let goals = this.state.goals;
        goals[index].description = description;
        goals[index].completed = completed;
        this.setState({ goals });
    }

    removeGoal(index) {
        let goals = this.state.goals;
        goals.splice(index, 1);
        this.setState({ goals });
    }

    addPicture() {
        let pictures = this.state.pictures;
        pictures.push({
            link: 'http://i0.kym-cdn.com/photos/images/newsfeed/000/279/364/a90.jpg',
            description: 'me at mile 26'
        });
        this.setState({ pictures });
    }

    editPicture(index, link, description) {
        let pictures = this.state.pictures;
        pictures[index].link = link;
        pictures[index].description = description;
        this.setState({ pictures });
    }

    removePicture(index) {
        let pictures = this.state.pictures;
        pictures.splice(index, 1);
        this.setState({ pictures });
    }

    addSplit() {
        let splitInformation = this.state.splitInformation;
        let splits = splitInformation.splits;
        splits.push('8:30');
        this.setState({ splitInformation });
    }

    editSplit(index, split) {
        let splitInformation = this.state.splitInformation;
        let splits = splitInformation.splits;
        splits[index] = split;
        this.setState({ splitInformation });
    }

    removeSplit(index) {
        let splitInformation = this.state.splitInformation;
        let splits = splitInformation.splits;
        splits.splice(index, 1);
        this.setState({ splitInformation });
    }

    setDistanceType(isKm) {
        let splitInformation = this.state.splitInformation;
        splitInformation.isKm = isKm;
        this.setState({ splitInformation });
    }

    addFinish() {
        let finishInformation = this.state.finishInformation;
        finishInformation.finishTime = '1:30:00';
        this.setState({ finishInformation });
    }

    editFinish(index, finishTime) {
        let finishInformation = this.state.finishInformation;
        finishInformation.finishTime = finishTime;
        this.setState({ finishInformation });
    }

    addTextSection() {
        let textSections = this.state.textSections;
        textSections.push('Custom');
        this.setState({ textSections });
    }

    editTextSection(index, value) {
        let textSections = this.state.textSections;
        textSections[index] = value;
        this.setState({ textSections });
    }

    removeTextSection(index) {
        let textSections = this.state.textSections;
        textSections.splice(index, 1);
        this.setState({ textSections });
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>race reportr</h1>
                    <div className="links">
                        <span className="label"><a href="https://www.reddit.com/message/compose?to=BBQLays&subject=race%20reportr%20bug" target="_blank">report a bug</a></span><span> | </span>
                        <span className="label"><a href="https://www.reddit.com/message/compose?to=BBQLays&subject=race%20reportr%20feature" target="_blank">request a feature</a></span><span> | </span>
                        <span className="label"><a href="https://github.com/martellaj/race-reportr" target="_blank">source on github</a></span>
                    </div>
                </div>
                <div className="app">
                    <div className="app-container">
                        <InputContainer sections={this.state.sections} moveSectionUp={this.moveSectionUp} moveSectionDown={this.moveSectionDown} raceInformation={this.state.raceInformation} setRaceInformationValue={this.setRaceInformationValue} setRaceInformationExclude={this.setRaceInformationExclude} goals={this.state.goals} addGoal={this.addGoal} editGoal={this.editGoal} removeGoal={this.removeGoal} pictures={this.state.pictures} addPicture={this.addPicture} editPicture={this.editPicture} removePicture={this.removePicture} splitInformation={this.state.splitInformation} addSplit={this.addSplit} editSplit={this.editSplit} removeSplit={this.removeSplit} finishInformation={this.state.finishInformation} addFinish={this.addFinish} editFinish={this.editFinish} setDistanceType={this.setDistanceType} textSections={this.state.textSections} addTextSection={this.addTextSection} editTextSection={this.editTextSection} removeTextSection={this.removeTextSection} />
                        <OutputContainer sections={this.state.sections} raceInformation={this.state.raceInformation} goals={this.state.goals} pictures={this.state.pictures} splitInformation={this.state.splitInformation} finishInformation={this.state.finishInformation} textSections={this.state.textSections} />
                    </div>
                </div>
            </div>
        );
    }
}