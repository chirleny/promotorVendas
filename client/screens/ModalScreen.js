import React, { useState } from 'react';
import { Button, Modal, Text, View, StyleSheet } from 'react-native';

const MyModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modal}>
          <Text>Usuário cadastrado com sucesso! Faça login para acessar sua conta.</Text>
          <Button
            title="Close Modal"
            onPress={() => {
              setModalVisible(false);
            }}
          />
        </View>
      </Modal>
      <Button
        title="Open Modal"
        onPress={() => {
          setModalVisible(true);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    modal:{
        backgroundColor: '#68A54C', 
        margin: 20,
        padding: 20,
        borderRadius: 20,
        elevation:10
    },
  });

export default MyModal;
