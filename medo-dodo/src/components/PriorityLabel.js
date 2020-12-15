import React, {useState, useEffect} from 'react'

const PriorityLabel = (props) => {
    const [priority, setPriority] = useState(props.value)
    const [title, setTitle] = useState('high')

    return (
    <div className={priority}> {title} </div>
    );
}

export default PriorityLabel