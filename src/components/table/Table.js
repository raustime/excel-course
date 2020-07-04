import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from './table.template';
import {$} from '@core/dom';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    });
  }

  // onClick(event) {
  //   console.log('click', event.target);
  // }

  onMousedown(event) {
    // console.log(event.target.getAttribute('data-resize'));
    if (event.target.dataset.resize) {
      // console.log('Resizing:', event.target.dataset.resize);
      const $resizer=$(event.target);
      // const $parent=$resizer.$el.parentNode; // Bad practice!
      // const $parent=$resizer.$el.closest('.column'); // better, but still not enough
      const $parent=$resizer.closest('[date-type="resizable"]'); // Best practice

      const coords=$parent.getCoords();

      document.onmousemove=e=>{
        const delta=e.pageX-coords.right;
        const value=coords.width+delta;
        $parent.$el.style.width=value+'px';
      };
      document.onmouseup=()=>{
        document.onmousemove=null;
      };
    }
  }

  // onMousemove() {
  //   console.log('mousemove');
  // }

  // onMouseup() {
  //   console.log('mouseup');
  // }

  toHTML() {
    return createTable(20);
  }
}
