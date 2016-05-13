# React Font Resizer
Automatically resizes the font to prevent it from overflowing its container. The font will not increase over its initial size, but it will shrink as much as necessary.

## Use
The DOM hierarchy under a `FontResizer` component may be as complex as you wish, but there must be at least one child element (i.e. the text inside of a `FontResizer` component can not be a direct child text node of the component). 

```js
import FontResizer from 'react-font-resizer'

const MyComponent = ({text}) => (
    <FontResizer>
        <div>{text}</div>
    </FontResizer>
)
```

See the `examples` folder for a working demo.