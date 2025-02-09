# React Native FlatList: Accessing undefined prop/state in renderItem

This repository demonstrates a common error in React Native's FlatList component: attempting to access a prop or state value within the `renderItem` function before it's been properly initialized or when the data source is empty.  This can lead to unexpected behavior or crashes.

## The Problem

The `bug.js` file shows how accessing `item.name` in `renderItem` can throw an error if `this.state.items` is null, undefined, or empty before the component mounts or updates.

## The Solution

The `bugSolution.js` file demonstrates the correct approach: adding a check to ensure that `this.state.items` is not empty and contains an object before attempting to access `item.name`. This prevents the error and ensures the component renders correctly.