import React, { useId } from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
}, ref) {

    const id = useId();
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className={``}></label>}
            <select
                name=""
                id={id}
                {...props}
                ref={ref}
                className={`px-3 py-2 rounded-sm bg-white text-black outline-none focus:bg-gray-100 duration-200 border border-gray-500 w-full ${className}`}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)
