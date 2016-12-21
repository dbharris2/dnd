/* @flow */

const React: any = require('react');
const Griddle = require('griddle-react');

import {
  fetchDataFromUri,
} from './network_request_helpers.jsx';

type GridProps = {
  columns: Array<string>,
  dataType: string,
  dataUrl: string,
  onRowClick: (gridRow: Object, event: Object) => void,
  placeholderText: string,
};

export default class Grid extends React.Component {
  props: GridProps;

  state: {
    data: [],
  }

  constructor(props: GridProps): void {
    super(props);
    this.state = {data: []};
  }

  loadData(): void {
    fetchDataFromUri(this.props.dataUrl, (response) => {
      const data: Object = response.data;
      this.setState({data: data});
    });
  }

  componentDidMount(): void {
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
        filterPlaceholderText={this.props.placeholderText}
        onRowClick={this.props.onRowClick} />
    );
  }
};
