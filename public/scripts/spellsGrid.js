var SpellsGrid = React.createClass({
  loadSpellsFromServer: function() {
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
  },
  getInitialState: function() {
    return {spells: []};
  },
  componentDidMount: function() {
    this.loadSpellsFromServer();
  },
  render: function() {
    return (
      <Griddle
        results={this.state.spells}
        enableInfiniteScroll={true}
        bodyHeight={400}
        useFixedHeader={true}
        columns={["name", "range", "components", "school"]}
        showSettings={true}
        showFilter={true} />
    );
  }
});

ReactDOM.render(
  <SpellsGrid url='/api/spells' />,
  document.getElementById('content')
);
