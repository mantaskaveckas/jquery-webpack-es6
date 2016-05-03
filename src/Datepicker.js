import { datepicker } from 'jquery-ui';

class Datepicker {
  /**
   * Datepicker widget constructor.
   * @param  {string} target Target DOM Node ID.
   */
  constructor(target) {
    this.target = target;
  }

  /**
   * Creates datepicker instance.
   * @return {Object} Datepicker instance.
   */
  render() {
    return $(this.target).datepicker();
  }
}

export default Datepicker;
