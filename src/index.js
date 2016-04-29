import Datepicker from './Datepicker';

/**
 * IIFE combined with `$(document).ready`.
 * @function
 */
$(() => {
  class App {
    /**
     * Base application constructor.
     * @constructor
     */
    constructor() {
      new Datepicker('#datepicker').render();
    }
  }

  /**
   * Initialize application.
   */
  new App();
});
