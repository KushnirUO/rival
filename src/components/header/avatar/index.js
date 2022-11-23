import React from 'react';
import {Box} from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Image from '../../../assets/image/avatar.svg'

const styleAvatar = {
    height: '5rem',
    width: "5rem"
};

const ImageAvatar = () => {
    return (
        <Box>
            <Avatar alt="Photo Avatar" src={Image} style={styleAvatar}/>
        </Box>
    );
};

export default ImageAvatar;