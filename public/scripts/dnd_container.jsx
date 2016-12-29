/* @flow */

import React from 'react';
import Flexbox from 'flexbox-react';
import Modal from 'react-modal';

import Button from './button';
import Character from './character';
import CharacterButtons from './character_buttons';
import Grid from './grid';
import Header from './header';
import List from './list';
import Spell from './spell';

import {
  fetchDataFromUri,
} from './network_request_helpers.jsx';

function greenArcher() {
  return (
    <Character
      dataType='json'
      dataUrl='/api/greenArcher'
      />
  );
}

function renderCharacter(character: Object) {
  return (
    <Character
      armorClass={character.armorClass}
      attributes={character.attributes}
      class={character.class}
      equipment={character.equipment}
      hitDice={character.hitDice}
      languages={character.languages}
      level={character.level}
      maxHP={character.maxHP}
      name={character.name}
      proficiency={character.proficiency}
      race={character.race}
      senses={character.senses}
      speed={character.speed}
      weapons={character.weapons}
      />
  );
}

function renderMonstersGrid() {
  return (
    <div key='/api/monsters'>
      <Grid
        columns={["name", "size", "type", "alignment"]}
        dataType='json'
        dataUrl='/api/monsters'
        placeholderText='Search Monsters...'
        />
      <br />
    </div>
  );
}

function renderSpell(spell: Object, onCloseButtonClick: () => void) {
  return (
    <Spell
      closeButtonText='Got it!'
      description={spell.desc}
      name={spell.name}
      onCloseButtonClick={onCloseButtonClick}
      />
  );
}

function renderSpellsGrid(onRowClick: (gridRow: Object, event: Object) => void) {
  return (
    <div key='/api/spells'>
      <Grid
        columns={["name", "range", "components", "school"]}
        dataType='json'
        dataUrl='/api/spells'
        placeholderText='Search Spells...'
        onRowClick={onRowClick}
        />
      <br />
    </div>
  );
}

function imageUriForModel(model: string): string {
  if (model === 'Spells') {
    return 'http://icons.iconarchive.com/icons/icojoy/enjoyment/128/wizard-icon.png';
  } else if (model === 'Monsters') {
    return 'http://findicons.com/files/icons/176/monster/128/monster3.png';
  } else if (model === 'Green Archer') {
    return 'http://www.i2clipart.com/cliparts/c/e/8/c/clipart-archer-ce8c.png';
  }
}

function imageDimensionsForModel(model: string): string {
  return {width: 32, height: 32};
}

type DNDContainerProps = {};

export default class DNDContainer extends React.Component {
  props: DNDContainerProps;

  state: {
    armorClass: string,
    attributes: {},
    class: string,
    equipment: {},
    hitDice: string,
    isModalOpen: boolean,
    languages: [],
    level: string,
    maxHP: string,
    name: string,
    proficiency: string,
    race: string,
    renderCharacter: boolean,
    renderMonsters: boolean,
    renderSpells: boolean,
    selectedSpell: ?Object,
    senses: [],
    speed: string,
    weapons: {},
  };

  constructor(props: DNDContainerProps): void {
    super(props);
    this.state = {
      armorClass: '',
      attributes: {},
      class: '',
      equipment: {},
      hitDice: '',
      isModalOpen: false,
      languages: [],
      level: '',
      maxHP: '',
      name: null,
      proficiency: '',
      race: '',
      renderCharacter: false,
      renderMonsters: false,
      renderSpells: true,
      selectedSpell: null,
      senses: [],
      speed: '',
      weapons: {},
    };
  }

  closeModal(): void {
    this.setState({
      isModalOpen: false,
      selectedSpell: null,
    });
  }

  onSpellsRowClick(gridRow: Object, event: Object): void {
    this.setState({
      isModalOpen: true,
      selectedSpell: gridRow.props.data,
    });
  }

  setRenderStateForGrid(gridType: string) {
    if (gridType === 'Monsters') {
      this.setState({
        renderCharacter: false,
        renderMonsters: true,
        renderSpells: false,
      });
    } else if (gridType === 'Spells') {
      this.setState({
        renderCharacter: false,
        renderMonsters: false,
        renderSpells: true,
      });
    }
  }

  fetchCharacterData(uri: string) {
    fetchDataFromUri(uri, (response) => {
      const data: Object = response.data;
      this.setState({
        armorClass: data.armorClass,
        attributes: data.attributes,
        class: data.class,
        equipment: data.equipment,
        hitDice: data.hitDice,
        languages: data.languages,
        level: data.level,
        maxHP: data.maxHP,
        name: data.name,
        proficiency: data.proficiency,
        race: data.race,
        renderCharacter: true,
        renderMonsters: false,
        renderSpells: false,
        senses: data.senses,
        speed: data.speed,
        weapons: data.weapons,
      });
    });
  }

  getCharacterButtonModels() {
    return ['Green Archer'].map((name) => {
      const imageDimensions: Object = imageDimensionsForModel(name);
      return {
        imageWidth: imageDimensions.width,
        imageHeight: imageDimensions.height,
        imageUri: imageUriForModel(name),
        name: name,
        onClick: this.fetchCharacterData.bind(this, '/api/greenArcher'),
      };
    });
  }

  getSpellAndMonsterButtonModels() {
    return ['Monsters', 'Spells'].map((name) => {
      const imageDimensions: Object = imageDimensionsForModel(name);
      return {
        imageWidth: imageDimensions.width,
        imageHeight: imageDimensions.height,
        imageUri: imageUriForModel(name),
        name: name,
        onClick: this.setRenderStateForGrid.bind(this, name),
      };
    });
  }

  render() {
    const customStyles = {
      content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '800px',
        maxHeight: '80%',
        overflow: 'scroll',
      }
    }

    return (
      <div>
        <Header />

        <Flexbox flexDirection='row' justifyContent='space-between'>
          <Flexbox flexDirection='column' width='15%'>
            <CharacterButtons
              characters={this.getCharacterButtonModels()}
              />
            <CharacterButtons
              characters={this.getSpellAndMonsterButtonModels()}
              />
          </Flexbox>
          <Flexbox width='85%'>
            {this.state.renderMonsters ? renderMonstersGrid() : <div></div>}
            {
              this.state.renderSpells ?
                renderSpellsGrid(this.onSpellsRowClick.bind(this)) :
                <div></div>
            }
            {
              this.state.renderCharacter ?
                renderCharacter(this.state) :
                <div></div>
            }
          </Flexbox>
        </Flexbox>

        {
          this.state.isModalOpen && this.state.selectedSpell != null ?
          <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.closeModal.bind(this)}
            style={customStyles}
            contentLabel="Modal"
            >
            {renderSpell(this.state.selectedSpell, this.closeModal.bind(this))}
          </Modal> :
          <div></div>
        }
      </div>
    );
  }
};
