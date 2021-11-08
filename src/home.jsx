import {Button} from 'react-bootstrap';

export default function home() {
    return (
        <div id='home'>
            <Button href="/free" variant='primary' size = "lg">
                Free
            </Button>
            <Button href="/normal" variant='primary' size = "lg">
                Normal
            </Button>
        </div>
    )
}