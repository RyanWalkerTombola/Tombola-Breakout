import { Component } from '../entity';
import { Vector, Calc } from '../utilites';
import { resolution } from '../app';
import Cube from './cube';

export default class Player extends Component {

    public cube: Cube | undefined
    public speed: number = 0;

    Start() {
        
    }

    Update(delta: number) {
        
    }
}