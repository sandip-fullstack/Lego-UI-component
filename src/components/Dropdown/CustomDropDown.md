Custom DropDown example:

DropDown with Search
```js
const CustomDropDown = require('./CustomDropDown').CustomDropDown;
<CustomDropDown label='Sort by :' optionList = {["Net Sales", "FY 19 IMU %", "FY 19 SP %", "FY 19 TD %"]}
                    searchable={true} objectKeyIndex='1'
                    defaultText = 'Net Sales'
                    withBorder={true}/>
```

DropDown without Search

```js
const CustomDropDown = require('./CustomDropDown').CustomDropDown;
<CustomDropDown label='Sort by :' optionList = {["Net Sales", "FY 19 IMU %", "FY 19 SP %", "FY 19 TD %"]}
                    searchable={false} objectKeyIndex='1'
                    defaultText = 'Net Sales'
                    withBorder={true}/>
```
DropDown without border
```js
const CustomDropDown = require('./CustomDropDown').CustomDropDown;
<CustomDropDown label='Sort by :' optionList = {["Net Sales", "FY 19 IMU %", "FY 19 SP %", "FY 19 TD %"]}
                    searchable={false} objectKeyIndex='1'
                    defaultText = 'Net Sales'
                    withBorder={false}/>
```