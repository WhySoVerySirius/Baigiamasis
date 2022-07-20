import React from "react";

export default function Layout({children, type})
{
    return type === 'multiple'
    ?(
        <>
        <h1>Multiple</h1>
            {children}
        </>
    )
    :(
        <>
        <h1>Single</h1>
        {children}
        </>
    )
}