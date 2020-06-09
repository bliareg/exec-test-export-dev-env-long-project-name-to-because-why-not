import axios from 'axios';
import { generateRequestSettingsBinary } from './requestSettings';


/* Configure it.
 * Response type is application/vnd.openxmlformats-officedocument.spreadsheetml.sheet of binary file.
*/
async function binaryExportRequest() {
  const { url, headers } = generateRequestSettingsBinary();

  axios({
    method: 'GET',
    url,
    headers
  })
}


export { binaryExportRequest };
