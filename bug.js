This error occurs when using the FlatList component in React Native and trying to access a prop or state value within the renderItem function that hasn't been properly passed down or initialized.  This often happens when the data source for the FlatList is not yet populated or is empty.  Example:

```javascript
//Incorrect
<FlatList
  data={this.state.items}
  renderItem={({item}) => (
    <Text>{item.name}</Text> //Error if this.state.items is empty or undefined
  )}
/>
```