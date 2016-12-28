/* @flow */

import React from 'react';
import Modal from 'react-modal';

import Background from './background';
import Button from './button';
import Character from './character';
import Grid from './grid';
import Header from './header';
import List from './list';
import Spell from './spell';

function greenArcher() {
  return (
    <Character
      dataType='json'
      dataUrl='/api/greenArcher'
      />
  );
}

function renderCharacterWithName(name: string) {
  if (name === 'Green Archer') {
    return greenArcher();
  } else {
    return null;
  }
}

function renderCharacterButton(
  name: string,
  onButtonClick: () => void,
) {
  return(
    <Button
      className="btn btn-primary"
      onClick={onButtonClick}
      text={name}
      containerDivStyle={{display: "inline-block"}}
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

type DNDContainerProps = {};

export default class DNDContainer extends React.Component {
  props: DNDContainerProps;

  state: {
    isModalOpen: boolean,
    selectedCharacterName: ?string,
    selectedSpell: ?Object,
  };

  constructor(props: DNDContainerProps): void {
    super(props);
    this.state = {
      isModalOpen: false,
      selectedCharacterName: null,
      selectedSpell: null,
    };
  }

  closeModal(): void {
    this.setState({
      isModalOpen: false,
      selectedCharacterName: null,
      selectedSpell: null,
    });
  }

  onSpellsRowClick(gridRow: Object, event: Object): void {
    this.setState({
      isModalOpen: true,
      selectedSpell: gridRow.props.data,
    });
  }

  renderGrid(gridType: string) {
    if (gridType === 'monsters') {
      return renderMonstersGrid();
    } else if (gridType === 'spells') {
      return renderSpellsGrid(this.onSpellsRowClick.bind(this));
    } else {
      return null;
    }
  }

  onCharacterButtonClick(name: string): void {
    this.setState({
      isModalOpen: true,
      selectedCharacterName: name,
    });
  }

  renderCharacterButtons(buttonText: string) {
    return [buttonText].map((name) => {
      return renderCharacterButton(
        name,
        this.onCharacterButtonClick.bind(this, name),
      );
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
    };

    return (
      <div>
        <Header />
        <List
          items={['Green Archer']}
          componentBlock={this.renderCharacterButtons.bind(this)}
          />

        <br />

        <List
          items={['monsters', 'spells']}
          componentBlock={this.renderGrid.bind(this)}
          />

        {
          this.state.isModalOpen ?
          <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.closeModal.bind(this)}
            style={customStyles}
            contentLabel="Modal"
            >
            {
              this.state.selectedSpell != null ?
                renderSpell(this.state.selectedSpell, this.closeModal.bind(this)) :
                  <div></div>
            }
            {
              this.state.selectedCharacterName != null ?
                renderCharacterWithName(this.state.selectedCharacterName) :
                <div></div>
            }
          </Modal> :
          <div></div>
        }
      </div>
    );
  }
};
