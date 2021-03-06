import React from 'react';
import { View, StyleSheet} from 'react-native';

import { 
    Avatar, 
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import { 
    DrawerContentScrollView, 
    DrawerItem 
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons';

import { AuthContext } from '../components/context'


export default function ProfileScreen(props) {

    const { signOut } = React.useContext(AuthContext);

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }


    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
            <Drawer.Section title="Profile" style={styles.drawerContent}>
                <Drawer.Section style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop: 15}}>
                        <Avatar.Image 
                            source={require('../assets/avatar.jpeg')}
                            size={50}
                        />
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                            <Title style={styles.title}>Mayank Ratre</Title>
                            <Caption style={styles.caption}>@i_am_mayank</Caption>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>30</Paragraph>
                            <Caption style={styles.caption}>Following</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>32k </Paragraph>
                            <Caption style={styles.caption}>Followers</Caption>
                        </View>
                    </View>
                </Drawer.Section>
                <Drawer.Section title="From App" style={styles.drawerSection}>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="home-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Home"
                        onPress={() => {props.navigation.navigate('Home')}}
                    />
                     <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="account-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Profile"
                        onPress={() => {props.navigation.navigate('Profile')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="bookmark-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Exchange"
                        onPress={() => {props.navigation.navigate('Exchange')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icons 
                            name="ios-settings-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Settings"
                        onPress={() => {props.navigation.navigate('Settings')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="account-check-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Support"
                        onPress={() => {props.navigation.navigate('SupportScreen')}}
                    />
                 </Drawer.Section>
                 <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={() => {toggleTheme()}}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={isDarkTheme}/>
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section title="Exit App" style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
        
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 20,
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      bottomDrawerSection: {
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
})
