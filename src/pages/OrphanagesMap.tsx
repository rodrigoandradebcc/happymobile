import React from 'react';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import mapMarker from '../images/map-marker.png';
import { Feather } from '@expo/vector-icons';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function OrphanagesMap(){
    const navigation = useNavigation();

    function handleNavigateToOrphanagesDetails(){
        navigation.navigate('OrphanageDetails');
    }

    return(
        <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map} 
        initialRegion={{
          latitude: -1.3629395,
          longitude: -48.4088016,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}>
          <Marker 
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
            icon={mapMarker}
            coordinate={{
              latitude: -1.3629395,
              longitude: -48.4088016,

          }}>
            <Callout tooltip onPress={handleNavigateToOrphanagesDetails}>
              <View style={styles.callOutContainer}>
                <Text style={styles.callOutText} >Lar das meninas</Text>
              </View>
            </Callout>
          </Marker>
        </MapView>

        <View style={styles.footer}>
          <Text style={styles.footerText}>2 orfanatos encontrados</Text>
        
          <TouchableOpacity style={styles.createOrphanageButton} onPress={() => {}}>
            <Feather name="plus" size={20} color="#FFF"/>
          </TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  
    callOutContainer: {
      width: 168,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 16,
      justifyContent: 'center',
    
    },
  
    callOutText: {
      color: '#0089a5',
      fontSize: 14,
      fontFamily: 'Nunito_700Bold',
  
    },
  
    footer: {
      position: 'absolute',
      left: 24,
      right: 24,
  
      bottom: 32,
      backgroundColor: '#FFF',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation: 1,
    },
  
    footerText: {
      fontFamily: 'Nunito_700Bold',
      color: '#8fa7b3',
    },
  
    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor: '#15c3d6',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center',
    }
  
  });