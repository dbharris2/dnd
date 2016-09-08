/* @flow */

const React = require('react');
const Griddle = require('griddle-react');
const $ = require('jquery');

type MonstersGridProps = {
  url: string,
};

class MonstersGrid extends React.Component {
  props: MonstersGridProps;

  state: {
    monsters: [],
  };

  constructor(props: MonstersGridProps) {
    super(props);
    this.state = {monsters: []};
  }

  loadMonstersFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: true,
      success: function(data) {
        this.setState({monsters: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount() {
    this.loadMonstersFromServer();
  }

  render() {
    return (
      <Griddle
        results={this.state.monsters}
        enableInfiniteScroll={true}
        bodyHeight={400}
        useFixedHeader={true}
        columns={["name", "size", "type", "alignment"]}
        showSettings={true}
        showFilter={true}
        resultsPerPage={30}
        filterPlaceholderText='Search Monsters...' />
    );
  }
};

module.exports = MonstersGrid;
