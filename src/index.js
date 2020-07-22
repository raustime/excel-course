import {Router} from '@core/routes/Router';
import {DashBoardPage} from '@/pages/DashboardPage';
import {ExcelPage} from '@/pages/ExcelPage';
import './scss/index.scss';

new Router('#app', {
  dashboard: DashBoardPage,
  excel: ExcelPage
});


