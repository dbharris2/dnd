/* @flow */

import React from 'react';
import Flexbox from 'flexbox-react';
import Modal from 'react-modal';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import {
  transparent,
} from 'material-ui/styles/colors';

import Character from './character';
import Grid from './grid';
import Header from './header';
import Spell from './spell';

import {
  fetchDataFromUri,
} from './network_request_helpers.jsx';

function renderCharacter(character: Object) {
  return (
    <Character
      armorClass={character.armorClass}
      attributes={character.attributes}
      cantrips={character.cantrips}
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
      spells={character.spells}
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

function avatarForModel(model: string) {
  return (
    <Avatar
      src={imageUriForModel(model)}
      backgroundColor={transparent}
      />
  );
}

function listItemForModel(model: string, onClick: () => void) {
  return (
    <ListItem
      key={model}
      leftAvatar={avatarForModel(model)}
      primaryText={model}
      onClick={onClick}
      />
  );
}

function renderCharacters(characters: Array) {
  const characterElements: Object = characters.map((character) => {
    return listItemForModel(character.name, character.onClick);
  });
  return (
    <div>
      <Subheader>
        Characters
      </Subheader>
      <List>
        {characterElements}
      </List>
    </div>
  );
}

function renderResources(resources: Array) {
  const resourceElements: Object = resources.map((resource) => {
    return listItemForModel(resource.name, resource.onClick);
  });
  return (
    <div>
      <Subheader>
        Resources
      </Subheader>
      <List>
        {resourceElements}
      </List>
    </div>
  );
}

type DNDContainerProps = {};

export default class DNDContainer extends React.Component {
  props: DNDContainerProps;

  state: {
    character: ?Object,
    renderMonsters: boolean,
    renderSpells: boolean,
    selectedSpell: ?Object,
  };

  constructor(props: DNDContainerProps): void {
    super(props);
    this.state = {
      character: null,
      renderMonsters: false,
      renderSpells: true,
      selectedSpell: null,
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
    this.setState({
      character: null,
      renderMonsters: gridType === 'Monsters',
      renderSpells: gridType === 'Spells',
    });
  }

  fetchCharacterData(uri: string) {
    fetchDataFromUri(uri, (response) => {
      const character: Object = response.data;
      this.setState({
        character: character,
        renderMonsters: false,
        renderSpells: false,
      });
    });
  }

  getCharacters() {
    return [
      {
        name: 'Green Archer',
        onClick: this.fetchCharacterData.bind(this, '/api/greenArcher'),
      },
    ];
  }

  getResources() {
    return [
      {
        name: 'Monsters',
        onClick: this.setRenderStateForGrid.bind(this, 'Monsters'),
      },
      {
        name: 'Spells',
        onClick: this.setRenderStateForGrid.bind(this, 'Spells'),
      },
    ];
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
          <Flexbox flexDirection='column' width='20%'>
            {renderCharacters(this.getCharacters())}
            {renderResources(this.getResources())}
          </Flexbox>
          <Flexbox flexDirection='column' width='2%'>
              <div></div>
          </Flexbox>
          <Flexbox width='78%'>
            {this.state.renderMonsters ? renderMonstersGrid() : <div></div>}
            {
              this.state.renderSpells ?
                renderSpellsGrid(this.onSpellsRowClick.bind(this)) :
                <div></div>
            }
            {
              this.state.character != null ?
                renderCharacter(this.state.character) :
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
