import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import { buscarSenhas, criarSenha } from '../../../infrastructure/database/watermelon/repositories/password'
import Password from '../../../infrastructure/database/watermelon/models/password'


const TesteWatermelon = () => {
const [senhas, setSenhas] = useState<Password[]>([])

  const handleCriar = async () => {
    await criarSenha('user-123', 'Gmail', 'minhasenha123')
    await carregar()
  }

  const carregar = async () => {
    const result = await buscarSenhas()
    setSenhas(result)
  }

  useEffect(() => {
    carregar()
  }, [])

  return (
    <View>
      <Button title="Criar senha" onPress={handleCriar} />
      {senhas.map(senha => (
        <Text key={senha.id}>{senha.title}</Text>
      ))}
    </View>
  )
}

export default TesteWatermelon