import React, { ReactElement } from 'react';
import View from 'react-native-gesture-handler/lib/typescript/GestureHandlerRootView';

interface ListItemProps {
    name: string, 
    amount: number, 
    time: number
}

export const ListItem: React.FC<ListItemProps> = ({ name, amount, time }): ReactElement => {

    return (<>
        <View style={{styles.container}}> 
            <View style={{styles.container_text}}>
                <Text style={{styles.title}}>{name}</Text>
                <Text style={{styles.description}}>{amount} {time}</Text>
            </View>
        </View>
    </>)
    

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
});

export default ListItem;