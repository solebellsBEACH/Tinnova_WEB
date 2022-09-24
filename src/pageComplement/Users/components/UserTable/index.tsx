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
import { Container } from './styles'

export const UserTable = () => {
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
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>millimetres (mm)</Td>
                        </Tr>
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