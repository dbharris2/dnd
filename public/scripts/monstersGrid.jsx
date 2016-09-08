var React = require('react');
var Griddle = require('griddle-react');

class MonstersGrid extends React.Component {
  constructor(props) {
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
        resultsPerPage={30} />
    );
  }
});

module.exports = MonstersGrid;
