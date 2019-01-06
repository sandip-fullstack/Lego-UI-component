LinkButton example:

```js
const LinkButton = require('./LinkButton').LinkButton;
<div>
  <LinkButton
    href="mailto:sandip.pal@walmartlabs.com"
    text="Primary Button"
  /> {" "}
  <LinkButton
    href="mailto:sandip.pal@walmartlabs.com"
    text="Secondary Button"
    theme="secondary"
  />{" "}
  <LinkButton
    href="mailto:sandip.pal@walmartlabs.com"
    text="warning Button"
    theme="warning"
  />{" "}
  <LinkButton
    href="mailto:sandip.pal@walmartlabs.com"
    text="Danger Button"
    theme="danger"
  />{" "}
  <LinkButton
    href="mailto:sandip.pal@walmartlabs.com"
    text="Success Button"
    theme="success"
  />{" "}
  <LinkButton
    href="mailto:sandip.pal@walmartlabs.com"
    text="Transparent Button"
    theme="transparent"
  />
</div>
```

LinkButton with sizes:

```js
const LinkButton = require('./LinkButton').LinkButton;
<div>
  <LinkButton
    href="mailto:sandip.pal@walmartlabs.com"
    size="small"
    text="Small Button"
  /> {" "}
  <LinkButton
    href="mailto:sandip.pal@walmartlabs.com"
    text="Regular Button"
    size="regular"
  />{" "}
  <LinkButton
    href="mailto:sandip.pal@walmartlabs.com"
    text="Large Button"
    size="large"
  />{" "}
</div>
```

LinkButton with looks:

```js
const LinkButton = require('./LinkButton').LinkButton;
<div>
  <LinkButton
    href="mailto:sandip.pal@walmartlabs.com"
    look="normal"
    text="Normal Button"
  /> {" "}
  <LinkButton
    href="mailto:sandip.pal@walmartlabs.com"
    look="rounded"
    text="Rounded Button"
  /> {" "}
  <LinkButton
    href="mailto:sandip.pal@walmartlabs.com"
    look="clear"
    text="Clear Button"
    theme="transparent"
  /> {" "}
  <LinkButton
    href="mailto:sandip.pal@walmartlabs.com"
    look="square"
    text="Square Button"
  /> {" "}
  <LinkButton
    href="mailto:sandip.pal@walmartlabs.com"
    look="circle"
    text="C"
  /> {" "}

</div>
```
LinkButton with icons:

```js
const LinkButton = require('./LinkButton').LinkButton;
const Correct = require('../SvgIcons/SvgIcons').Correct;
<div>
  <LinkButton
    href="mailto:sandip.pal@walmartlabs.com"
    size="small"
    text="With Icon Button"
    icon={Correct}
  />
</div>
```


LinkButton with highlight state:

```js
const LinkButton = require('./LinkButton').LinkButton;
const Correct = require('../SvgIcons/SvgIcons').Correct;
<div>

  <span className="Column-small">
    <LinkButton
      href="mailto:sandip.pal@walmartlabs.com"
      text="Primary"
      highlight={true}
    />
  </span>

  <span className="Column-small">
     <LinkButton
      href="mailto:sandip.pal@walmartlabs.com"
      theme="secondary"
      text="Primary"
      highlight={true}
    />

  </span>

  <span className="Column-small">
   <LinkButton
      href="mailto:sandip.pal@walmartlabs.com"
      theme="warning"
      text="Warning"
      highlight={true}
    />
  </span>

  <span className="Column-small">
   <LinkButton
      href="mailto:sandip.pal@walmartlabs.com"
      theme="danger"
      text="Danger"
      highlight={true}
    />
  </span>
</div>
```
