import React from 'react'

export function H(props) {
    const { children, className, as='h6', weight='Bold' } = props
    return (
        <h1 className={`${className} text-${as} font-E${weight} dark:text-white`}>{children}</h1>
    )
}
export function Label(props) {
    const { children, className, as, weight } = props
    return (
        <p className={`text-${as ?? 'l1'} font-E${weight ?? 'Medium'} dark:text-white ${className}`}>{children}</p>
    )
}
export function P(props) {
    const { children, className, as, weight } = props
    return (
        <p className={`${className} text-${as ?? 'p1'} font-E${weight ?? 'Reguler'} text-gray-800 dark:text-gray-400`}>{children}</p>
    )
}
export function Span(props) {
    const { children, className, as, weight } = props
    return (
        <span className={`text-${as ?? 'p1'} font-E${weight ?? 'Reguler'} text-gray-800 dark:text-gray-400 ${className}`}>{children}</span>
    )
}