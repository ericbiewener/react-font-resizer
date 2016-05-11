# React Font Resizer
Automatically resizes the font to prevent it from overflowing its container. The font will not increase over its initial size, but it will shrink as much as necessary.

## Use
Since this package works by checking if the element is overflowing its container, the element whose text you want resized needs to have `white-space: nowrap` or `white-space: pre` to prevent it from wrapping. 

```js
import FontResizer from 'react-font-resizer'

const MyComponent = ({text}) => (
    <FontResizer>
        <div style={{whiteSpace: 'nowrap'}}>{text}</div>
    </FontResizer>
)
```
