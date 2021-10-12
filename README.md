# date-bin

Postgres [`date_bin`](https://www.postgresql.org/docs/devel/functions-datetime.html#FUNCTIONS-DATETIME-BIN) function in TypeScript.

## Usage

```node

import dateBin from './dateBin'

const interval = 5_400_000

const binned = dateBin(interval, new Date('2021-01-01 10:00:00'), new Date('2021-01-01 08:00:00'))

console.log(binned.toString()) // 09:30:00
```
