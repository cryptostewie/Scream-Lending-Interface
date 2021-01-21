import React, { FC, ReactNode } from 'react'
import './ContentCard.scss'
interface Props {
    children: ReactNode
}

const ContentCard: FC<Props> = (props) => {
    return (
        <>
            <div className="card content-card">
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </>
    )
}
export default ContentCard