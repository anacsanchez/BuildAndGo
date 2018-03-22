// StackNavigator helps navigating components and we will use
import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

// List of Component
import Auth from './Auth'
import Signup from './Signup'
import Profile from './Profile'
import Racing from './2DRacing'
import Winner from './Winner'
import Loser from './Loser'
import Searching from './AR/ARstart'
import ARrender from './AR/ARrender'
import Inventory from './Inventory'
import CompleteCar from './CompleteCar'

export const RootStack = StackNavigator({
 Auth : {
   screen: Auth
 },
 Signup: {
   screen: Signup
 },
 Profile: {
   screen: Profile
 },
 Racing: {
   screen: Racing
 },
 Searching: {
   screen: Searching
 },
 Winner: {
   screen: Winner
 },
 Loser: {
   screen: Loser
 },
 ARrender: {
   screen: ARrender
 },
 Inventory: {
   screen: Inventory
 },
 CompleteCar: {
   screen: CompleteCar
 }
})
