import * as sapper from '@sapper/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.min.css'
import 'bulma-social/bin/bulma-social.min.css'

sapper.start({
	target: document.querySelector('#sapper')
});
