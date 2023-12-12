import About from './components/Team/About.vue'
import MainBody from './components/Index/MainBody.vue'
import NonTax from './components/NonTaxIncome/NonTax.vue'
import Expenditure from './components/Expenditure/Expenditure.vue'
import Schemes from './components/Schemes/Schemes.vue'

const routes = [
  { path: '', component: MainBody},
  { path: '/About', component: About },
  { path: '/NonTax', component: NonTax},
  { path: '/Expenditure', component: Expenditure},
  { path: '/Schemes', component: Schemes},
];

export default routes;
