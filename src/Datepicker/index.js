import { datepicker } from 'jquery-ui';
import './style.scss';

class Datepicker {
  constructor(target) {
    this.target = target;
  }

  render() {
    return $(this.target).datepicker();
  }
}

export default Datepicker;
