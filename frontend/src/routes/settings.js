import { Button, Flex, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { update_user, logout} from "../api/endpoints"

import { useNavigate } from "react-router-dom"

const Settings = () => {

    const storage = JSON.parse(localStorage.getItem('userData'))

    const [username, setUsername] = useState(storage ? storage.username : '')
    const [email, setEmail] = useState(storage ? storage.email : '')
    const [firstName, setFirstName] = useState(storage ? storage.first_name : '')
    const [lastName, setLastName] = useState(storage ? storage.last_name : '')
    const [bio, setBio] = useState(storage ? storage.bio : '')
    const [profile_image, setProfileImage] = useState(storage ? storage.profile_image : '')

    const nav = useNavigate();

    const handleLogout = async () => {
        try{
            await logout();
            nav('/login')
        } catch{
            alert('error logging out')
        }
    }

    const handleUpdate = async () => {
        try {
            const formData = new FormData();
    
            // Append the fields to FormData
            formData.append("username", username);
            formData.append("email", email);
            formData.append("first_name", firstName);
            formData.append("last_name", lastName);
            formData.append("bio", bio);

            // Only append profile_image if a new image is selected
            if (profile_image) {
                formData.append("profile_image", profile_image);
            }

            const response = await update_user(formData);
            if (response.success) {
                // Update localStorage with the new profile data
                const updatedData = {
                    username, 
                    email, 
                    first_name: firstName, 
                    last_name: lastName, 
                    bio,
                    profile_image: response.profile_image // Assuming backend returns the new image URL
                };
                localStorage.setItem("userData", JSON.stringify(updatedData));

                alert('Successfully updated');
            } else {
                alert('Error updating details');
            }
        } catch (error) {
            alert('Error updating details');
            console.error("Error updating profile:", error);
        }
    };
    
    return( 
        <Flex w='100%' justifyContent='center' pt='50px'>
            <VStack w='95%' maxWidth='500px' gap='20px'>
                <Heading>Settings</Heading>
                <VStack w='100%' gap='10px' alignItems='start'>
                    <FormControl>
                        <FormLabel>Profile Picture</FormLabel>
                        <input onChange={(e) => setProfileImage(e.target.files[0])}  bg='white' type='file' accept='image/jpeg, image/png'/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input onChange={(e) => setUsername(e.target.value)} value={username} bg='white' type='text'/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input onChange={(e) => setEmail(e.target.value)} value={email} bg='white' type='email'/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input onChange={(e) => setFirstName(e.target.value)} value={firstName} bg='white' type='text'/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input onChange={(e) => setLastName(e.target.value)} value={lastName} bg='white' type='text'/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Bio</FormLabel>
                        <Textarea onChange={(e) => setBio(e.target.value)} value={bio} bg='white' type='text'/>
                    </FormControl>
                    <Button onClick={handleUpdate} w='100%' colorScheme="blue" mt='10px'>Save Changes</Button>
                </VStack>

                <Button onClick={handleLogout} colorScheme="red">Logout</Button>
            </VStack>
        </Flex>
    )
}

export default Settings