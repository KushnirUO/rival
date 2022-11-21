import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import './style.scss'
function BlockPrototype(){
    return (
        <div className="block-skeleton">
            <Box width={1123} height={80} sx={{bgcolor: '#2D3748', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '2rem'}}>
             <Skeleton variant="circular" width={40} height={40} sx={{ bgcolor: '#C4C4C4' }}/>
            </Box>
            <Box width={1123} height={617} sx={{display: 'flex'}}>
                <Box width={290} height={617} sx={{display: 'flex', flexDirection:'column', bgcolor: '#EDF2F7', gap:'1.8rem', alignItems: 'flex-start', padding:'0 6.1rem 0 6.8rem' }}>
                    <Skeleton variant="rectangular" width={66} height={12} sx={{ bgcolor: '#63B3ED',margin:'9.9rem 0 0 1.8rem'}}/>
                    <Box sx={{display: 'flex', gap:'0.8rem'}}>
                        <Skeleton variant="circular" width={10} height={10} sx={{ bgcolor: '#A0AEC0' }}/>
                        <Skeleton variant="rectangular" width={119} height={12} sx={{ bgcolor: '#2A4365' }}/>
                    </Box>
                    <Box sx={{display: 'flex', gap:'0.8rem'}}>
                        <Skeleton variant="circular" width={10} height={10} sx={{ bgcolor: '#A0AEC0' }}/>
                        <Skeleton variant="rectangular" width={119} height={12} sx={{ bgcolor: '#2A4365' }}/>
                        <Skeleton variant="circular" width={10} height={10} sx={{ bgcolor: '#F56565', marginLeft:'0.6rem'}}/>
                    </Box>
                    <Box sx={{display: 'flex', gap:'0.8rem'}}>
                        <Skeleton variant="circular" width={10} height={10} sx={{ bgcolor: '#A0AEC0' }}/>
                        <Skeleton variant="rectangular" width={119} height={12} sx={{ bgcolor: '#2A4365' }}/>
                    </Box>
                    <Box sx={{display: 'flex', gap:'0.8rem'}}>
                        <Skeleton variant="circular" width={10} height={10} sx={{ bgcolor: '#A0AEC0' }}/>
                        <Skeleton variant="rectangular" width={119} height={12} sx={{ bgcolor: '#2A4365' }}/>
                    </Box>
                    <Box sx={{display: 'flex', gap:'0.8rem'}}>
                        <Skeleton variant="circular" width={10} height={10} sx={{ bgcolor: '#A0AEC0' }}/>
                        <Skeleton variant="rectangular" width={119} height={12} sx={{ bgcolor: '#2A4365' }}/>
                    </Box>
                    <Box sx={{display: 'flex', gap:'0.8rem'}}>
                        <Skeleton variant="circular" width={10} height={10} sx={{ bgcolor: '#A0AEC0' }}/>
                        <Skeleton variant="rectangular" width={119} height={12} sx={{ bgcolor: '#2A4365' }}/>
                    </Box>
                    <Box sx={{display: 'flex', gap:'0.8rem'}}>
                        <Skeleton variant="circular" width={10} height={10} sx={{ bgcolor: '#A0AEC0' }}/>
                        <Skeleton variant="rectangular" width={119} height={12} sx={{ bgcolor: '#2A4365' }}/>
                    </Box>
                    <Skeleton variant="rectangular" width={66} height={12} sx={{ bgcolor: '#63B3ED',marginLeft:'1.8rem' }}/>
                    <Box sx={{display: 'flex', gap:'0.8rem'}}>
                        <Skeleton variant="circular" width={10} height={10} sx={{ bgcolor: '#A0AEC0' }}/>
                        <Skeleton variant="rectangular" width={119} height={12} sx={{ bgcolor: '#2A4365' }}/>
                    </Box>
                    <Box sx={{display: 'flex', gap:'0.8rem'}}>
                        <Skeleton variant="circular" width={10} height={10} sx={{ bgcolor: '#A0AEC0' }}/>
                        <Skeleton variant="rectangular" width={119} height={12} sx={{ bgcolor: '#2A4365' }}/>
                    </Box>
                    <Box sx={{display: 'flex', gap:'0.8rem'}}>
                        <Skeleton variant="circular" width={10} height={10} sx={{ bgcolor: '#A0AEC0' }}/>
                        <Skeleton variant="rectangular" width={119} height={12} sx={{ bgcolor: '#2A4365' }}/>
                    </Box>
                    <Box sx={{display: 'flex', gap:'0.8rem'}}>
                        <Skeleton variant="circular" width={10} height={10} sx={{ bgcolor: '#A0AEC0' }}/>
                        <Skeleton variant="rectangular" width={119} height={12} sx={{ bgcolor: '#2A4365' }}/>
                    </Box>
                </Box>
                <Box width={833} height={617} sx={{display: 'flex', flexDirection:'column', bgcolor: '#FFFCFE', padding:'4.4rem 4.5rem 4.4rem 2.7rem' }}>
                    <Box sx={{display: 'flex', paddingBottom: '2.9rem', alignItems: 'center'}}>
                        <Skeleton variant="rectangular" width={75} height={12} sx={{ bgcolor: '#2A4365', marginRight:'18.5rem'}}/>
                        <Skeleton variant="rectangular" width={75} height={12} sx={{ bgcolor: '#2A4365', marginRight:'14.4rem'}}/>
                        <Skeleton variant="rectangular" width={75} height={12} sx={{ bgcolor: '#2A4365', marginRight:'11.5rem'}}/>
                        <Skeleton variant="rounded" width={92} height={27} sx={{ bgcolor: '#2A4365'}}/>
                    </Box>
                    <Skeleton variant="rectangular" width={759} height={1} sx={{ bgcolor: '#E2E8F0', marginBottom: '2.2rem'}}/>
                    <Box height={76} sx={{display: 'flex', padding:'2.5rem 4rem 2.4rem 3rem', bgcolor: '#EDF2F7', alignItems: 'center', marginBottom: '2.5rem'}}>
                        <Box sx={{ display: 'flex', flexDirection:'column', gap:'0.7rem', paddingRight: '8.5rem'}}>
                            <Skeleton variant="rectangular" width={145} height={12} sx={{ bgcolor: '#2A4365'}}/>
                            <Skeleton variant="rectangular" width={89} height={8} sx={{ bgcolor: '#CBD5E0'}}/>
                        </Box>
                        <Box sx={{ paddingRight: '13.3rem'}}>
                            <Skeleton variant="rectangular" width={86} height={12} sx={{ bgcolor: '#9AE6B4'}}/>
                        </Box>
                        <Box sx={{ display: 'flex',gap:'1rem', paddingRight: '12.3rem', alignItems: 'center'}}>
                            <Skeleton variant="rectangular" width={47} height={12} sx={{ bgcolor: '#2A4365'}}/>
                            <Skeleton variant="rectangular" width={26} height={8} sx={{ bgcolor: '#CBD5E0'}}/>
                        </Box>
                        <Box sx={{ display: 'flex', gap:'0.6rem'}}>
                            <Skeleton variant="circular" width={6} height={6} sx={{ bgcolor: '#718096' }}/>
                            <Skeleton variant="circular" width={6} height={6} sx={{ bgcolor: '#718096' }}/>
                            <Skeleton variant="circular" width={6} height={6} sx={{ bgcolor: '#718096' }}/>
                        </Box>
                    </Box>
                    <Box height={76} sx={{display: 'flex', padding:'2.5rem 4rem 2.4rem 3rem', bgcolor: '#EDF2F7', alignItems: 'center', marginBottom: '2.9rem'}}>
                        <Box sx={{ display: 'flex', flexDirection:'column', gap:'0.7rem', paddingRight: '8.5rem'}}>
                            <Skeleton variant="rectangular" width={145} height={12} sx={{ bgcolor: '#2A4365'}}/>
                            <Skeleton variant="rectangular" width={89} height={8} sx={{ bgcolor: '#CBD5E0'}}/>
                        </Box>
                        <Box sx={{ paddingRight: '13.3rem'}}>
                            <Skeleton variant="rectangular" width={86} height={12} sx={{ bgcolor: '#FEB2B2'}}/>
                        </Box>
                        <Box sx={{ display: 'flex',gap:'1rem', paddingRight: '12.3rem', alignItems: 'center'}}>
                            <Skeleton variant="rectangular" width={47} height={12} sx={{ bgcolor: '#2A4365'}}/>
                            <Skeleton variant="rectangular" width={26} height={8} sx={{ bgcolor: '#CBD5E0'}}/>
                        </Box>
                        <Box sx={{ display: 'flex', gap:'0.6rem'}}>
                            <Skeleton variant="circular" width={6} height={6} sx={{ bgcolor: '#718096' }}/>
                            <Skeleton variant="circular" width={6} height={6} sx={{ bgcolor: '#718096' }}/>
                            <Skeleton variant="circular" width={6} height={6} sx={{ bgcolor: '#718096' }}/>
                        </Box>
                    </Box>
                    <Box height={76} sx={{display: 'flex', padding:'2.5rem 4rem 2.4rem 3rem', bgcolor: '#EDF2F7', alignItems: 'center', marginBottom: '2.5rem'}}>
                        <Box sx={{ display: 'flex', flexDirection:'column', gap:'0.7rem', paddingRight: '8.5rem'}}>
                            <Skeleton variant="rectangular" width={145} height={12} sx={{ bgcolor: '#2A4365'}}/>
                            <Skeleton variant="rectangular" width={89} height={8} sx={{ bgcolor: '#CBD5E0'}}/>
                        </Box>
                        <Box sx={{ paddingRight: '13.3rem'}}>
                            <Skeleton variant="rectangular" width={86} height={12} sx={{ bgcolor: '#9AE6B4'}}/>
                        </Box>
                        <Box sx={{ display: 'flex',gap:'1rem', paddingRight: '12.3rem', alignItems: 'center'}}>
                            <Skeleton variant="rectangular" width={47} height={12} sx={{ bgcolor: '#2A4365'}}/>
                            <Skeleton variant="rectangular" width={26} height={8} sx={{ bgcolor: '#CBD5E0'}}/>
                        </Box>
                        <Box sx={{ display: 'flex', gap:'0.6rem'}}>
                            <Skeleton variant="circular" width={6} height={6} sx={{ bgcolor: '#718096' }}/>
                            <Skeleton variant="circular" width={6} height={6} sx={{ bgcolor: '#718096' }}/>
                            <Skeleton variant="circular" width={6} height={6} sx={{ bgcolor: '#718096' }}/>
                        </Box>



                    </Box>
                    <Box height={76} sx={{display: 'flex', padding:'2.5rem 4rem 2.4rem 3rem', bgcolor: '#EDF2F7', alignItems: 'center'}}>
                        <Box sx={{ display: 'flex', flexDirection:'column', gap:'0.7rem', paddingRight: '8.5rem'}}>
                            <Skeleton variant="rectangular" width={145} height={12} sx={{ bgcolor: '#2A4365'}}/>
                            <Skeleton variant="rectangular" width={89} height={8} sx={{ bgcolor: '#CBD5E0'}}/>
                        </Box>
                        <Box sx={{ paddingRight: '13.3rem'}}>
                            <Skeleton variant="rectangular" width={86} height={12} sx={{ bgcolor: '#FBD38D'}}/>
                        </Box>
                        <Box sx={{ display: 'flex',gap:'1rem', paddingRight: '12.3rem', alignItems: 'center'}}>
                            <Skeleton variant="rectangular" width={47} height={12} sx={{ bgcolor: '#2A4365'}}/>
                            <Skeleton variant="rectangular" width={26} height={8} sx={{ bgcolor: '#CBD5E0'}}/>
                        </Box>
                        <Box sx={{ display: 'flex', gap:'0.6rem'}}>
                            <Skeleton variant="circular" width={6} height={6} sx={{ bgcolor: '#718096' }}/>
                            <Skeleton variant="circular" width={6} height={6} sx={{ bgcolor: '#718096' }}/>
                            <Skeleton variant="circular" width={6} height={6} sx={{ bgcolor: '#718096' }}/>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent:'center',paddingTop:'5.6rem', gap:'0.9rem'}}>
                        <Skeleton variant="circular" width={30} height={30} sx={{ display: 'flex', justifyContent:'center',alignItems:'center', bgcolor: '#2A4365', font:'700 1.6rem / 1.9rem \'Roboto\',sans-serif',color:'#F7FAFC' }}>1</Skeleton>
                        <Skeleton variant="circular" width={30} height={30} sx={{ display: 'flex', justifyContent:'center',alignItems:'center', bgcolor: '#E2E8F0', font:'700 1.6rem / 1.9rem \'Roboto\',sans-serif',color:'#2C5282' }}>2</Skeleton>
                        <Skeleton variant="circular" width={30} height={30} sx={{ display: 'flex', justifyContent:'center',alignItems:'center', bgcolor: '#E2E8F0', font:'700 1.6rem / 1.9rem \'Roboto\',sans-serif',color:'#2C5282' }}>3</Skeleton>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default BlockPrototype;