/* @flow */

const $ = require('jquery');
const React = require('react');
const Griddle = require('griddle-react');

type GridProps = {
  columns: Array<string>,
  dataType: string,
  dataUrl: string,
  placeholderText: string,
};

export default class Grid extends React.Component {
  props: GridProps;

  state: {
    data: [],
  }

  constructor(props: GridProps) {
    super(props);
    this.state = {data: []};
  }

  loadData() {
    $.ajax({
      url: this.props.dataUrl,
      dataType: this.props.dataType,
      cache: true,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.dataUrl, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <Griddle
        results={this.state.data}
        enableInfiniteScroll={true}
        bodyHeight={400}
        useFixedHeader={true}
        columns={this.props.columns}
        showSettings={true}
        showFilter={true}
        resultsPerPage={30}
        filterPlaceholderText={this.props.placeholderText} />
    );
  }
};
