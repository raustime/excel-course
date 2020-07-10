import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
    constructor($root, options= {}) {
      super($root, options.listeners);
      this.name= options.name || '';
      this.prepare();
      this.emitter= options.emitter;
      this.unsubscribers=[];
    }
  // Настраеваем компонент до init
  prepare() {
  }

  // Возвращает шаблон компонента
  toHTML() {
    return '';
  }

  // Инициализируем компонент
  // добавляем DOM слушателей
  init() {
    this.initDOMListeners();
  }

  // уведомляем слушателей про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  // подписываемся на событие event
  $on(event, fn) {
    const unsub=this.emitter.subscribe(event, fn);
    this.unsubscribers.push[unsub];
  }

  // Удаляем компонент
  // чистим слушателей
  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach(unsub=>unsub());
  }
}
