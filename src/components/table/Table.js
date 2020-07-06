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
    if (event.target.dataset.resize) {
      const $resizer=$(event.target);
      const $parent=$resizer.closest('[date-type="resizable"]'); // Best practice
      const coords=$parent.getCoords();
      const type=$resizer.data.resize;
      const sideProp=type==='col'?'bottom':'right';
      let value;
      $resizer.css({
        opacity: 1,
        [sideProp]: '-5000px'
      });
      // const cells=this.$root.findAll(`[data-col="${$parent.data.col}"]`);
      document.onmousemove=e=>{
        if (type==='col') {
          const delta=e.pageX-coords.right;
          value=coords.width+delta;
          $resizer.css({right: -delta + 'px'});
          // $parent.css({width: value+'px'});
          // cells.forEach(el=>el.style.width=value+ 'px');
        } else {
           const delta=e.pageY-coords.bottom;
           value=coords.height+delta;
           $resizer.css({bottom: -delta + 'px'});
          // $parent.css({height: value+'px'});
        }
      };
      document.onmouseup=()=>{
        document.onmousemove=null;
        document.onmouseup=null;
        if (type==='col') {
          $parent.css({width: value+'px'});
          this.$root.findAll(`[data-col="${$parent.data.col}"]`)
              .forEach(el=>el.style.width=value+ 'px');
        } else {
          $parent.css({height: value+'px'});
        }
        $resizer.css({
          opacity: 0,
          bottom: 0,
          right: 0
        });
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
