/* @flow */

import React from 'react';
import Griddle from 'griddle-react';

import {
  fetchDataFromUri,
} from './network_request_helpers.jsx';

type GridProps = {
  columns: Array<string>,
  data: Array<Object>,
  onRowClick: (gridRow: Object, event: Object) => void,
  placeholderText: string,
};

export default function Grid(props: GridProps) {
  return (
    <Griddle
      results={props.data}
      enableInfiniteScroll={true}
      bodyHeight={500}
      paddingHeight={10}
      useFixedHeader={true}
      columns={props.columns}
      showSettings={true}
      showFilter={true}
      resultsPerPage={30}
      filterPlaceholderText={props.placeholderText}
      onRowClick={props.onRowClick} />
  );
};
