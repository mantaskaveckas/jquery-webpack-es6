import Datepicker from './Datepicker';

class App {
  constructor() {
    new Datepicker('#datepicker').render();
  }
}

$(() => new App);
