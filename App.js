import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/Login';
import VerifyEmail from './screens/VerifyEmail';
import Register from './screens/Register';
import RegisterVerify from './screens/RegisterVerify';
import Passphrase from './screens/Passphrase';
import ForgotPassword from './screens/ForgotPassword';
import ForgotPasswordVerify from './screens/ForgotPasswordVerify';
import ForgotPasswordChange from './screens/ForgotPasswordChange';
import PasswordChanged from './screens/PasswordChanged';
import MyAccount from './screens/MyAccount';
import TransferCoins from './screens/TransferCoins';
import TransactionHistory from './screens/TransactionHistory';
import Settings from './screens/Settings';
import ChangePassword from './screens/ChangePassword';
import ChangeEmailAddress from './screens/ChangeEmailAddress';
import ConfirmChangeEmail from './screens/ConfirmChangeEmail';
import Contact from './screens/Contact';

import { AppLoading } from 'expo';
import Asset from 'expo-asset';
import images from './LocalImages';

console.disableYellowBox = true;
class LoginScreen extends React.Component {
  render() {
    return (
      <Login navigation={this.props.navigation}/>
    );
  }  
}

class VerifyEmailScreen extends React.Component {
  render() {
    return ( 
      <VerifyEmail navigation={this.props.navigation}/>
    );
  }  
}

class RegisterScreen extends React.Component {
  render() {
    return ( 
      <Register navigation={this.props.navigation}/>
    );
  }  
}

class RegisterVerifyScreen extends React.Component {
  render() {
    return ( 
      <RegisterVerify navigation={this.props.navigation}/>
    );
  }  
}

class PassphraseScreen extends React.Component {
  render() {
    return ( 
      <Passphrase navigation={this.props.navigation}/>
    );
  }  
}

class ForgotPasswordScreen extends React.Component {
  render() {
    return ( 
      <ForgotPassword navigation={this.props.navigation}/>
    );
  }  
}

class ForgotPasswordVerifyScreen extends React.Component {
  render() {
    return ( 
      <ForgotPasswordVerify navigation={this.props.navigation}/>
    );
  }  
}

class ForgotPasswordChangeScreen extends React.Component {
  render() {
    return ( 
      <ForgotPasswordChange navigation={this.props.navigation}/>
    );
  }  
}

class PasswordChangedScreen extends React.Component {
  render() {
    return ( 
      <PasswordChanged navigation={this.props.navigation}/>
    );
  }  
}

class MyAccountScreen extends React.Component {
  render() {
    return ( 
      <MyAccount navigation={this.props.navigation}/>
    );
  }  
}

class TransferCoinsScreen extends React.Component {
  render() {
    return ( 
      <TransferCoins navigation={this.props.navigation}/>
    );
  }  
}

class TransactionHistoryScreen extends React.Component {
  render() {
    return ( 
      <TransactionHistory navigation={this.props.navigation}/>
    );
  }  
}

class SettingsScreen extends React.Component {
  render() {
    return ( 
      <Settings navigation={this.props.navigation}/>
    );
  }  
}

class ChangePasswordScreen extends React.Component {
  render() {
    return ( 
      <ChangePassword navigation={this.props.navigation}/>
    );
  }  
}

class ChangeEmailAddressScreen extends React.Component {
  render() {
    return ( 
      <ChangeEmailAddress navigation={this.props.navigation}/>
    );
  }  
}

class ConfirmChangeEmailScreen extends React.Component {
  render() {
    return ( 
      <ConfirmChangeEmail navigation={this.props.navigation}/>
    );
  }  
}

class ContactScreen extends React.Component {
  render() {
    return ( 
      <Contact navigation={this.props.navigation}/>
    );
  }  
}

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,    
    VerifyEmail: VerifyEmailScreen,
    Register: RegisterScreen,
    RegisterVerify: RegisterVerifyScreen,
    Passphrase: PassphraseScreen,
    ForgotPassword: ForgotPasswordScreen,
    ForgotPasswordVerify: ForgotPasswordVerifyScreen,
    ForgotPasswordChange: ForgotPasswordChangeScreen,
    PasswordChanged: PasswordChangedScreen,
    MyAccount: MyAccountScreen,
    TransferCoins: TransferCoinsScreen,
    TransactionHistory: TransactionHistoryScreen,
    Settings: SettingsScreen,
    ChangePassword: ChangePasswordScreen,
    ChangeEmailAddress: ChangeEmailAddressScreen,
    ConfirmChangeEmail: ConfirmChangeEmailScreen,
    Contact: ContactScreen

  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

const AppStack = createAppContainer(RootStack);

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }
  
    _loadResourcesAsync = async () => {
      return Promise.all([
        await Asset.loadAsync(images),
      ]);
    };
  
    _handleLoadingError = error => {
      console.warn(error);
    };
  
    _handleFinishLoading = () => {
      this.setState({ isLoadingComplete: true });
    };
  
   
  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <AppStack/>
      );
    }
  }
}
