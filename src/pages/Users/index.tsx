import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UserTable } from '../../pageComplement/Users/components';
import { Container } from '../../pageComplement/Users/styles'
import { Creators as UsersActions } from '../../core/store/ducks/users'
import { IUsersDuckInitialState } from '../../core/interfaces';
import { Header } from '../../core/components';

const Users = (props: any) => {

    const dispatch = useDispatch()
    const userData = useSelector((state: { users: IUsersDuckInitialState }) => state.users)

    useEffect(() => {
        dispatch(UsersActions.UsersRequest())
    }, [props])

    return (
        <Container>
            <Header />
            {userData.data !== null ?
                <UserTable data={userData.data} /> :
                <></>
            }
        </Container>
    )
}

export default Users;