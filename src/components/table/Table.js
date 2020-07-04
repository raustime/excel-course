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
      const type=$resizer.data.resize;
      // const $parent=$resizer.$el.parentNode; // Bad practice!
      // const $parent=$resizer.$el.closest('.column'); // better, but still not enough
      const $parent=$resizer.closest('[date-type="resizable"]'); // Best practice

      const coords=$parent.getCoords();
      const cells=this.$root.findAll(`[data-col="${$parent.data.col}"]`);
      document.onmousemove=e=>{
        if (type==='col') {
          const delta=e.pageX-coords.right;
          const value=coords.width+delta;
          $parent.$el.style.width=value+'px';
          cells.forEach(el=>el.style.width=value+ 'px');
        } else {
          const delta=e.pageY-coords.bottom;
          const value=coords.height+delta;
          $parent.$el.style.height=value+'px';
        }
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
