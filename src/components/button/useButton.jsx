import {makeStyles} from "@mui/styles";

export const useButton = makeStyles({
    button: (props) => ({
        background: props.background ,
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    }),
});