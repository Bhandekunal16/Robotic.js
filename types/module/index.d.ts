/// <reference types="node" />
export = Node;
declare class Node {
    create(name: string): string;
    rl: readline.Interface;
    getUserInput(): string;
    output(): any[];
}
import readline = require("readline");
