import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components';
import toast, { Toaster } from 'react-hot-toast';

import emailjs from '@emailjs/browser';

import WallImg from '../assets/images/wall.png';
import Titan from '../assets/images/titan.png';

import Happy from '../assets/images/happy.gif';
import Sad from '../assets/images/sad.gif';

import { postFormFailure, postFormStart, postFormSuccess } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import CustomToast from '../components/CustomToast';

const Container = styled.section`
    width: 100%;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
    overflow: hidden;
`
const Wall = styled.img`
    width: 100%;
    margin-top: 3rem;
    height: auto;
    z-index: 80;

    @media (max-width: 768px) {
        object-fit: cover;
        width: 100%;
    }
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    background-color: ${props => props.theme.body};
    margin: 1rem 0;
    z-index: 90;
    overflow: scroll;
    padding: 0 1rem;

    @media (max-width: 495px) {
        flex-direction: column;
    }

    label{
        font-size: 14px;
        width: 100%;
        font-weight: 300;
        color: ${props => props.theme.text};
    }
    input{
        width: 100%;
        border: 0.5px solid ${props => props.theme.text}75;
        border-radius: 4px;
        font-size: 14px;
        padding: 0.5rem;
        background-color: transparent;

        &::placeholder {
            color: ${props => props.theme.faded};
            font-weight: 300;
            font-size: 14px;
        }

        &:focus{
            outline: none;
        }
    }

    @media (max-width: 768px){
        width: 100%;
    }
`
const Colossol = styled.img`
    position: absolute;
    top: ${props => props.top};
    transition: all 0.5s ease-in-out;

    @media (max-width: 768px){
        top: 0;
    }
    @media (max-width: 495px){
        top: 20px;
    }
`
const Fields = styled.div`
    opacity: ${props => props.opacity === true ? 1 : 0};

    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: flex-start;
    justify-content: start;
`

