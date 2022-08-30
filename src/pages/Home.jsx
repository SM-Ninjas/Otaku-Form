import React, { useState } from 'react'
import styled from 'styled-components';
import toast, { Toaster } from 'react-hot-toast';

import Bg from '../assets/videos/bg.mp4';

import { postFormFailure, postFormStart } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: relative;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    overflow: auto;
    gap: 0.75rem;
    z-index: 90;
    overflow: scroll;
    padding: 2rem;
    border-radius: 8px;
    background-color: ${props => props.theme.body};

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

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`
const Video = styled.video`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`
const Fields = styled.div`
    opacity: ${props => props.opacity === true ? 1 : 0};

    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: flex-start;
    justify-content: start;
`

const Home = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        graduated: '',
        qualification: '',
    })
    // const [top, setTop] = useState('20px');
    // const [fields, setFields] = useState({
    //     name: true,
    //     email: true,
    //     address: true,
    //     phone: true,
    //     graduated: true,
    //     qualification: true,
    //     button: true,
    // });
    const fields = {
        name: true,
        email: true,
        address: true,
        phone: true,
        graduated: true,
        qualification: true,
        button: true,
    }

    // useEffect(() => {
    //     const titanAppear = () => {
    //         if(input.name !== "") {
    //             setTop('-30px')

    //             if(input.email !== "") {
    //                 setTop('-40px')

    //                 if(input.address !== "") {
    //                     setTop('-50px')

    //                     if(input.phone !== "") {
    //                         setTop('-60px')

    //                         if(input.graduated !== "") {
    //                             setTop('-70px')
                                
    //                             if(input.qualification !== "") {
    //                                 setTop('-80px')
    //                             }
    //                             else {
    //                                 setTop('-70px')
    //                             }
    //                         }
    //                         else {
    //                             setTop('-60px')
    //                         }
    //                     }
    //                     else {
    //                         setTop('-50px')
    //                     }
    //                 }
    //                 else {
    //                     setTop('-40px')
    //                 }
    //             }
    //             else {
    //                 setTop('-30px')
    //             }
    //         }
    //         else {
    //             setTop('10px')
    //         }
    //     }
    //     titanAppear();
    // }, [input])

    // useEffect(() => {
    //     const fieldsAppear = () => {
    //         if(input.name !== "") {
    //             setFields({
    //                 name: true,
    //                 email: true,
    //                 address: false,
    //                 phone: false,
    //                 graduated: false,
    //                 qualification: false,
    //                 button: false,
    //             })
    //             if (input.email !== "") {
    //                 setFields({
    //                     name: true,
    //                     email: true,
    //                     address: false,
    //                     phone: true,
    //                     graduated: false,
    //                     qualification: false,
    //                     button: false,
    //                 })
    //                 if(input.phone !== "") {
    //                     setFields({
    //                         name: true,
    //                         email: true,
    //                         address: true,
    //                         phone: true,
    //                         graduated: false,
    //                         qualification: false,
    //                         button: false,
    //                     })
    //                     if(input.address !== "") {
    //                         setFields({
    //                             name: true,
    //                             email: true,
    //                             address: true,
    //                             phone: true,
    //                             graduated: true,
    //                             qualification: false,
    //                             button: false,
    //                         })
    //                         if(input.graduated !== "") {
    //                             setFields({
    //                                 name: true,
    //                                 email: true,
    //                                 address: true,
    //                                 phone: true,
    //                                 graduated: true,
    //                                 qualification: true,
    //                                 button: false,
    //                             })
    //                             if(input.qualification !== "") {
    //                                 setFields({
    //                                     name: true,
    //                                     email: true,
    //                                     address: true,
    //                                     phone: true,
    //                                     graduated: true,
    //                                     qualification: true,
    //                                     button: true,
    //                                 })
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //         else {
    //             setFields({
    //                 name: true,
    //                 email: false,
    //                 address: false,
    //                 phone: false,
    //                 graduated: false,
    //                 qualification: false,
    //                 button: false,
    //             })
    //         }
    //     }
    //     fieldsAppear();
    // }, [fields, input])

    const { isFetching } = useSelector(state => state.user);
    // const loading = true;

    const dispatch = useDispatch();
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        
        dispatch(postFormStart());
        
        try {

            toast.success('Form submitted successfully!')
        }
        catch(err) {
            dispatch(postFormFailure(err));
            toast.error('Something went wrong. Please try again later.', )
        }
    }

    return (
        <Container>
            {/* <Colossol src={Titan} alt='Collosal' top={top}/>
            <Wall src={WallImg} alt="titan"/> */}
            <Video 
                src={Bg}
                type="video/mp4"
                autoPlay
                loop
                muted
                controls={false}
            />
            <Overlay>
                <Form className='no-scroll w-11/12 md:w-3/4 lg:w-1/4'>
                    <Fields opacity={fields.name}>
                        <label>Name</label>
                        <input 
                            type="text" 
                            value={input.name} 
                            placeholder="Your Name"
                            onChange={(e) => setInput({...input, name: e.target.value})}
                        />
                    </Fields>
                    <Fields opacity={fields.email}>
                        <label>Email</label>
                        <input 
                            type="mail" 
                            value={input.email}
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
                            onChange={(e) => setInput({...input, address: e.target.value})}
                        />
                    </Fields>
                    <Fields opacity={fields.graduated}>
                        <label>+2 Graduated From (A.D.)</label>
                        <input 
                            type="number" 
                            value={input.graduated}
                            placeholder="2021" 
                            onChange={(e) => setInput({...input, graduated: e.target.value})}
                        />
                    </Fields>
                    <Fields opacity={fields.qualification}>
                        <label>Latest Qualification</label>
                        <input 
                            type="text" 
                            value={input.qualification}
                            placeholder="Degree in level" 
                            onChange={(e) => setInput({...input, qualification: e.target.value})}
                        />
                    </Fields>
                    <button className='w-auto h-max px-4 py-2 bg-white text-black rounded-sm mt-6' onClick={handleSubmit}>Submit</button>
                </Form>
            </Overlay>

            <Toaster />
            {
                isFetching &&
                <Loading /> 
            }
        </Container>
    )
}

export default Home