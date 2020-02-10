import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, margin: 20, alignItems: 'center', justifyContent: 'center',}}>
        <Text style={{fontSize: 50}}>Lista de Compras</Text>
        <Text style={{fontSize: 30}}>HD para Notebooks</Text>
        <Text style={{fontSize: 30}}>Tipos de CABO USB</Text>
        
        <Button
          title="Cadastrar Produtos"
          onPress={ () => this.props.navigation.navigate('Profile', 
          {name: 'HD SAMSUNG 1TB PARA NOTEBOOK', text: 'Cabo USB 2.0 ADB Device'})}
          
        />
      </View>
    );
  }
}

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Produto Cadastrado', 
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headTitleStyle: {
      fontWeight: 'bold'
    }
    };
  
  render() {

    const name = this.props.navigation.getParam('name', 'Anonimo');
    const texto = this.props.navigation.getParam('text', 'N„o determinado');

    return (
      <View
        style={{
          flex: 1,
          margin: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        
        <Text style={{fontSize: 50}}>Produto: {JSON.stringify(name)}</Text>
        <Text style={{fontSize: 50}}>Produto: {JSON.stringify(texto)}</Text>
        <Button
          title= "Lista de Produtos Cadastrados"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends Component {
  render() {
    return (
      <View
        style={{flex: 1, margin: 20, alignItems: 'center',justifyContent: 'center'}}>
        <Text style={{fontSize: 50}}>Itens Cadastrados</Text>
        <Text style={{fontSize: 50}}>HD SAMSUNG 1TB PARA NOTEBOOK</Text>
        <Text style={{fontSize: 50}}>Cabo USB 2.0 ADB Device</Text>
        
        <Button
          title="Ir para a tela Inicial"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button title="Voltar" onPress={() => this.props.navigation.goBack()} 
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);


const App = createAppContainer(AppNavigator);

export default App;