const FormPage = () => {
    const formRef = useRef();
    const [input, setInput] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        graduated: '',
        qualification: '',
    })
    const [top, setTop] = useState('20px');

    const fields = {
        name: true,
        email: true,
        address: true,
        phone: true,
        graduated: true,
        qualification: true,
        button: true,
    }

    useEffect(() => {
        const titanAppear = () => {
            if(input.name !== "") {
                setTop('-30px')

                if(input.email !== "") {
                    setTop('-40px')

                    if(input.address !== "") {
                        setTop('-50px')

                        if(input.phone !== "") {
                            setTop('-60px')

                            if(input.graduated !== "") {
                                setTop('-70px')
                                
                                if(input.qualification !== "") {
                                    setTop('-80px')
                                }
                                else {
                                    setTop('-70px')
                                }
                            }
                            else {
                                setTop('-60px')
                            }
                        }
                        else {
                            setTop('-50px')
                        }
                    }
                    else {
                        setTop('-40px')
                    }
                }
                else {
                    setTop('-30px')
                }
            }
            else {
                setTop('10px')
            }
        }
        titanAppear();
    }, [input])

    const { isFetching } = useSelector(state => state.user);
    
    const [loading, setLoading] = useState(false);

    const sendEmail = () => {
        emailjs.sendForm('service_6qwqfkx', 'template_5q9w6e7', formRef.current, 'sZXKe8nzDj5avX1Bp')
            .then((result) => {
                
                toast.custom((t) => (
                    <div
                        className={`${
                        t.visible ? 'animate-enter' : 'animate-leave'
                        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                    >
                        <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">
                            <img
                                className="h-10 w-10 rounded-full"
                                src={Happy}
                                alt="success"
                            />
                            </div>
                            <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-gray-900">
                                Successfull
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Thank you for submitting the form
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="flex border-l border-gray-200">
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Close
                        </button>
                        </div>
                    </div>
                ))

                console.log(result.text);
                setInput({
                    name: '',
                    email: '',
                    address: '',
                    phone: '',
                    graduated: '',
                    qualification: '',
                })
                setLoading(false);

            }, (error) => {
                toast.custom((t) => (
                    <div
                        className={`${
                        t.visible ? 'animate-enter' : 'animate-leave'
                        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                    >
                        <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">
                            <img
                                className="h-10 w-10 rounded-full"
                                src={Sad}
                                alt="success"
                            />
                            </div>
                            <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-gray-900">
                                Something went wrong
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Please try again later.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="flex border-l border-gray-200">
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Close
                        </button>
                        </div>
                    </div>
                ))
                setLoading(false);
            },
        );
    };

    const dispatch = useDispatch();
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);

        if(input.name === "" || input.email === "" || input.address === "" || input.phone === "" || input.graduated === "" || input.qualification === "") {
            toast.custom((t) => (
                <div
                    className={`${
                    t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                    <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={Sad}
                            alt="success"
                        />
                        </div>
                        <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                            Did you fill all the fields?
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                            Please fill all the fields.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Close
                    </button>
                    </div>
                </div>
            ))
            setLoading(false);
        }
        else {
            dispatch(postFormStart());
            
            try {
                sendEmail();
                dispatch(postFormSuccess(input));
            }
            catch(err) {
                dispatch(postFormFailure());
                console.log(err);
                toast.custom((t) => (
                    <div
                        className={`${
                        t.visible ? 'animate-enter' : 'animate-leave'
                        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                    >
                        <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">
                            <img
                                className="h-10 w-10 rounded-full"
                                src={Sad}
                                alt="success"
                            />
                            </div>
                            <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-gray-900">
                                Something went wrong
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Please try again later.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="flex border-l border-gray-200">
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Close
                        </button>
                        </div>
                    </div>
                ))
            }
        }
    }

    return (
        <Container>
            <Colossol src={Titan} alt='Collosal' top={top}/>
            <Wall src={WallImg} alt="titan"/>
            
            <Form className='no-scroll w-11/12 md:w-3/4 lg:w-1/3' ref={formRef} onSubmit={handleSubmit}>
                <Fields opacity={fields.name}>
                    <label>Name</label>
                    <input 
                        type="text" 
                        value={input.name} 
                        name='user_name'
                        placeholder="Your Name"
                        onChange={(e) => setInput({...input, name: e.target.value})}
                    />
                </Fields>
                <Fields opacity={fields.email}>
                    <label>Email</label>
                    <input 
                        type="mail" 
                        value={input.email}
                        name='user_email'
                        placeholder="youremail@gmail.com" 
                        onChange={(e) => setInput({...input, email: e.target.value})}
                    />
                </Fields>
                <Fields opacity={fields.phone}>
                    <label>Phone</label>
                    <input 
                        type="number" 
                        maxLength={10}
                        pattern="[0-9]"
                        value={input.phone}
                        name='user_phone'
                        placeholder="98XXXXXXXX" 
                        onChange={(e) => setInput({...input, phone: e.target.value})}
                    />
                </Fields>
                <Fields opacity={fields.address}>
                    <label>Address</label>
                    <input 
                        type="text" 
                        value={input.address} 
                        placeholder="Street, City"
                        name='user_address'
                        onChange={(e) => setInput({...input, address: e.target.value})}
                    />
                </Fields>
                <Fields opacity={fields.graduated}>
                    <label>+2 Graduated From (A.D.)</label>
                    <input 
                        type="number" 
                        value={input.graduated}
                        placeholder="2021" 
                        name='user_graduated'
                        onChange={(e) => setInput({...input, graduated: e.target.value})}
                    />
                </Fields>
                <Fields opacity={fields.qualification}>
                    <label>Latest Qualification</label>
                    <input 
                        type="text" 
                        value={input.qualification}
                        placeholder="Degree in level" 
                        name='user_qualification'
                        onChange={(e) => setInput({...input, qualification: e.target.value})}
                    />
                </Fields>
                <button className='w-auto h-max px-4 py-2 bg-white text-black rounded-sm mt-6 disabled:opacity-0' disabled={loading}>Submit</button>
            </Form>

            <Toaster />
            {
                isFetching || loading ?
                <Loading /> 
                :
                null
            }
        </Container>
    )
}

export default FormPage