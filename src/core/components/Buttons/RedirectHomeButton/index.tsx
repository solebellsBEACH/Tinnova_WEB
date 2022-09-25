import { Box, Spinner, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button } from './styles'

export const RedirectHomeButton = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false);

    return (
        <Button>
            {loading ? <Box>
                <Spinner color='white' size='lg' /></Box> :
                <Text
                    color='white'
                    fontWeight='bold'
                    fontFamily='roboto'
                    fontSize='2xl'
                    marginLeft='10px'
                    onClick={() => {
                        setLoading(true)
                        router.push('/')
                    }}
                >
                    Criar Usuário
                </Text>
            }
        </Button>
    )
}