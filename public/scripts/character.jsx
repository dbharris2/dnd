/* @flow */

const $ = require('jquery');
const React: any = require('react');

type CharacterProps = {
  dataType: string,
  dataUrl: string,
};

export default class Character extends React.Component {
  props: CharacterProps;

  state: {
    armorClass: '',
    class: '',
    hitDice: '',
    languages: [],
    level: '',
    maxHP: '',
    name: '',
    proficiency: '',
    race: '',
    senses: [],
    speed: '',
  }

  constructor(props: CharacterProps): void {
    super(props);
    this.state = {data: []};
  }

  loadData(): void {
    $.ajax({
      url: this.props.dataUrl,
      dataType: this.props.dataType,
      cache: true,
      success: function(data): void {
        this.setState({
          armorClass: data.armorClass,
          class: data.class,
          hitDice: data.hitDice,
          languages: data.languages,
          level: data.level,
          maxHP: data.maxHP,
          name: data.name,
          proficiency: data.proficiency,
          race: data.race,
          senses: data.senses,
          speed: data.speed,
        });
      }.bind(this),
      error: function(xhr, status, err): void {
        console.error(this.props.dataUrl, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount(): void {
    this.loadData();
  }

  renderArray(title: string, array: Object) {
    return(
      <div>
        {title + ': ' + array.join(', ')}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>Name: {this.state.name}</div>
        <div>Race: {this.state.race}</div>
        <div>Class: {this.state.class}</div>
        <div>Proficiency: {this.state.proficiency}</div>
        <div>Level: {this.state.level}</div>
        <div>Armor Class: {this.state.armorClass}</div>
        <div>Max HP: {this.state.maxHP}</div>
        <div>Hit Dice: {this.state.hitDice}</div>
        <div>Speed: {this.state.speed}</div>
        {
          this.state.senses != null ?
            this.renderArray('Senses', this.state.senses) :
            <div></div>
        }
        {
          this.state.languages != null ?
            this.renderArray('Languages', this.state.languages) :
            <div></div>
        }
      </div>
    );
  }
};
