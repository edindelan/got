export const getPercent = (part, whole) => (part / whole) * 100;

export const getValueFromPercent = (percent, whole) => (whole / 100) * percent;

export const silentUrlChange = path => window.history.pushState({}, null, path);