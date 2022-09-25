import {
    Button,
    Input,
    Table,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { getLocalStorage } from '../../../../core/hooks'
import { IUser } from '../../../../core/interfaces'
import { addDeletedUserInLocalStorage } from '../../hooks'
import { TrUserItem } from '../TrUserItem'
import { Container } from './styles'
interface IUserTable {
    data: IUser[]
}
export const UserTable = ({ data }: IUserTable) => {

    const [deletedUsers, setDeletedUsers] = useState<string>('')

    const handleDeleteUserButton = (user: IUser) => {
        addDeletedUserInLocalStorage(user, setDeletedUsers)
    }
    const handleEditUserButton = (user: IUser) => {
        // addDeletedUserInLocalStorage(user, setDeletedUsers)
    }


    return (
        <Container>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>nome</Th>
                            <Th>cpf</Th>
                            <Th>telefone</Th>
                            <Th>email</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((item, index) => {
                            if (deletedUsers?.match(item.cpf) || getLocalStorage("deletedUsers")?.match(item.cpf)) return
                            return <TrUserItem
                                item={item}
                                index={index}
                                handleDeleteUserButton={handleDeleteUserButton}
                                handleEditUserButton={handleEditUserButton}
                            />
                        })}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>nome</Th>
                            <Th>cpf</Th>
                            <Th>telefone</Th>
                            <Th>email</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </Container>
    )
}