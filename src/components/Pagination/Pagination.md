```js
const Pagination = require('./Pagination').Pagination;

<div>
    <div className="Utils-column">
            <Pagination
              totalPages={10}
              currentPage={3}
              window={5}
              look="clear"
              theme="transparent"
              size="small"
              goTo={console.log}
            />
          </div>
          <div><br/></div>
          <div className="Utils-column">
            <Pagination
              totalPages={9}
              currentPage={2}
              window={7}
              theme="primary"
              look="square"
              goTo={console.log}
              size="regular"
            />
          </div>

  </div>
