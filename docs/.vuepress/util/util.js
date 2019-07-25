var util = {
  random: function(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
  },

  randomColor: function() {
    return [
      '#f44336',
      '#e91e63',
      '#9c27b0',
      '#673ab7',
      '#3f51b5',
      '#2196f3',
      '#03a9f4',
      '#00bcd4',
      '#009688',
      '#4caf50',
      '#8bc34a',
      '#cddc39',
      '#ffeb3b',
      '#ffc107',
      '#ff9800',
      '#ff5722',
      '#795548',
      '#9e9e9e',
      '#607d8b'
    ][util.random(0, 18)]
    // return '#'+(Math.random()*0xffffff<<0).toString(16);
  },
  map: function(value, start, end, valueStart, valueEnd) {
    return valueStart + ((valueEnd - valueStart) * value) / (end - start)
  },
  randomSpeed: function() {
    return (Math.random() > 0.5 ? 1 : -1) * Math.random() * 2
  }
}

export default util
