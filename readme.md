# React scrolling progress

This is a simple React component that allows you to show a scrolling progress bar in your React app.

## Installation
With Yarn:

```yarn add react-scrolling-progress```

With NPM:

```npm i react-scrolling-progress```


## Usage
### Default
This is the simpliest way to use the component.
```javascript
import React from 'react';
import ScrollProgress from 'react-scrolling-progress';

const MyComponent = () => {
    return (
        <div>
            <ScrollProgress />
        </div>
    )
}
```
### Customize
This will create a green bar, with height of 45px at the bottom of your website.
```javascript
import React from 'react';
import ScrollProgress from 'react-scrolling-progress';

const MyComponent = () => {
    return (
        <div>
            <ScrollProgress
                position="bottom"
                backgroundColor="#1EE94D"
                barSize={45}
                />
        </div>
    )
}
```
### Props
|Prop name|Type|Default value|
|---|---|---|
| styles  | Object  | Default component styles  |
| position  | String, one of: 'top','bottom', 'left', 'right| 'top'|
|className |string   |'progress-bar'   |
|barSize|number or string   |20   |


