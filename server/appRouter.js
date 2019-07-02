import express from 'express';
import renderPage from '../libs/render-page';

import  { View as ViewHome,  } from '../app/page/home';

const router = express.Router();

/*
* Page Router, render html
*/

/*
* Pages
*/

/*
* Test component
*/
router.get('/', (req, res) => {
    renderPage(res, ViewHome, 'home');
});


export default router;






