import Datepicker from './Datepicker';

/**
 * Handler function passed to `$.ready()`
 * guaranteed to be executed after the DOM is ready.
 */
$(() => new App);

class App {
  /**
   * Base application constructor.
   * @constructor
   */
  constructor() {
    new Datepicker('#datepicker').render();
  }
}
