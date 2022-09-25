import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UserTable } from '../../pageComplement/Users/components';
import { Container } from '../../pageComplement/Users/styles'
import { Creators as UsersActions } from '../../core/store/ducks/users'
import { IUsersDuckInitialState } from '../../core/interfaces';
import { Header, LottieComponent, RedirectHomeButton } from '../../core/components';
import { Box, Text } from '@chakra-ui/react';
import { getLocalStorage } from '../../core/hooks';
import { getStorageUsers } from '../../pageComplement/Home/hooks';

const Users = (props: any) => {

    const dispatch = useDispatch()
    const userData = useSelector((state: { users: IUsersDuckInitialState }) => state.users)
    useEffect(() => {
        dispatch(UsersActions.UsersRequest())
    }, [props])

    let tableData = userData.data

    if (typeof window !== 'undefined') {
        let users = getLocalStorage('users')
        if (users && userData.data) {
            tableData = userData.data.concat(getStorageUsers(users))
        }
    }

    return (
        <Container>
            <Header
                label='Listagem de usuários'
            />
            <Text
                color='white'
                fontWeight='bold'
                fontFamily='roboto'
                fontSize='5xl'
                marginLeft='10px'
            >Listagem de Usuários</Text>
            {userData.data !== null ?
                <UserTable data={tableData !== null ? tableData : userData.data} /> :
                <Box
                    marginTop='30px'
                    marginBottom='50px'
                ><LottieComponent size={200} /></Box>
            }
            <RedirectHomeButton />
        </Container>
    )
}

export default Users;