without Icon
```js
const Tabs = require('./Tabs').Tabs;
 const tabData = [
      {
        value: "Soprts Illustrated",
        text: "Soprts Illustrated",
        selected: true
      },
      {
        value: "Fortune",
        text: "Fortune"
      }
    ];
    <div>
      <div className="Utils-row ">
                  <Tabs
                    theme="primary"
                    size="small"
                    name="main-tab"
                    direction="horizontal"
                    tabList={tabData}
                    tabContent="This is the content"
                    onTabClick={console.log}
                  />
                </div>
          </div>
```
With Icon
```js
const Tabs = require('./Tabs').Tabs;
 const tabData = [
      {
        value: "Soprts Illustrated",
        text: "Soprts Illustrated",
        
      },
      {
        value: "Fortune",
        text: "Fortune",
        selected: true
      }
    ];
    <div>
      <div className="Utils-row ">
                  <Tabs
                    theme="primary"
                    size="small"
                    name="main-tab"
                    direction="horizontal"
                    tabList={tabData}
                    tabContent="This is the content"
                    onTabClick={console.log}
                    iconAttached={true}
                    iconList={["class1", "class2", "class3", "class4","class5"]}
                  />
                </div>

          </div>
