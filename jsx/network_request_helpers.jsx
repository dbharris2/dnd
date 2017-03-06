import axios from 'axios';

export function fetchDataFromUri(
  uri: string,
  onSuccess: func,
): void {
  axios.get(uri).then((response) => {
    onSuccess(response);
  });
}
