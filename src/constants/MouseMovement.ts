
export const MouseMovements  = {
    UP: 'UP',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
}

export type MouseMovement = typeof MouseMovements[keyof typeof MouseMovements];
