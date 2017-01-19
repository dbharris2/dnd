/* @flow */

import React from 'react';
import Flexbox from 'flexbox-react';

import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import {
  transparent,
} from 'material-ui/styles/colors';

import Character from './character';
import Grid from './grid';
import Header from './header';

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
      isModalOpen: false,
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
    const actions: Array = [
      <FlatButton
        label="OK"
        primary={true}
        onClick={this.closeModal.bind(this)}
        />,
    ];

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

        <Dialog
          title={
            this.state.selectedSpell != null ?
            this.state.selectedSpell.name :
            ''
          }
          actions={actions}
          modal={false}
          open={this.state.isModalOpen}
          onRequestClose={this.closeModal.bind(this)}
          >
          {
            this.state.selectedSpell != null ?
            this.state.selectedSpell.desc :
            ''
          }
        </Dialog>
      </div>
    );
  }
};
