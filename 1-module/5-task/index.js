function truncate(string, maxlength) {
  if (string.length < maxlength) {
    return string;
  } else {
    return string.slice(0, maxlength - 1) + '…';
  }
}
