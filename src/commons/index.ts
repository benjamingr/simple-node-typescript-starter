// Built With ♡ 'PK' (www.pavel-kaminsky.com)
// All Rights Reserved.

import chalk, {Chalk} from "chalk";
import * as moment from "moment";

export const log = (msg: any, color?: Chalk) =>
    console.log(`[${chalk.yellow.bold(moment().format('DD-MM-YY h:mm:ss'))}]`,
        (color || chalk.blue.bold)(JSON.stringify(msg)));

export const debug = (msg: any, color?: Chalk) => {
        console.log(`[${chalk.yellow.bold(moment().format('DD-MM-YY h:mm:ss'))}]`, (color || chalk.greenBright.bold)(JSON.stringify(msg)));
};

export const error = (msg: any, err: Error = new Error(), color?: Chalk) =>
    console.log(`[${chalk.red(moment().format('DD-MM-YY h:mm:ss'))}]`,
        (color || chalk.red)(msg), (color || chalk.red)(err.toString()));