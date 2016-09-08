var React = require('react');
var Griddle = require('griddle-react');

class SpellsGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spells: []};
  }

  loadSpellsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: true,
      success: function(data) {
        this.setState({spells: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount() {
    this.loadSpellsFromServer();
  }

  render() {
    return (
      <Griddle
        results={this.state.spells}
        enableInfiniteScroll={true}
        bodyHeight={400}
        useFixedHeader={true}
        columns={["name", "range", "components", "school"]}
        showSettings={true}
        showFilter={true}
        resultsPerPage={30} />
    );
  }
};

module.exports = SpellsGrid;
