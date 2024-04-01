import React from 'react';
import Navbar from '../components/Navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { IoBagCheckSharp } from "react-icons/io5";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { pink } from '@mui/material/colors';
const Services = () => {
    return (
        <div>
            <Navbar />
            <h1 className='text-[#5C8D89] text-3xl mt-10'>Services</h1>
            <p className='mt-2'>We provide mulitple options to users.</p>
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <BusinessCenterIcon sx={{ color: pink[500] }} />
                            <Typography gutterBottom variant="h5" component="div">
                                Easy to Use
                            </Typography>
                            <Typography variant="body2" color="text.secondary">


                                <ul className="list-disc text-left">
                                    <li>Click Login</li>
                                    <li>Make UserID</li>
                                    <li>Register Component</li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <BusinessCenterIcon sx={{ color: pink[500] }} />
                            <Typography gutterBottom variant="h5" component="div">
                                Easy to Use
                            </Typography>
                            <Typography variant="body2" color="text.secondary">


                                <ul className="list-disc text-left">
                                    <li>Click Login</li>
                                    <li>Make UserID</li>
                                    <li>Register Component</li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <BusinessCenterIcon sx={{ color: pink[500] }} />
                            <Typography gutterBottom variant="h5" component="div">
                                Easy to Use
                            </Typography>
                            <Typography variant="body2" color="text.secondary">


                                <ul className="list-disc text-left">
                                    <li>Click Login</li>
                                    <li>Make UserID</li>
                                    <li>Register Component</li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
};

export default Services;