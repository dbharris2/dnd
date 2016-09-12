/* @flow */

const React: any = require('react');
const Modal = require('react-modal');

import Grid from './grid.jsx';
import List from './list.jsx';

type DNDContainerProps = {};

export default class DNDContainer extends React.Component {
  props: DNDContainerProps;

  state: {
    isModalOpen: boolean,
    selectedSpell: ?Object,
  }

  constructor(props: DNDContainerProps): void {
    super(props);
    this.state = {
      isModalOpen: false,
      selectedSpell: null,
    };
  }

  closeModal(): void {
    this.setState({isModalOpen: false});
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
          onRowClick={this.closeModal.bind(this)} />
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
          key='/api/spells'
          placeholderText='Search Spells...'
          onRowClick={this.onSpellsRowClick.bind(this)} />
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

  render(): React$Element<{}> {
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        maxWidth              : '800'
      }
    };

    return (
      <div>
        <List
          items={['monsters', 'spells']}
          componentBlock={this.grid.bind(this)} />

        {
          this.state.isModalOpen && this.state.selectedSpell != null ?
          <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.closeModal.bind(this)}
            style={customStyles}>

            <h2 ref="subtitle">{this.state.selectedSpell.name}</h2>
            <div>
              {this.state.selectedSpell.desc}
            </div>
            <br />
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.closeModal.bind(this)}>
              Got it!
            </button>
          </Modal> :
          <div></div>
        }
      </div>
    );
  }
};
