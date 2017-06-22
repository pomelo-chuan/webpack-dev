import axios from 'axios'
import { fetchNewsLatest } from '../../../service/services';

export default class newsController {
    $log;
    constructor($log) {
        this.$log = $log;
    }

    async _fetch() {
        let result = await fetchNewsLatest();
        this.$log.info(result.data);
    }

    get() {
        this._fetch();
    }
}