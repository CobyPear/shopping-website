import React from 'react'
import { FormControl } from 'react-bootstrap'

const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy, value, setValue }, ref) => {

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        )
    },
)

CustomMenu.defaultProps = {
    value: '',
    style: {},
    ref: '',
}
export default CustomMenu