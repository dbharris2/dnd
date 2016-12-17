/* @flow */

const React: any = require('react');
const Modal = require('react-modal');

import Character from './character.jsx';
import Grid from './grid.jsx';
import List from './list.jsx';
import Spell from './spell.jsx';

type DNDContainerProps = {};

export default class DNDContainer extends React.Component {
  props: DNDContainerProps;

  state: {
    isModalOpen: boolean,
    selectedCharacterName: ?string,
    selectedSpell: ?Object,
  }

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

  monstersGrid(): React$Element<{}> {
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

  spellsGrid(): React$Element<{}> {
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

  grid(gridType: string): ?React$Element<{}> {
    if (gridType === 'monsters') {
      return this.monstersGrid();
    } else if (gridType === 'spells') {
      return this.spellsGrid();
    } else {
      return null;
    }
  }

  greenArcher(): React$Element<{}> {
    return (
      <Character
        dataType='json'
        dataUrl='/api/greenArcher'
        />
    );
  }

  renderCharacter(name: string): ?React$Element<{}> {
    if (name === 'Green Archer') {
      return this.greenArcher();
    } else {
      return null;
    }
  }

  renderCharacterButton(
    name: string,
    onButtonClick: () => void,
  ): React$Element<{}> {
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

  renderCharacterButtons(name: string): React$Element<{}> {
    return this.renderCharacterButton(
      name,
      this.onCharacterButtonClick.bind(this, name),
    );
  }

  renderSpell(spell: Object): React$Element<{}> {
    return (
      <Spell
        closeButtonText='Got it!'
        description={spell.desc}
        name={spell.name}
        onCloseButtonClick={this.closeModal.bind(this)}
        />
    );
  }

  render(): React$Element<{}> {
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        maxWidth              : '800px'
      }
    };

    return (
      <div>
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
