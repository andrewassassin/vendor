import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
//import VueAxios from 'vue-axios'

import PrimeVue from 'primevue/config';
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import AddTable from "@/components/AddTable";
import Button from 'primevue/button';
import FileUpload from 'primevue/fileupload';
import Checkbox from 'primevue/checkbox';
import Menubar from "primevue/menubar";
import TieredMenu from "primevue/tieredmenu";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import DataTable from 'primevue/datatable';
import Textarea from "primevue/textarea";
import Column from 'primevue/column';
import MultiSelect from 'primevue/multiselect';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Password from 'primevue/password';
import Divider from 'primevue/divider';
import Dialog from 'primevue/dialog';
import Steps from 'primevue/steps';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import "./index.scss";

//i18n
import i18n from './plugins/i18n' // 引入


const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(store);
app.use(PrimeVue);
app.use(ToastService)
// app.use(axios);
//app.use(VueAxios,axios);
app.component('AddTable', AddTable);
app.component('FileUpload', FileUpload);
app.component('Menubar', Menubar);
app.component('Button', Button);
app.component('Checkbox', Checkbox);
app.component('TieredMenu', TieredMenu);
app.component('InputText', InputText);
app.component('Dropdown', Dropdown);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Textarea', Textarea);
app.component('MultiSelect', MultiSelect);
app.component('Calendar', Calendar);
app.component('Card', Card);
app.component('Password', Password);
app.component('Divider', Divider);
app.component('Dialog', Dialog);
app.component('Steps', Steps);
app.component('Toast', Toast);
app.mount('#app');