/* @flow */

const React: any = require('react');

import CharacterEquipment from './character_equipment';
import {
  fetchDataFromUri,
} from './network_request_helpers.jsx';
import {
  renderArrayWithTitle,
  renderEntry,
} from './render_helpers.jsx'

type CharacterProps = {
  dataType: string,
  dataUrl: string,
};

export default class Character extends React.Component {
  props: CharacterProps;

  state: {
    armorClass: string,
    charisma: string,
    class: string,
    constitution: string,
    dexterity: string,
    equipment: {},
    hitDice: string,
    intelligence: string,
    languages: [],
    level: string,
    maxHP: string,
    name: string,
    proficiency: string,
    race: string,
    senses: [],
    speed: string,
    strength: string,
    weapons: {},
    wisdom: string,
  }

  constructor(props: CharacterProps): void {
    super(props);
    this.state = {
      armorClass: '',
      charisma: '',
      class: '',
      constitution: '',
      dexterity: '',
      equipment: {},
      hitDice: '',
      intelligence: '',
      languages: [],
      level: '',
      maxHP: '',
      name: '',
      proficiency: '',
      race: '',
      senses: [],
      speed: '',
      strength: '',
      weapons: {},
      wisdom: '',
    };
  }

  loadData(): void {
    fetchDataFromUri(this.props.dataUrl, (response) => {
      const data: Object = response.data;
      this.setState({
        armorClass: data.armorClass,
        charisma: data.charisma,
        class: data.class,
        constitution: data.constitution,
        dexterity: data.dexterity,
        equipment: data.equipment,
        hitDice: data.hitDice,
        intelligence: data.intelligence,
        languages: data.languages,
        level: data.level,
        maxHP: data.maxHP,
        name: data.name,
        proficiency: data.proficiency,
        race: data.race,
        senses: data.senses,
        speed: data.speed,
        strength: data.strength,
        weapons: data.weapons,
        wisdom: data.wisdom,
      });
    });
  }

  componentDidMount(): void {
    this.loadData();
  }

  render() {
    if (this.state.name != null) {
      return (
        <div>
          <h3>General</h3>
          {renderEntry('Name', this.state.name)}
          {renderEntry('Race', this.state.race)}
          {renderEntry('Class', this.state.class)}
          <br />

          {renderEntry('STR', this.state.strength)}
          {renderEntry('DEX', this.state.dexterity)}
          {renderEntry('CON', this.state.constitution)}
          {renderEntry('INT', this.state.intelligence)}
          {renderEntry('CHA', this.state.charisma)}
          {renderEntry('WIS', this.state.wisdom)}
          <br />

          {renderEntry('Proficiency', this.state.proficiency)}
          {renderEntry('Level', this.state.level)}
          {renderEntry('Armor Class', this.state.armorClass)}
          {renderEntry('Max HP', this.state.maxHP)}
          {renderEntry('Hit Dice', this.state.hitDice)}
          {renderEntry('Speed', this.state.speed)}
          <br />

          {
            this.state.senses != null ?
              renderArrayWithTitle(this.state.senses, 'Senses') :
              <div></div>
          }
          {
            this.state.languages != null ?
              renderArrayWithTitle(this.state.languages, 'Languages') :
              <div></div>
          }
          <br />

          <h3>Equipment</h3>
          <CharacterEquipment equipment={this.state.equipment} />

          <h3>Weapons</h3>
          <CharacterEquipment equipment={this.state.weapons} />
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
};
