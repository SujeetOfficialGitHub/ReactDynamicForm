import { Button } from '@mui/joy'
import React from 'react'

const CstButton = (props) => {
    const { title,  onClick } = props;
    return (
        <Button
            onClick={onClick}
        >
            {title}
        </Button>
    )
}

export default CstButton
