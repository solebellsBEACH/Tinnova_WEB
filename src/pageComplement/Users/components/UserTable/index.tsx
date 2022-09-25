import {
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react'
import React from 'react'
import { IUser } from '../../../../core/interfaces'
import { Container } from './styles'
interface IUserTable {
    data: IUser[]
}
export const UserTable = ({ data }: IUserTable) => {
    console.log(data)
    return (
        <Container>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>nome</Th>
                            <Th>cpf</Th>
                            <Th>phone</Th>
                            <Th>email</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((item, index) => {
                            return <Tr
                                key={`trTable${index}`}
                            >
                                <Td>{item.name}</Td>
                                <Td>{item.cpf}</Td>
                                <Td>{item.phone}</Td>
                                <Td>{item.email}</Td>
                            </Tr>
                        })}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>nome</Th>
                            <Th>cpf</Th>
                            <Th>phone</Th>
                            <Th>email</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </Container>
    )
}