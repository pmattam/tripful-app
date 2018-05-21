import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 
import { List, ListItem } from "react-native-elements";
let _ = require('lodash');
 
export default class ActivityMapScreen extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      address: props.navigation.state.params.address,
      loading: false,
      data: [],
      pageToken: '',
      refreshing: false,
      siteTitle: '',
      geoData: {}
    };
  }
 
  componentDidMount() {
 
    this.fetchAll();
  }
 

  fetchAll = () => {
    var geoURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDhUOOJ3zqFcsqCSl9pyYMXXiyMw03wH4E`;
      fetch(geoURL, {method: 'GET'})
        .then(response  => { return response.json() })
        .then(apiObjData => {
          // console.log(apiObjData.results[0]);
          return apiObjData.results[0];
        })
        .then(geoData => {
          this.setState(() => ({geoData: geoData}))
        }).then(this.fetchData);
  }

  fetchData = () => {
          const latitude = this.state.geoData.geometry.location.lat;
          const longitude = this.state.geoData.geometry.location.lng;
          const { pageToken } = this.state;
          const urlFirst = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=500&type=park&key=AIzaSyCjJJy-t6er3IhlGaUA0jFw0dAxI-cPWEw`
    
          const urlNext = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=500&type=park&key=AIzaSyCjJJy-t6er3IhlGaUA0jFw0dAxI-cPWEw&pagetoken=${pageToken}`;
 
          let url = pageToken === '' ? urlFirst : urlNext
          // console.log(url);
          // console.log("url");
          // console.log(latitude);
          // console.log(longitude);

          this.setState({ loading: true });
          fetch(url)
            .then(res => {
              return res.json()
            })
            .then(res => {
              // console.log("GOT THE RESULT", res);
              const arrayData = _.uniqBy( [...this.state.data, ...res.results] , 'id' )
      
              this.setState({
                siteTitle: "Activities Near By",
                data: pageToken === '' ? res.results : arrayData,
                loading: false,
                refreshing: false,
                pageToken: res.next_page_token
              });
            })
            .catch(error => {
              // console.log("TEST", error);
              this.setState({ loading: false });
            });
  }

  renderSeparator = () => {
   return (
     <View
       style={{
         height: 1,
         width: "86%",
         backgroundColor: "#CED0CE",
         marginLeft: "14%"
       }}
     />
   );
  };
  renderHeader = () => {
    return (<Text 
      style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20, marginBottom: 10}}>{this.state.siteTitle}</Text>)
  };
  renderFooter = () => {
 
    if (this.state.pageToken === undefined) return null;
 
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
 
  handleRefresh = () => {
    this.setState(
      {
        pageToken: '',
        refreshing: true
      },
      () => {
        this.fetchAll();
      }
    );
  };
 
  handleLoadMore = () => {
    this.fetchData();
  };
  render() {
  
    return (
      <View>    
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }} >
      <FlatList
        data={this.state.data}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={this.renderFooter}
        renderItem={({ item }) =>{
   
          const rating = item.rating ? item.rating : 'na'
 
          return (<View><ListItem
              roundAvatar
              title={`${item.name}`+" ("+`${rating}`+")"}
              subtitle={`${item.vicinity}` }
              //avatar={{ uri: item.icon }}
              containerStyle={{ borderBottomWidth: 0 }}
            />
            <View
              style={{
                height: 1,
                width: "86%",
                backgroundColor: "#CED0CE",
                marginLeft: "14%"
              }}
            /></View>
          )
        }}
        onRefresh={this.handleRefresh}
        refreshing={this.state.refreshing}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={50}
      />
      </List>
      </View>
    );
  }
}