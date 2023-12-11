// routes.js
import About from './components/Team/About.vue'
import MainBody from './components/Index/MainBody.vue'
import NonTax from './components/NonTaxIncome/NonTax.vue'
import Expenditure from './components/Expenditure/Expenditure.vue'

const routes = [
  { path: '', component: MainBody},
  { path: '/About', component: About },
  { path: '/NonTax', component: NonTax},
  { path: '/Expenditure', component: Expenditure}
];

export default routes;
