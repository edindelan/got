import API from '../api';

export const getPercent = (part, whole) => (part / whole) * 100;

export const getValueFromPercent = (percent, whole) => (whole / 100) * percent;

export const silentUrlChange = (path) => window.history.pushState({}, null, path);

export const displayServerError = (url, status) => {
  throw new Error(`Error occurred while retrieving data from ${url}. 
    Server responded with status: ${status}`);
}
