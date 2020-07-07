import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from './table.template';
import {resizeHandler} from './table.resize';
import {shouldResize} from './table.functions';
import {TableSelection} from './TableSelection';


export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    });
  }

  prepare() {
    this.selection=new TableSelection();
  }
  toHTML() {
    return createTable(20);
  }

  init() {
    super.init();
    const $cell=this.$root.find('[data-id="0:0"]');
    this.selection.select($cell);
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      event.preventDefault();
      resizeHandler(this.$root, event);
    }
  }
}
