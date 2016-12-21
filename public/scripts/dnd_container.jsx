/* @flow */

const React: any = require('react');
const Modal = require('react-modal');

import Character from './character';
import Grid from './grid';
import Header from './header';
import List from './list';
import Spell from './spell';

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

  monstersGrid() {
    return (
      <div key='/api/monsters'>
        <Grid
          columns={["name", "size", "type", "alignment"]}
          dataType='json'
          dataUrl='/api/monsters'
          placeholderText='Search Monsters...'
          onRowClick={this.closeModal.bind(this)}
          />
        <br />
      </div>
    );
  }

  spellsGrid() {
    return (
      <div key='/api/spells'>
        <Grid
          columns={["name", "range", "components", "school"]}
          dataType='json'
          dataUrl='/api/spells'
          placeholderText='Search Spells...'
          onRowClick={this.onSpellsRowClick.bind(this)}
          />
        <br />
      </div>
    );
  }

  grid(gridType: string) {
    if (gridType === 'monsters') {
      return this.monstersGrid();
    } else if (gridType === 'spells') {
      return this.spellsGrid();
    } else {
      return null;
    }
  }

  greenArcher() {
    return (
      <Character
        dataType='json'
        dataUrl='/api/greenArcher'
        />
    );
  }

  renderCharacter(name: string) {
    if (name === 'Green Archer') {
      return this.greenArcher();
    } else {
      return null;
    }
  }

  renderCharacterButton(
    name: string,
    onButtonClick: () => void,
  ) {
    return(
      <button
        type="button"
        className="btn btn-primary"
        onClick={onButtonClick}
        key={name}
        >
        {name}
      </button>
    );
  }

  onCharacterButtonClick(name: string): void {
    this.setState({
      isModalOpen: true,
      selectedCharacterName: name,
    });
  }

  renderCharacterButtons(name: string) {
    return this.renderCharacterButton(
      name,
      this.onCharacterButtonClick.bind(this, name),
    );
  }

  renderSpell(spell: Object) {
    return (
      <Spell
        closeButtonText='Got it!'
        description={spell.desc}
        name={spell.name}
        onCloseButtonClick={this.closeModal.bind(this)}
        />
    );
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
          componentBlock={this.grid.bind(this)}
          />

        {
          this.state.isModalOpen ?
          <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.closeModal.bind(this)}
            style={customStyles}
            >
            {
              this.state.selectedSpell != null ?
                this.renderSpell(this.state.selectedSpell) :
                  <div></div>
            }
            {
              this.state.selectedCharacterName != null ?
                this.renderCharacter(this.state.selectedCharacterName) :
                <div></div>
            }
          </Modal> :
          <div></div>
        }
      </div>
    );
  }
};
