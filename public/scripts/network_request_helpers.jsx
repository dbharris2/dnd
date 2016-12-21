import axios from 'axios';

export function fetchDataFromUri(
  uri: string,
  onSuccess,
) {
  axios.get(uri).then((response) => {
    onSuccess(response);
  });
}
