import { Button, Input, Td, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IUser } from '../../../../core/interfaces'

interface ITrUserItem {
    item: IUser
    index: number
    handleDeleteUserButton: (item: IUser) => void
    handleEditUserButton: (item: IUser) => void
}

export const TrUserItem = ({ item, index, handleDeleteUserButton, handleEditUserButton }: ITrUserItem) => {

    const [editableMode, setEditableMode] = useState(false)

    return <Tr
        key={`trTable${index}`}
    >
        <Td><Input variant={!editableMode ? 'unstyled' : 'filled'} placeholder={item.name} defaultValue={item.name} readOnly={!editableMode} /></Td>
        <Td>{item.cpf}</Td>
        <Td><Input variant={!editableMode ? 'unstyled' : 'filled'} placeholder={item.phone} defaultValue={item.phone} readOnly={!editableMode} /></Td>
        <Td><Input variant={!editableMode ? 'unstyled' : 'filled'} placeholder={item.email} defaultValue={item.email} readOnly={!editableMode} /></Td>
        <Td>
            <Button
                onClick={() => { handleDeleteUserButton(item) }}
                colorScheme='red' size='xs'>
                Excluir
            </Button>
        </Td>
        <Td>
            {editableMode ? <Button
                onClick={() => {

                    setEditableMode(false)
                    // handleEditUserButton(item)
                }}
                colorScheme='yellow' size='xs'>
                Confirmar edição
            </Button> : <Button
                onClick={() => {

                    setEditableMode(true)
                    // handleEditUserButton(item)
                }}
                colorScheme='blue' size='xs'>
                Editar
            </Button>}

        </Td>
    </Tr>

}