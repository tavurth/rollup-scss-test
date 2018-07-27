import nanoId from 'nano-id';

import alert from './alert';
import { version } from '../package.json';

export default function nano() {
    console.log(version, nanoId(), alert);
}
