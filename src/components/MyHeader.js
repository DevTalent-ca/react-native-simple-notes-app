import React, { Component } from 'react';
import { TouchableOpacity, Image, Modal } from 'react-native';
import { Text, Thumbnail, Header, Left, Right, Body, View, ListItem, List } from 'native-base';

class MyHeader extends Component {
    constructor() {
        super()
        this.state = {
            modalVisible: false
        }
    }

    setVisible(visibel){
        this.setState({modalVisible: visibel})
    }

    render() {
        return(
            <View>
            <Header style={{backgroundColor:'white'}}>
                <Left style={{flex:1}}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                    <Thumbnail
                        source={require('../../assets/logo.jpeg')}
                        style={{ width: 45, height: 45}}
                    />
                    </TouchableOpacity>
                </Left>
                <Body style={{flex: 2, alignSelf:'center'}}>
                    <Text>{this.props.page}</Text>
                </Body>
                <Right style={{flex:1}}>
                <TouchableOpacity transparet
                onPress={() => {
                  this.setVisible(true)
                }}>
                <Image source={require('../../assets/desc.png')} style={{width: 20, height: 20, marginRight: 10}} />
                </TouchableOpacity>
                </Right>
            </Header>
            <View>
            
            <TouchableOpacity onPress={() => this.setVisible(!this.state.modalVisible)}> 
            <Modal
            animationType="fade"
            animated={true}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
                this.setVisible(!this.state.modalVisible);
            }}>
            <View style={{
                borderWidth: 0.4,
                marginTop: 50,
                width: 150,
                position: 'absolute',
                alignSelf: 'flex-end',
                marginRight: 20,
                right: 3,
                backgroundColor: 'white'}}>
                <View>
                <List>
                    <ListItem>
                    <TouchableOpacity
                        onPress={() => {
                            this.setVisible(!this.state.modalVisible);
                        }}>
                        <Text>Ascending</Text>
                    </TouchableOpacity>
                    </ListItem>

                    <ListItem>
                    <TouchableOpacity
                        onPress={() => {
                            this.setVisible(!this.state.modalVisible);
                        }}>
                        <Text>Descending</Text>
                    </TouchableOpacity>
                    </ListItem>
                </List>
                </View>
            </View>
            </Modal>
            </TouchableOpacity>
            </View>
            </View>
        )
    }
}

export default MyHeader;