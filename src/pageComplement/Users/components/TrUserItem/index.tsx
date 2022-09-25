import { Button, Input, Td, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IUser } from '../../../../core/interfaces'
import { addEditedUserInLocalStorage } from '../../hooks'

interface ITrUserItem {
    item: IUser
    handleDeleteUserButton: (item: IUser) => void
    
}

export const TrUserItem = ({ item, handleDeleteUserButton}: ITrUserItem) => {

    const [editableMode, setEditableMode] = useState(false)
    const [form, setForm] = useState<IUser>(item)

    const handleEditUserButton = (user: IUser) => {
        addEditedUserInLocalStorage(form)
    }


    return <Tr
        
    >
        <Td><Input
            variant={!editableMode ? 'unstyled' : 'filled'}
            placeholder={item.name}
            defaultValue={item.name}
            readOnly={!editableMode}
            onChange={e => setForm({ ...form, name: e.target.value })}
        /></Td>
        <Td>{item.cpf}</Td>
        <Td><Input
            variant={!editableMode ? 'unstyled' : 'filled'}
            placeholder={item.phone}
            defaultValue={item.phone}
            readOnly={!editableMode}
            onChange={e => setForm({ ...form, phone: e.target.value })}
        /></Td>
        <Td><Input
            variant={!editableMode ? 'unstyled' : 'filled'}
            placeholder={item.email}
            defaultValue={item.email}
            readOnly={!editableMode}
            onChange={e => setForm({ ...form, phone: e.target.value })}
        /></Td>
        <Td>
            <Button
                onClick={() => { handleDeleteUserButton(item) }}
                colorScheme='red' size='xs'>
                Excluir
            </Button>
        </Td>
        <Td>
            {editableMode ?
                <>
                    <Button
                        marginRight='10px'
                        onClick={() => {
                            setEditableMode(false)
                        }}
                        colorScheme='yellow' size='xs'>
                        Cancelar
                    </Button>
                    <Button
                        onClick={() => {
                            setEditableMode(false)
                            if (JSON.stringify(form) !== JSON.stringify(item)) {
                                handleEditUserButton(item)
                            }

                        }}
                        colorScheme='blue' size='xs'>
                        Confirmar
                    </Button>
                </> : <Button
                    onClick={() => {
                        setEditableMode(true)
                    }}
                    colorScheme='blue' size='xs'>
                    Editar
                </Button>}

        </Td>
    </Tr>

}